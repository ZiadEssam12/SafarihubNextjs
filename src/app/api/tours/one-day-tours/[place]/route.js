import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// returns
// title , slug , in image from the gallary , tour price

export async function GET(request, { params }) {
  const { place } = await params;
  console.log("place", place);
  const formattedPlace = place.replace(/-/g, " ");

  try {
    const data = await prisma.tour.findMany({
      take: 20,
      where: {
        destinations: {
          some: {
            destination: {
              // Add this level to access the actual Destination model
              title: {
                contains: formattedPlace,
                mode: "insensitive",
              },
            },
          },
        },
      },
      select: {
        title: true,
        slug: true,
        overview_text: true,
        start_from: true,
        gallery: true,
      },
    });

    // Transform the data to return just the first gallery image and rename adult_price to price if needed

    return NextResponse.json(
      {
        success: true,
        data,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching tours:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Error fetching tours",
      },
      { status: 500 }
    );
  }
}
