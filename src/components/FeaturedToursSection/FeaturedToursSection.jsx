"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { fetchFeaturedTours } from "@/lib/api";
import CarouselButtons from "../UI/Carousel/CarouselButtons";

// Dynamically import TravelCard with loading state
const TravelCard = dynamic(
  () => import("@/components/UI/HomeCarousel/TravelCard"),
  {
    loading: () => (
      <div className="animate-pulse bg-gray-200 h-64 w-full rounded-md"></div>
    ),
    ssr: false,
  }
);

// Dynamically import Carousel
const Carousel = dynamic(() => import("@/components/UI/Carousel/Carousel"), {
  loading: () => (
    <div className="animate-pulse bg-gray-100 h-80 w-full rounded-md p-4">
      <div className="flex gap-4 overflow-hidden">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="bg-gray-200 h-64 w-80 flex-shrink-0 rounded-md"
          ></div>
        ))}
      </div>
    </div>
  ),
  ssr: true,
});

export default function FeaturedToursSection() {
  const [featuredTours, setFeaturedTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFeaturedTours() {
      try {
        const data = await fetchFeaturedTours();
        setFeaturedTours(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error loading featured tours:", error);
      } finally {
        setLoading(false);
      }
    }

    loadFeaturedTours();
  }, []);

  if (loading) {
    return (
      <div className="py-12">
        <div className="mb-12">
          <h2 className="font-bold text-3xl text-darkBlue capitalize text-center dark:text-white">
            Featured Tours
          </h2>
        </div>
        <div className="animate-pulse bg-gray-100 h-80 w-full rounded-md"></div>
      </div>
    );
  }

  return (
    <div className="py-12">
      <div className="mb-12">
        <h2 className="font-bold text-3xl text-darkBlue capitalize text-center dark:text-white">
          Featured Tours
        </h2>
      </div>
      {featuredTours.length > 0 ? (
        <Carousel
          CustomCard={TravelCard}
          data={featuredTours}
          CarouselButtons={CarouselButtons}
        />
      ) : (
        <p className="text-center text-gray-500">No featured tours available</p>
      )}
    </div>
  );
}
