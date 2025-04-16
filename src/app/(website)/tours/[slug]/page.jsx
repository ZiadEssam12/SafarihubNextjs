import TourPage from "@/components/UI/TourPage/TourPage";
import React from "react";

export default async function Page({ params }) {
  // The parameter name should match the folder name [tourid]
  const slug = (await params).slug;

  console.log("slug from page : ", slug);
  // Use an absolute URL for production or a relative URL
  const res = await fetch(`${process.env.BASE_URL}/tours/${slug}`);
  const { data } = await res.json();

  return (
    <>
      <TourPage data={data} />
    </>
  );
}
