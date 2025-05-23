"use client";

import { LineMdLoadingLoop } from "@/icons/Icons";
import { AddToCart } from "@/lib/api";
import { useState } from "react";

export default function BookTravel({ tourId }) {
  const [loading, setLoading] = useState(false);

  const handleAddToCart = async (e) => {
    setLoading(true);

    try {
      e.preventDefault();

      const result = await AddToCart({ tourId });
      if (result.success) {
        // Optionally, you can show a success message or update the UI
        console.log("Added to cart successfully:", result);
      } else {
        // Handle the error case
        console.error("Failed to add to cart:", result.message);
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      return;
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      className="bg-darkBlue cursor-pointer text-white px-3 py-2 rounded-md hover:bg-darkBlue/90 transition-colors flex items-center gap-x-1 disabled:opacity-70"
      aria-label="book this tour"
      role="button"
      onClick={handleAddToCart}
    >
      {loading ? (
        <LineMdLoadingLoop width={24} height={24} />
      ) : (
        <>
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
        </>
      )}
    </button>
  );
}
