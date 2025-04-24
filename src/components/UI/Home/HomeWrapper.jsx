"use client";

import dynamic from "next/dynamic";

const TravelCarousel = dynamic(
  () => import("@/components/UI/HomeCarousel/TravelCarousel"),
  {
    loading: () => (
      <div className="h-screen w-full rounded-md bg-gray-400 animate-pulse"></div>
    ),
  }
);

// Export the dynamic components directly
export { TravelCarousel };
