"use client";

import React from "react";

export default function StatsSection() {
  const stats = [
    {
      number: "1000+",
      label: "Happy Travelers",
      description: "Satisfied customers exploring Egypt",
    },
    {
      number: "50+",
      label: "Tour Packages",
      description: "Carefully curated experiences",
    },
    {
      number: "15+",
      label: "Years Experience",
      description: "Expert knowledge of Egypt",
    },
    {
      number: "99%",
      label: "Customer Satisfaction",
      description: "Outstanding service rating",
    },
  ];

  return (
    <section className="py-16 px-12 bg-gradient-to-r from-orange/10 to-darkBlue/10 break-out">
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-darkBlue dark:text-white mb-4">
            Our Journey in Numbers
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover why thousands of travelers choose Safari Hub for their
            Egyptian adventures
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="text-4xl lg:text-5xl font-bold text-orange mb-2">
                {stat.number}
              </div>
              <div className="text-xl font-semibold text-darkBlue dark:text-white mb-2">
                {stat.label}
              </div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
