import TourPage from "@/components/UI/TourPage/TourPage";
import React from "react";

export default async function page({ params }) {
  const id = (await params).tourid;
  return (
    <>
      <TourPage />
    </>
  );
}
