import TourPage from "@/components/UI/TourPage/TourPage";
import { fetchFeaturedTours } from "@/lib/api";
import React from "react";

export default async function Page({ params }) {
  // The parameter name should match the folder name [tourid]
  const slug = (await params).slug;

  // Use an absolute URL for production or a relative URL
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tours/${slug}`);
  const { data } = await res.json();

  const feturedData = fetchFeaturedTours();

  return (
    <>
      <TourPage data={data} feturedData={feturedData} />
    </>
  );
}
