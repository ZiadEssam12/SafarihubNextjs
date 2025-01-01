import { travelPackages } from "@/components/UI/HomeCarousel/travelPackages";
import ToursListings from "@/components/UI/ToursListings/ToursListings";
import React from "react";

export default async function Listings({ params }) {
  const place = (await params).place.replace(/-/g, " ");
  const data = travelPackages;
  return <ToursListings data={data} place={place} />;
}
