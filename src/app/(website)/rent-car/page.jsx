import SectionHeader from "@/components/SectionHeader/SectionHeader";
import RentCar from "@/components/UI/RentCar/RentCar";
import React from "react";

export const medtadata = {
  title: "Car rental",
  description: "Car rental",
};

export default function page() {
  return (
    <>
      <SectionHeader title={"Rent car Request"} />

      <main className="container py-12 min-h-screen flex flex-col justify-between items-center gap-4 text-darkBlue">
        {/* client side code  */}
        <RentCar />
      </main>
    </>
  );
}
