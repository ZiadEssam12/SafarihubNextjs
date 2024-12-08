import Carousel from "@/components/Carousel/Carousel";
import React from "react";
import TravelCard from "./TravelCard";
import { travelPackages } from "./travelPackages";

export default function TravelCarousel() {
  return (
    <div className="py-12">
      <div className="mb-12">
        <h2 className="font-bold text-3xl text-[#071C55] capitalize text-center">
          hot travel deals
        </h2>
      </div>
      <Carousel CustomCard={TravelCard} data={travelPackages} />
    </div>
  );
}
