"use client";

import { UilSearch } from "@/icons/Icons";
import React, { useState, useEffect } from "react";
import { SearchResults } from "./SearchResults";
import { searchTours } from "@/lib/api";

export const SearchModal = ({ show, toggle }) => {
  const [value, setValue] = useState("");
  const [scrollbarWidth, setScrollbarWidth] = useState(0);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // Function to calculate scrollbar width
  const calculateScrollbarWidth = () => {
    const outer = document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.overflow = "scroll";
    document.body.appendChild(outer);
    const inner = document.createElement("div");
    outer.appendChild(inner);
    const scrollbarWidthValue = outer.offsetWidth - inner.offsetWidth;
    outer.parentNode.removeChild(outer);
    return scrollbarWidthValue;
  };

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      const data = await searchTours(value);
      setSearchResults(data);
      setLoading(false);
    };

    fetchResults();
  }, [value]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (show) {
      // Calculate scrollbar width only once
      const scrollbarWidthValue = calculateScrollbarWidth();
      setScrollbarWidth(scrollbarWidthValue);

      // Disable scrolling on the body but keep the scrollbar visible
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidthValue}px`;
    } else {
      // Re-enable scrolling and remove the padding
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0";
    }

    // Cleanup function to ensure we re-enable scrolling if component unmounts
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0";

      setValue("");
    };
  }, [show]);

  // Handle input change
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  // Check if toggle returns null when modal is not shown
  if (!show) return null;

  return (
    <>
      <div
        className="w-screen h-screen fixed top-0 z-[9999] flex flex-col gap-3 justify-center items-center text-darkBlue bg-black/10  backdrop-blur-[3px] backdrop-filter"
        onClick={(e) => {
          // Close modal when clicking the backdrop
          if (e.target === e.currentTarget) toggle();
        }}
      >
        <div
          className="bg-white w-2/3 lg:w-1/2 h-fit rounded-xl shadow-md max-h-[80vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
          onKeyDown={(e) => {
            if (show && e.key === "Escape") toggle();
          }}
        >
          {/* Top part where input and search icon */}
          <div className="p-4 border-b-[1px] border-gray-200 flex justify-between items-center gap-3">
            {/* Search icon */}
            <UilSearch width={20} height={20} />

            {/* Input */}
            <input
              type="text"
              className="w-full focus:outline-none placeholder:capitalize"
              placeholder="Type anything to search..."
              value={value}
              autoFocus
              onChange={handleChange}
            />
          </div>

          {/* Bottom part where results are displayed */}
          <div className="w-full overflow-y-auto py-3 flex-1">
            <SearchResults
              toggle={toggle}
              value={value}
              searchResultsList={searchResults}
            />
          </div>
        </div>
        <div className="bg-white p-2 rounded-md shadow-md text-center text-sm flex gap-1">
          <p className="hidden lg:block">
            Press <span className="font-bold">ESC</span> or
          </p>
          click outside to close the search bar.
        </div>
      </div>
    </>
  );
};
