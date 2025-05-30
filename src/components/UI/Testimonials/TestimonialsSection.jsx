"use client";

import React from "react";
import dynamic from "next/dynamic";
import { reviews } from "../TourPage/ReviewsData";
import ReviewCard from "../TourPage/ReviewCard";
import CarouselButtons from "../Carousel/CarouselButtons";

// Dynamically import Carousel
const Carousel = dynamic(() => import("@/components/UI/Carousel/Carousel"), {
  loading: () => (
    <div className="animate-pulse bg-gray-100 h-80 w-full rounded-md p-4">
      <div className="flex gap-4 overflow-hidden">
        {[1, 2, 3].map((i) => (
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

export default function TestimonialsSection() {
  return (
    <section className="py-16 break-out bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-darkBlue dark:text-white mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Real experiences from real travelers who have explored Egypt with
            Safari Hub
          </p>
        </div>

        {reviews && reviews.length > 0 ? (
          <Carousel
            CustomCard={ReviewCard}
            data={reviews}
            CarouselButtons={CarouselButtons}
          />
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              No testimonials available at the moment.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
