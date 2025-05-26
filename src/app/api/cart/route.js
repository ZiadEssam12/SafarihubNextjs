import { auth } from "@/app/auth";
import prisma from "@/lib/prisma";
import { cartItemSchema } from "@/schemas/cart";
import { NextResponse } from "next/server";

// model CartItem {
//   id          String   @id @default(cuid())
//   cartId      String
//   cart        Cart     @relation(fields: [cartId], references: [id], onDelete: Cascade)
//   tourId      Int
//   tour        Tour     @relation(fields: [tourId], references: [id])
//   date        DateTime // Selected tour date
//   adults      Int      @default(1)
//   children    Int      @default(0)
//   infants     Int      @default(0)
//   adultPrice  Float // Store price at time of adding to cart
//   childPrice  Float // Store price at time of adding to cart
//   infantPrice Float // Store price at time of adding to cart
//   totalPrice  Float // Calculated price based on quantities
//   createdAt   DateTime @default(now())
//   updatedAt   DateTime @updatedAt

//   @@unique([cartId, tourId, date]) // Prevent duplicates with same date
// }

// GET - Retrieve user's cart
export const GET = auth(async function GET(request) {
  try {
    const { user } = request.auth;

    if (!user) {
      return NextResponse.json(
        { success: false, message: "User not authenticated" },
        { status: 401 }
      );
    }

    // Get user cart with items and tour details
    const userCart = await prisma.cart.findUnique({
      where: { userId: user.id },
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
                destinations: {
                  include: {
                    destination: {
                      select: {
                        title: true,
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    });

    // If no cart exists, return empty cart
    if (!userCart) {
      return NextResponse.json({
        success: true,
        cart: {
          id: null,
          items: [],
          total: 0,
          itemCount: 0,
        },
      });
    }

    // console.log("User cart:", userCart);

    return NextResponse.json({
      success: true,
      cart: {
        ...userCart,
        itemCount: userCart.items.length,
      },
    });
  } catch (error) {
    console.error("Error fetching cart:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch cart" },
      { status: 500 }
    );
  }
});

export const POST = auth(async function POST(request) {
  try {
    const { user } = request.auth;
    if (!user) {
      return NextResponse.json(
        { success: false, message: "User not authenticated" },
        { status: 401 }
      );
    }

    // Get or create user cart
    let userCart = await prisma.cart.findUnique({
      where: { userId: user.id },
      include: { items: true },
    });

    if (!userCart) {
      userCart = await prisma.cart.create({
        data: {
          userId: user.id,
          total: 0,
        },
        include: { items: true },
      });
    } // Get cart data from request
    const cart = await request.json();

    // // Validate the cart item using schema
    // await cartItemSchema.validate(cart, {
    //   abortEarly: false,
    // });

    if (!cart.adults) {
      cart.adults = 1;
    }
    if (!cart.children) {
      cart.children = 0;
    }
    if (!cart.infants) {
      cart.infants = 0;
    }
    // console.log("Cart data:", cart);

    // Search for the tour in the database
    const tour = await prisma.tour.findUnique({
      where: { id: cart.tourId },
      include: {
        pricing_groups: true, // Note: updated to match your schema
      },
    });

    if (!tour) {
      return NextResponse.json(
        { success: false, message: "Tour not found" },
        { status: 404 }
      );
    }

    // Check if tour is enabled
    if (!tour.enabled) {
      return NextResponse.json(
        { success: false, message: "Tour is not available" },
        { status: 400 }
      );
    }

    // Check if the same tour with same date already exists in cart
    // remove the comments if you need the user to have duplicate tours in the cart
    // but each tour in the cart should have a different date
    const existingCartItem = userCart.items.find(
      (item) => item.tourId === cart.tourId
      //  &&
      //   new Date(item.date).toDateString() ===
      //     new Date(cart.date).toDateString()
    );

    if (existingCartItem) {
      return NextResponse.json(
        {
          success: false,
          message: "Tour already exists in you cart",
        },
        { status: 400 }
      );
    }

    // Get pricing - handle both individual prices and pricing groups
    let adultPrice = tour.adult_price;
    let childPrice = tour.child_price;
    let infantPrice = tour.infant_price;

    // If pricing groups exist, use the appropriate group pricing
    if (tour.pricing_groups && tour.pricing_groups.length > 0) {
      const totalPeople =
        (cart.adults || 1) + (cart.children || 0) + (cart.infants || 0);
      const applicablePricingGroup = tour.pricing_groups.find(
        (group) => totalPeople >= group.from && totalPeople <= group.to
      );

      if (applicablePricingGroup) {
        adultPrice = applicablePricingGroup.price;
        childPrice = applicablePricingGroup.child_price;
        // Infant price usually remains the same
      }
    } // Calculate total price for this cart item
    const totalPrice =
      adultPrice * (cart.adults || 1) +
      childPrice * (cart.children || 0) +
      infantPrice * (cart.infants || 0);

    // Create the cart item in database
    const newCartItem = await prisma.cartItem.create({
      data: {
        cartId: userCart.id,
        tourId: cart.tourId,
        fromDate: cart.date ? new Date(cart.date) : new Date(),
        toDate: cart.toDate
          ? new Date(cart.toDate)
          : (() => {
              const endDate = new Date();
              endDate.setDate(endDate.getDate() + tour.duration_in_days);
              return endDate;
            })(),
        adults: cart.adults || 1,
        children: cart.children || 0,
        infants: cart.infants || 0,
        adultPrice: adultPrice,
        childPrice: childPrice,
        infantPrice: infantPrice,
        totalPrice: totalPrice,
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
    const updatedCart = await prisma.cart.update({
      where: { id: userCart.id },
      data: {
        total: userCart.total + totalPrice,
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

    return NextResponse.json(
      {
        success: true,
        message: "Tour added to cart successfully",
        cartItem: newCartItem,
        cart: updatedCart,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding item to cart:", error);
    return NextResponse.json(
      { message: "Failed to add item to cart" },
      { status: 500 }
    );
  }
});
