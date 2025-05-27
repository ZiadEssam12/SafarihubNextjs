import { auth } from "@/app/auth";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// PATCH - Update cart item
export const PUT = auth(async function PUT(request, { params }) {
  try {
    const { user } = request.auth;
    if (!user) {
      return NextResponse.json(
        { success: false, message: "User not authenticated" },
        { status: 401 }
      );
    }
    const { itemId: cartItemId } = await params;
    const { adults, children, infants, fromDate, fromTime } =
      await request.json();

    if (!cartItemId) {
      return NextResponse.json(
        { success: false, message: "Cart item ID is required" },
        { status: 400 }
      );
    }

    // Find the cart item
    const cartItem = await prisma.cartItem.findFirst({
      where: {
        id: cartItemId,
        cart: {
          userId: user.id,
        },
      },
      include: {
        cart: true,
        tour: {
          select: {
            id: true,
            title: true,
            duration_in_days: true,
            adult_price: true,
            child_price: true,
            infant_price: true,
            pricing_groups: true,
          },
        },
      },
    });

    if (!cartItem) {
      return NextResponse.json(
        { success: false, message: "Cart item not found" },
        { status: 404 }
      );
    }

    // Calculate new pricing if quantities changed
    let adultPrice = cartItem.adultPrice;
    let childPrice = cartItem.childPrice;
    let infantPrice = cartItem.infantPrice;

    // Recalculate pricing if pricing groups exist and quantities changed
    if (
      cartItem.tour.pricing_groups &&
      cartItem.tour.pricing_groups.length > 0
    ) {
      const totalPeople =
        (adults || cartItem.adults) +
        (children || cartItem.children) +
        (infants || cartItem.infants);
      const applicablePricingGroup = cartItem.tour.pricing_groups.find(
        (group) => totalPeople >= group.from && totalPeople <= group.to
      );

      if (applicablePricingGroup) {
        adultPrice = applicablePricingGroup.price;
        childPrice = applicablePricingGroup.child_price;
      }
    }

    // Calculate new total price
    const newAdults = adults !== undefined ? adults : cartItem.adults;
    const newChildren = children !== undefined ? children : cartItem.children;
    const newInfants = infants !== undefined ? infants : cartItem.infants;
    const newTotalPrice =
      adultPrice * newAdults +
      childPrice * newChildren +
      infantPrice * newInfants; // Combine fromDate and fromTime if both are provided

    // Validate fromDate is not in the past
    if (fromDate) {
      const inputDate = new Date(fromDate);
      const today = new Date();

      // Set time to start of day for accurate comparison
      today.setHours(0, 0, 0, 0);
      inputDate.setHours(0, 0, 0, 0);

      if (inputDate < today) {
        return NextResponse.json(
          { success: false, message: "From date cannot be in the past" },
          { status: 400 }
        );
      }
    }

    let combinedFromDate;
    if (fromDate && fromTime) {
      // Combine date (YYYY-MM-DD) and time (HH:MM) into ISO datetime
      // Create local datetime first, then convert to UTC for consistent storage
      combinedFromDate = new Date(`${fromDate}T${fromTime}:00`);
    } else if (fromDate) {
      // If only date is provided, use the existing time from the current item
      const existingTime = new Date(cartItem.fromDate);
      const hours = existingTime.getHours().toString().padStart(2, "0");
      const minutes = existingTime.getMinutes().toString().padStart(2, "0");
      combinedFromDate = new Date(`${fromDate}T${hours}:${minutes}:00`);
    }

    // Calculate toDate based on tour duration - always calculate if we have a fromDate
    let newToDate;
    if (combinedFromDate && cartItem.tour.duration_in_days) {
      newToDate = new Date(combinedFromDate);
      newToDate.setDate(newToDate.getDate() + cartItem.tour.duration_in_days);
    } else if (combinedFromDate) {
      // Fallback: if no duration_in_days, use the existing toDate logic
      const durationDays = cartItem.tour.duration || 1; // Default to 1 day if no duration
      newToDate = new Date(combinedFromDate);
      newToDate.setDate(newToDate.getDate() + durationDays);
    }

    // Update the cart item
    const updatedCartItem = await prisma.cartItem.update({
      where: { id: cartItemId },
      data: {
        ...(adults !== undefined && { adults }),
        ...(children !== undefined && { children }),
        ...(infants !== undefined && { infants }),
        ...(combinedFromDate && { fromDate: combinedFromDate }),
        ...(newToDate && { toDate: newToDate }),
        adultPrice,
        childPrice,
        infantPrice,
        totalPrice: newTotalPrice,
        updatedAt: new Date(),
      },
      include: {
        tour: {
          select: {
            id: true,
            title: true,
            slug: true,
            gallery: true,
            duration: true,
          },
        },
      },
    });

    // Update cart total
    const priceDifference = newTotalPrice - cartItem.totalPrice;
    const updatedCart = await prisma.cart.update({
      where: { id: cartItem.cartId },
      data: {
        total: cartItem.cart.total + priceDifference,
        updatedAt: new Date(),
      },
    });

    return NextResponse.json({
      success: true,
      message: "Cart item updated successfully",
      cartItem: updatedCartItem,
      cart: updatedCart,
    });
  } catch (error) {
    console.error("Error updating cart item:", error);
    return NextResponse.json(
      { success: false, message: "Failed to update cart item" },
      { status: 500 }
    );
  }
});

// DELETE - Remove item from cart
export const DELETE = auth(async function DELETE(request, { params }) {
  try {
    const user = request.auth?.user;
    if (!user) {
      return NextResponse.json(
        { success: false, message: "User not authenticated" },
        { status: 401 }
      );
    }

    const cartItemId = (await params).itemId;
    console.log("itemId:", cartItemId);

    if (!cartItemId) {
      return NextResponse.json(
        { success: false, message: "Cart item ID is required" },
        { status: 400 }
      );
    }

    // Find the cart item to ensure it belongs to the user
    const cartItem = await prisma.cartItem.findFirst({
      where: {
        id: cartItemId,
        cart: {
          userId: user.id,
        },
      },
      include: {
        cart: true,
      },
    });

    if (!cartItem) {
      return NextResponse.json(
        { success: false, message: "Cart item not found" },
        { status: 404 }
      );
    }

    // Remove the cart item
    await prisma.cartItem.delete({
      where: { id: cartItemId },
    });

    // Update cart total
    const updatedCart = await prisma.cart.update({
      where: { id: cartItem.cartId },
      data: {
        total: cartItem.cart.total - cartItem.totalPrice,
        updatedAt: new Date(),
      },
      include: {
        items: {
          include: {
            tour: {
              select: {
                id: true,
                title: true,
                slug: true,
                gallery: true,
                duration: true,
              },
            },
          },
        },
      },
    });

    return NextResponse.json({
      success: true,
      message: "Item removed from cart successfully",
      cart: updatedCart,
    });
  } catch (error) {
    console.error("Error removing item from cart:", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
});
