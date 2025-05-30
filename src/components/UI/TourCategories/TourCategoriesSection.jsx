"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function TourCategoriesSection() {
  const categories = [
    {
      title: "One Day Tours",
      description: "Perfect for quick explorations of Egypt's highlights",
      image: "/caption.jpg",
      link: "/one-day-tours",
      tours: "25+ Tours",
    },
    {
      title: "Multi-Day Tours",
      description: "Comprehensive journeys through Egypt's wonders",
      image: "/cairo-tour.jpg",
      link: "/multi-days-tours",
      tours: "15+ Tours",
    },
    {
      title: "Nile Cruises",
      description: "Luxurious river journeys between ancient sites",
      image: "/nile/superior.webp",
      link: "/nile-cruise",
      tours: "8+ Cruises",
    },
    {
      title: "Desert Safari",
      description: "Adventure through Egypt's stunning desert landscapes",
      image: "/costas.jpg",
      link: "/shore-excursions",
      tours: "12+ Adventures",
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-darkBlue dark:text-white mb-4">
            Explore by Category
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose from our diverse range of tour categories, each carefully
            designed to showcase different aspects of Egypt's rich heritage and
            natural beauty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={category.link}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="mb-2">
                    <span className="inline-block bg-orange px-2 py-1 rounded text-xs font-medium">
                      {category.tours}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-orange transition-colors duration-200">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-200 line-clamp-2">
                    {category.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/tours"
            className="inline-flex items-center bg-darkBlue text-white font-semibold px-8 py-3 rounded-lg hover:bg-darkBlue/90 transition-all duration-200"
          >
            View All Tours
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
