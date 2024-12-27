import React from "react";
import TravelCarousel from "../../../components/UI/Carousel/TravelCarousel";
import Hero from "@/components/UI/Hero/Hero";
import HowWorks from "@/components/UI/HowWorks/HowWorks";

export default function Home() {
  return (
    <>
      <Hero />
      
      <TravelCarousel />

      <HowWorks />
    </>
  );
}
