"use client";

import dynamic from "next/dynamic";
// import { travelPackages } from "./travelPackages";

const TravelCard = dynamic(() => import("./TravelCard"), {
  ssr: false,
  loading: () => <p className="w-full h-[400px] bg-gray-200 animate-pulse"></p>,
});

const Carousel = dynamic(() => import("@/components/UI/Carousel/Carousel"), {
  ssr: false,
  loading: () => <p className="w-full h-[500px] bg-gray-200 animate-pulse"></p>,
});

const CarouselButtons = dynamic(
  () => import("@/components/UI/Carousel/CarouselButtons"),
  {
    ssr: false,
    loading: () => <p className="w-full h-full bg-gray-100 animate-pulse"></p>,
  }
);

const CarouselDots = dynamic(
  () => import("@/components/UI/Carousel/CarouselDots"),
  {
    ssr: false,
    loading: () => <p className="w-full h-full bg-gray-100 animate-pulse"></p>,
  }
);

export default function HomeCarousel({ carouselData }) {
  console.log("check :", carouselData);
  return (
    <Carousel
      CustomCard={TravelCard}
      data={carouselData}
      CarouselButtons={CarouselButtons}
      CarouselDots={CarouselDots}
    />
  );
}
