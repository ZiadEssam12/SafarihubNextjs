"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { MdiHeartOutline } from "@/icons/Icons";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { addToFavorites } from "@/lib/api";
import toast from "react-hot-toast";

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
  galleryThumbnails,
  slug,
  offer,
  duration,
  destinations,
  rating = 4.8,
  reviews = 28,
}) {
  const [isLoading, setIsLoading] = useState(false);

  // console.log("destingations :", destinations[0].destination.title);

  const handleAddToFavorites = async (e, tourId) => {
    e.preventDefault(); // Prevent default link behavior
    setIsLoading(true);

    try {
      let result = await addToFavorites(tourId);

      if (result.error) {
        toast.error(result.error);
      } else {
        toast.success("Item has been added to your wishlist.");
      }
    } catch (error) {
      toast.error("Could not add to wishlist. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const { data: session } = useSession();
  const isAuthenticated = !!session?.user?.id; // Check if the user is authenticated

  return (
    <Link
      href={`/tours/${slug}`}
      className="relative flex flex-col ms-1 bg-white border-2 border-gray-100 dark:border-gray-500 rounded-lg shadow-md overflow-hidden h-full user-select-none transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      <div className="relative h-48 overflow-hidden">
        <div className="w-full h-full relative p-2 rounded-4xl overflow-hidden group">
          <Image
            src={galleryThumbnails ? galleryThumbnails[0] : gallery[0]}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            width={0}
            height={0}
            sizes="100vw"
          />
          {/* Show the favorite button if the user has signed in */}
          {isAuthenticated && (
            <button
              className="absolute cursor-pointer top-2 right-2 rounded-full transition-all bg-white/80 hover:bg-white p-1.5 shadow-md"
              role="button"
              aria-label={`add ${title} to wishlist`}
              title="Add to wishlist"
              onClick={(e) => handleAddToFavorites(e, id)}
              disabled={isLoading}
            >
              {isLoading ? (
                <svg
                  className="animate-spin size-6 text-darkBlue"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                <MdiHeartOutline className="size-6 text-darkBlue hover:text-red-500 transition-colors" />
              )}
            </button>
          )}
          {/* Show offer badge if available */}
          {offer && (
            <div className="absolute top-0 left-0 bg-orange text-white px-3 py-1 rounded-br-md font-medium z-10 shadow-sm">
              Offer
            </div>
          )}

          {/* Duration badge */}
          <div className="absolute bottom-2 left-2 bg-white/90 text-darkBlue px-2 py-1 rounded-md text-xs font-medium z-10 shadow-sm flex items-center">
            <svg
              className="w-3 h-3 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            {duration}
          </div>
        </div>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        {/* Location info */}
        <div className="flex items-center text-xs text-gray-500 mb-2">
          <svg
            className="w-3 h-3 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            ></path>
          </svg>
          {destinations[0].destination.title}

          {destinations.length > 1 && (
            <span className="font-bold text-darkBlue mx-1 ">
              +{destinations.length - 1}
            </span>
          )}
        </div>

        {/* Title */}
        <h3
          className="text-lg font-semibold color-dark dark:text-gray-100 mb-1 line-clamp-1"
          title={title}
        >
          {title}
        </h3>

        {/* Rating */}
        <div className="hidden flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(rating) ? "text-yellow-300" : "text-gray-300"
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          ))}
          <span className="ml-1 text-xs text-gray-500">({reviews})</span>
        </div>

        {/* Description */}
        <p
          className="text-gray-600 dark:text-gray-200 text-sm flex-grow line-clamp-2"
          title={overview_text}
        >
          {overview_text}
        </p>

        {/* Price and CTA */}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500">From</span>
            <div className="text-2xl font-extrabold text-orange">
              ${start_from}
            </div>
          </div>

          <button
            className="bg-darkBlue cursor-pointer text-white px-3 py-2 rounded-md hover:bg-darkBlue/90 transition-colors flex items-center gap-x-1 disabled:opacity-70"
            aria-label="book this tour"
            role="button"
            onClick={(e) => e.preventDefault()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <span>Book</span>
          </button>
        </div>
      </div>
    </Link>
  );
}

// Dynamic import with next/dynamic
const DynamicTravelCard = dynamic(() => Promise.resolve(TravelCardComponent), {
  loading: () => <LoadingCard />,
  ssr: true, // Set to false if you don't want server-side rendering
});

export default function TravelCard(props) {
  return <DynamicTravelCard {...props} />;
}
