import React from "react";
import { TravelCarousel } from "@/components/UI/Home/HomeWrapper";
import Hero from "@/components/UI/Hero/Hero";
import HowWorks from "@/components/UI/HowWorks/HowWorks";
import HomeCarousel from "@/components/UI/HomeCarousel/HomeCarousel";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <TravelCarousel /> */}
      <div className="py-12">
        <div className="mb-12">
          <h2 className="font-bold text-3xl text-darkBlue capitalize text-center dark:text-white">
            hot travel deals
          </h2>
        </div>
        <HomeCarousel />
      </div>
      <HowWorks />
    </>
  );
}
