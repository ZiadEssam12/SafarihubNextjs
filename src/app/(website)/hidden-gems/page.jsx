import ToursListings from "@/components/UI/ToursListings/ToursListings";
import { fetchTours } from "@/lib/api";
import React from "react";

export default async function Page() {
  const { data } = await fetchTours();

  // Safety check to ensure data is always an array
  const toursData = Array.isArray(data) ? data : [];

  return <ToursListings data={toursData} place="Hidden Gems" />;
}
