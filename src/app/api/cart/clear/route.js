import { auth } from "@/app/auth";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// DELETE - Clear entire cart
export const DELETE = auth(async function DELETE(request) {
  try {
    const { user } = request.auth;

    console.log("user id: ", user);

    if (!user) {
      return NextResponse.json(
        { success: false, message: "User not authenticated" },
        { status: 401 }
      );
    }

    // Find user's cart
    const userCart = await prisma.cart.findUnique({
      where: { userId: user.id },
    });

    if (!userCart) {
      return NextResponse.json(
        { success: false, message: "Cart not found" },
        { status: 404 }
      );
    }

    // Delete all cart items (cascade will handle this, but being explicit)
    await prisma.cartItem.deleteMany({
      where: { cartId: userCart.id },
    });

    // Reset cart total
    const updatedCart = await prisma.cart.update({
      where: { id: userCart.id },
      data: {
        total: 0,
      },
      include: {
        items: true,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Cart cleared successfully",
      cart: updatedCart,
    });
  } catch (error) {
    console.error("Error clearing cart:", error);
    return NextResponse.json(
      { success: false, message: "Failed to clear cart" },
      { status: 500 }
    );
  }
});
