import ToursListings from "@/components/UI/ToursListings/ToursListings";
import { FetchOneDayTrip } from "@/lib/api";
import React from "react";

export default async function Listings({ params, searchParams }) {
  const page = Number((await searchParams).page) || 1;
  const origplace = (await params).place;
  const place = origplace.replace(/-/g, " ");
  const { data, pagination } = await FetchOneDayTrip({ place, page });

  return (
    <ToursListings
      data={data}
      place={place}
      pagination={pagination}
      baseUrl={`/one-day-tours/${origplace}`}
    />
  );
}
