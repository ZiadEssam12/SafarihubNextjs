import { PrismaClient } from "generated/prisma";
import { NextResponse } from "next/server";

const Prisma = new PrismaClient();

// GET /api/tours/featured - get a small set of tours with minimal data
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    let limit = parseInt(searchParams.get("limit") || "10");
    if (limit > 20) limit = 20; // Limit to a maximum of 20

    const featuredTours = await Prisma.tour.findMany({
      take: limit,
      orderBy: {
        rate: "desc", // Order by rating to get the best tours
      },
      select: {
        id: true,
        slug: true,
        title: true,
        start_from: true,
        overview_text: true,
        gallery: true, // Just get the first image in your component
      },
    });

    return NextResponse.json({
      success: true,
      data: featuredTours,
    });
  } catch (error) {
    console.error("Error fetching featured tours:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch featured tours" },
      { status: 500 }
    );
  }
}
