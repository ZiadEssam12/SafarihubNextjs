import { MdiChevronUp } from "@/icons/Icons";
import React from "react";

export default function ImageCarouselButton({
  scrollPrev = "",
  scrollNext = "",
}) {
  return (
    <>
      <button
        onClick={scrollPrev}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white opacity-50  hover:opacity-100 transition-all rounded-full p-2 shadow-md z-10"
      >
        <MdiChevronUp className="-rotate-90 size-6" />
      </button>
      {/* end prev button */}

      {/* next button */}
      <button
        onClick={scrollNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white opacity-50  hover:opacity-100 transition-all rounded-full p-2 shadow-md z-10"
      >
        <MdiChevronUp className="rotate-90 size-6" />
      </button>
    </>
  );
}
