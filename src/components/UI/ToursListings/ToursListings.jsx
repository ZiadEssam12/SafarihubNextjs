import SectionHeader from "@/components/SectionHeader/SectionHeader";
import React from "react";
import Pagination from "@/components/Pagination/Pagination";
import TravelCard from "@/components/TravelCard/TravelCard";

export default function ToursListings({
  data,
  place,
  pagination = {},
  baseUrl = "",
}) {
  return (
    <>
      <SectionHeader title={place} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-10">
        {data.map((item, index) => (
          <div key={`${index}-${item.title}`}>
            <TravelCard {...item} />
          </div>
        ))}
      </div>

      <Pagination pagination={pagination} baseUrl={baseUrl} />
    </>
  );
}
