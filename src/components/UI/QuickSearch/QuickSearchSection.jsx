"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function QuickSearchSection() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const tourCategories = [
    { value: "one-day-tours", label: "One Day Tours" },
    { value: "multi-days-tours", label: "Multi-Day Tours" },
    { value: "nile-cruise", label: "Nile Cruises" },
    { value: "shore-excursions", label: "Shore Excursions" },
  ];

  const destinations = [
    "Cairo",
    "Luxor",
    "Aswan",
    "Alexandria",
    "Hurghada",
    "Sharm El Sheikh",
  ];

  const handleQuickSearch = () => {
    if (selectedCategory) {
      window.location.href = `/${selectedCategory}`;
    } else {
      window.location.href = "/tours";
    }
  };

  return (
    <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-darkBlue dark:text-white mb-2">
              Find Your Perfect Egyptian Adventure
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Quick search to discover tours that match your interests
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {/* Tour Category Selection */}
              <div>
                <label className="block text-sm font-medium text-darkBlue dark:text-white mb-2">
                  Tour Type
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange focus:border-orange transition-all duration-200 bg-white dark:bg-gray-700 text-darkBlue dark:text-white"
                >
                  <option value="">All Tour Types</option>
                  {tourCategories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Destination Selection */}
              <div>
                <label className="block text-sm font-medium text-darkBlue dark:text-white mb-2">
                  Destination
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange focus:border-orange transition-all duration-200 bg-white dark:bg-gray-700 text-darkBlue dark:text-white">
                  <option value="">All Destinations</option>
                  {destinations.map((destination) => (
                    <option key={destination} value={destination.toLowerCase()}>
                      {destination}
                    </option>
                  ))}
                </select>
              </div>

              {/* Duration Selection */}
              <div>
                <label className="block text-sm font-medium text-darkBlue dark:text-white mb-2">
                  Duration
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange focus:border-orange transition-all duration-200 bg-white dark:bg-gray-700 text-darkBlue dark:text-white">
                  <option value="">Any Duration</option>
                  <option value="1">1 Day</option>
                  <option value="2-3">2-3 Days</option>
                  <option value="4-7">4-7 Days</option>
                  <option value="8+">8+ Days</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleQuickSearch}
                className="bg-orange text-white font-semibold px-8 py-3 rounded-lg hover:bg-orange/90 transition-all duration-200 inline-flex items-center justify-center"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                Search Tours
              </button>

              <Link
                href="/make-trip"
                className="bg-darkBlue text-white font-semibold px-8 py-3 rounded-lg hover:bg-darkBlue/90 transition-all duration-200 inline-flex items-center justify-center"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                Custom Trip
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Popular searches:
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "Pyramids Tour",
                "Nile Cruise",
                "Luxor Temple",
                "Desert Safari",
                "Red Sea",
              ].map((search) => (
                <Link
                  key={search}
                  href="/tours"
                  className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-orange hover:text-white transition-all duration-200"
                >
                  {search}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
