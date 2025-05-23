// PATCH - Update cart item
export const PATCH = auth(async function PATCH(request) {
  try {
    const user = request.auth?.user;
    if (!user) {
      return NextResponse.json(
        { success: false, message: "User not authenticated" },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const cartItemId = searchParams.get("itemId");
    const { adults, children, infants, date } = await request.json();

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
          include: {
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
      infantPrice * newInfants;

    // Update the cart item
    const updatedCartItem = await prisma.cartItem.update({
      where: { id: cartItemId },
      data: {
        ...(adults !== undefined && { adults }),
        ...(children !== undefined && { children }),
        ...(infants !== undefined && { infants }),
        ...(date && { date: new Date(date) }),
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

// ...existing DELETE function...import { auth } from "@/app/auth";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// DELETE - Remove item from cart
export const DELETE = auth(async function DELETE(request) {
  try {
    const user = request.auth?.user;
    if (!user) {
      return NextResponse.json(
        { success: false, message: "User not authenticated" },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const cartItemId = searchParams.get("itemId");

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
      { success: false, message: "Failed to remove item from cart" },
      { status: 500 }
    );
  }
});
