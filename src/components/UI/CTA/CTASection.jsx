"use client";

import React from "react";
import Link from "next/link";
import { SolarPhoneCallingOutline } from "@/icons/Icons";

export default function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-r from-orange to-orange/80 break-out">
      <div className="container mx-auto px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Start Your Egyptian Adventure?
          </h2>
          <p className="text-lg lg:text-xl mb-8 opacity-90">
            Join thousands of satisfied travelers who have discovered the magic
            of Egypt with our expert guides. Book your dream tour today!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/tours"
              className="bg-white text-orange font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-200 inline-flex items-center"
            >
              Explore All Tours
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

            <Link
              href="/make-trip"
              className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-orange transition-all duration-200 inline-flex items-center"
            >
              Plan Custom Trip
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
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </Link>
          </div>

          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-lg mb-4">
              Need help planning your trip? Talk to our experts!
            </p>
            <Link
              href="tel:01001264478"
              className="inline-flex items-center gap-2 text-white hover:text-gray-200 transition-colors duration-200"
            >
              <SolarPhoneCallingOutline className="h-5 w-5" />
              <span className="font-semibold">Call us: 01001264478</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
