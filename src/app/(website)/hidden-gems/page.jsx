import ToursListings from "@/components/UI/ToursListings/ToursListings";
import { fetchTours } from "@/lib/api";
import React from "react";

export default async function Page({ searchParams }) {
  const page = Number((await searchParams).page) || 1;

  const { data, pagination } = await fetchTours({ page });

  // Safety check to ensure data is always an array
  const toursData = Array.isArray(data) ? data : [];

  return (
    <ToursListings
      data={toursData}
      pagination={pagination}
      place="Hidden Gems"
      baseUrl="/hidden-gems"
    />
  );
}
