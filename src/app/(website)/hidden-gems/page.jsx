import ToursListings from "@/components/UI/ToursListings/ToursListings";
import { fetchTours } from "@/lib/api";
import React from "react";

export default async function page() {
  const { data, pagination } = await fetchTours();

  return <ToursListings data={data} place="Hidden Gems" />;
}
