"use client";

import { MdiHeartOutline } from "@/icons/Icons";
import { addToFavorites } from "@/lib/api";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function TravelCardFavButton({ title }) {
  const [isLoading, setIsLoading] = useState(false);

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
    <>
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
    </>
  );
}
