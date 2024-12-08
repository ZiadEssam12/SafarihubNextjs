import React from "react";
import Hero from "../hero/Hero";
import TravelCarousel from "../carousel/TravelCarousel";
import HowWorks from "./HowWorks";

export default function Home() {
  return (
    <>
      <Hero />
      <TravelCarousel />

      <HowWorks />
    </>
  );
}
