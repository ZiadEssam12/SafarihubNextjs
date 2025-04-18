"use client";

import React from "react";
import dynamic from "next/dynamic";
import { MdiHeartOutline } from "@/icons/Icons";
import Image from "next/image";
import Link from "next/link";

// Create a fallback loading component
const LoadingCard = () => (
  <div className="relative flex flex-col ms-1 bg-white border-2 border-transparent dark:border-gray-500 rounded-lg shadow-md overflow-hidden h-full animate-pulse">
    <div className="h-48 bg-gray-200"></div>
    <div className="p-4 flex flex-col flex-grow">
      <div className="h-6 bg-gray-200 rounded mb-2"></div>
      <div className="h-24 bg-gray-200 rounded mb-4"></div>
      <div className="mt-4 flex items-center justify-between">
        <div className="h-6 w-16 bg-gray-200 rounded"></div>
        <div className="h-8 w-24 bg-gray-200 rounded"></div>
      </div>
    </div>
  </div>
);

// Regular component implementation
function TravelCardComponent({
  id,
  title,
  overview_text,
  start_from,
  gallery,
  slug,
}) {
  return (
    <Link
      href={`/tours/${slug}`}
      className="relative flex flex-col ms-1 bg-white border-2 border-transparent dark:border-gray-500 rounded-lg shadow-md overflow-hidden h-full user-select-none"
    >
      <div className="relative h-48 overflow-hidden">
        <div className="w-full h-full relative">
          <Image
            src={gallery[0]}
            alt={title}
            className="w-full h-full object-cover"
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
        <button
          className="absolute top-2 right-2 rounded-full transition-colors"
          role="button"
          aria-label={`add ${title} to wishlist`}
        >
          <MdiHeartOutline className="size-8" />
        </button>
        <div className="absolute top-2 left-2 bg-orange text-white px-3 py-1 rounded-md text-sm font-medium">
          Offer
        </div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3
          className="text-lg font-semibold color-dark dark:text-gray-100 mb-2 line-clamp-1"
          title={title}
        >
          {title}
        </h3>
        <p
          className="text-gray-600 dark:text-gray-200 text-sm flex-grow line-clamp-4"
          title={overview_text}
        >
          {overview_text}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <div className="text-lg font-bold text-orange">${start_from}</div>
          <button
            className="bg-blue-600 text-white px-2 py-2 rounded-md hover:bg-blue-700 transition-colors capitalize"
            aria-label="add to cart"
            role="button"
          >
            add to cart
          </button>
        </div>
      </div>
    </Link>
  );
}

// Dynamic import with next/dynamic
const DynamicTravelCard = dynamic(() => Promise.resolve(TravelCardComponent), {
  loading: () => <LoadingCard />,
  ssr: false, // Set to false if you don't want server-side rendering
});

export default function TravelCard(props) {
  return <DynamicTravelCard {...props} />;
}
