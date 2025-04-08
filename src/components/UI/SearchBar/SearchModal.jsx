import { CiArrowRightSm, UilSearch } from "@/icons/Icons";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const searchResults = [
  {
    id: 1,
    title: "Serengeti Safari Adventure",
    slug: "serengeti-safari-adventure",
    location: "Tanzania, Africa",
    category: "safari",
  },
  {
    id: 2,
    title: "Maasai Mara Wildlife Tour",
    slug: "maasai-mara-wildlife-tour",
    location: "Kenya, Africa",
    category: "safari",
  },
  {
    id: 3,
    title: "Kruger National Park Expedition",
    slug: "kruger-national-park-expedition",
    location: "South Africa",
    category: "safari",
  },
  {
    id: 4,
    title: "Okavango Delta Adventure",
    slug: "okavango-delta-adventure",
    location: "Botswana, Africa",
    category: "safari",
  },
  {
    id: 5,
    title: "Etosha National Park Tour",
    slug: "etosha-national-park-tour",
    location: "Namibia, Africa",
    category: "safari",
  },
];

export const SearchModal = ({ show, toggle }) => {
  const [value, setValue] = useState("");
  const [scrollbarWidth, setScrollbarWidth] = useState(0);

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
        className="w-screen h-screen fixed top-0 z-[9999] flex flex-col gap-3 justify-center items-center text-darkBlue backdrop-blur-[3px] bg-black/30 backdrop-filter"
        onClick={(e) => {
          // Close modal when clicking the backdrop
          if (e.target === e.currentTarget) toggle();
        }}
      >
        <div
          className="bg-white w-1/2 h-fit rounded-xl shadow-md max-h-[80vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
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
            <p className="font-bold text-sm px-4">Recent Added trips</p>
            <div className="py-4">
              {searchResults
                .filter((item) =>
                  item.title.toLowerCase().includes(value.toLowerCase())
                )
                .map((item) => (
                  <Link
                    key={item.id}
                    className="group p-4 border-b-[1px] border-gray-200 flex justify-between items-center hover:bg-gray-100 transition-all duration-200"
                    href={`/trip/${item.slug}`}
                    onClick={toggle}
                  >
                    <h3 className="font-semibold flex-1">{item.title}</h3>
                    <p className="text-sm text-gray-500 flex-1">
                      {item.location}
                    </p>
                    <p className="text-sm text-gray-500 flex items-center gap-x-1 fill:darkBlue stroke-darkBlue">
                      See details{" "}
                      <span className="group-hover:translate-x-1 transition-all duration-200 ">
                        <CiArrowRightSm />
                      </span>
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
        <p className="bg-white p-2 rounded-md shadow-md text-center text-sm">
          Press <span className="font-bold">ESC</span> or click outside to close
          the search bar.
        </p>
      </div>
    </>
  );
};
