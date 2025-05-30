"use client";

import TravelCard from "@/components/TravelCard/TravelCard";
import dynamic from "next/dynamic";

const Carousel = dynamic(() => import("@/components/UI/Carousel/Carousel"), {
  loading: () => <p className="w-full h-[500px] bg-gray-200 animate-pulse"></p>,
});

const CarouselButtons = dynamic(
  () => import("@/components/UI/Carousel/CarouselButtons"),
  {
    loading: () => <p className="w-full h-full bg-gray-100 animate-pulse"></p>,
  }
);

const CarouselDots = dynamic(
  () => import("@/components/UI/Carousel/CarouselDots"),
  {
    loading: () => <p className="w-full h-full bg-gray-100 animate-pulse"></p>,
  }
);

export default function HomeCarousel({ dots, carouselData }) {
  return (
    <Carousel
      CustomCard={TravelCard}
      data={carouselData}
      CarouselButtons={CarouselButtons}
      // CarouselDots={CarouselDots}
    />
  );
}
