"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { deleteFromFavorites } from "@/lib/api";
import {
  TrashIcon,
  LucideClock,
  SolarCalendarLinear,
  GuidanceUser1,
  UilMapMarker,
  MdiHeartOutline,
} from "@/icons/Icons";
import { toast } from "react-hot-toast";

export default function WishlistClient({ initialFavorites }) {
  const [favorites, setFavorites] = useState(initialFavorites || []);
  const [isLoading, setIsLoading] = useState(false);

  const handleRemoveFromWishlist = async (tourId) => {
    setIsLoading(true);
    try {
      setFavorites(favorites.filter((fav) => fav.tour.id !== tourId)); // Assuming favorites is an array of { tour: { id: ... } }
      toast.success("Tour removed from wishlist");
      await deleteFromFavorites(tourId);
    } catch (error) {
      toast.error("Failed to remove tour from wishlist");
      console.error("Error removing from wishlist:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!favorites || favorites.length === 0) {
    return (
      <div className="h-[calc(100dvh-160px)] flex flex-col items-center justify-center p-10 dark:bg-gray-800">
        <MdiHeartOutline className="w-16 h-16 text-gray-300 mb-4" />
        <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
          Your wishlist is empty
        </h3>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          Explore our tours and add your favorites to the wishlist!
        </p>
        <Link
          href="/hidden-gems"
          className="px-6 py-2 bg-[#f57c00] text-white rounded-md hover:bg-orange-600 transition-colors"
        >
          Explore Tours
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {favorites.map(({ tour }) => (
        <div
          key={tour.id}
          className="relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
        >
          {/* Remove from wishlist button */}
          <button
            disabled={isLoading}
            onClick={() => handleRemoveFromWishlist(tour.id)}
            className="absolute cursor-pointer top-3 right-3 z-10 p-2 bg-darkBlue/80 dark:bg-gray-800/80 rounded-full shadow-sm hover:bg-darkBlue dark:hover:bg-gray-700 transition-colors"
            aria-label="Remove from wishlist"
          >
            <TrashIcon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </button>

          {/* Tour Image */}
          <div className="relative w-full h-48">
            <Image
              src={tour.coverImage || tour.gallery?.[0] || "/tripImage.webp"}
              alt={tour.title}
              className="object-cover"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII="
            />
          </div>

          {/* Tour Info */}
          <div className="p-4 flex-grow flex flex-col">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2 line-clamp-2">
              {tour.title}
            </h3>

            <div className="mb-3 flex items-center text-sm text-gray-600 dark:text-gray-300">
              <UilMapMarker className="w-4 h-4 mr-1 flex-shrink-0" />
              <span>
                {tour.destinations?.[0].destination.title}
                {tour.destinations.length > 1 && (
                  <span className="ml-1 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-darkBlue bg-gray-200 rounded-full">
                    +{tour.destinations.length - 1}
                  </span>
                )}
              </span>
            </div>

            <div className="flex flex-wrap gap-3 mb-3">
              {tour.duration && (
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <LucideClock className="w-4 h-4 mr-1 flex-shrink-0" />
                  <span>
                    {tour.duration} {tour.duration === 1 ? "day" : "days"}
                  </span>
                </div>
              )}

              {tour.groupSize && (
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <GuidanceUser1 className="w-4 h-4 mr-1 flex-shrink-0" />
                  <span>Up to {tour.groupSize} people</span>
                </div>
              )}

              {tour.startDates && tour.startDates.length > 0 && (
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <SolarCalendarLinear className="w-4 h-4 mr-1 flex-shrink-0" />
                  <span>Available</span>
                </div>
              )}
            </div>

            <div className="mt-auto">
              <div className="flex justify-between items-end">
                <div>
                  {tour.price && (
                    <div className="text-lg font-bold text-[#f57c00]">
                      ${tour.price}
                      <span className="text-sm font-normal text-gray-600 dark:text-gray-400">
                        {" "}
                        / person
                      </span>
                    </div>
                  )}
                </div>
                <Link
                  href={`/tours/${tour.slug}`}
                  className="px-4 py-2 bg-[#f57c00] text-white text-sm rounded-md hover:bg-orange-600 transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
