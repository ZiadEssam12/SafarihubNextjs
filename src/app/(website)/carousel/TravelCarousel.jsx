import Carousel from "@/components/Carousel/Carousel";
import React from "react";
import TravelCard from "./TravelCard";
import { travelPackages } from "./travelPackages";

export default function TravelCarousel() {
  return (
    <div className="container px-12 py-12">
      <Carousel CustomCard={TravelCard} data={travelPackages} />
    </div>
  );
}
