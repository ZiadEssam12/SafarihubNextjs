"use client";

import { MdiChevronRight, MdiChevronLeft } from "@/icons/Icons";

export default function CarouselButtons({ onPrevClick, onNextClick }) {
  return (
    <>
      <button
        onClick={onPrevClick}
        className="absolute cursor-pointer right-14 -top-4 -translate-y-1/2 border-2 border-orange p-2 rounded-full shadow-lg hover:bg-white transition-colors"
        aria-label="Previous slide"
      >
        <MdiChevronLeft className="w-6 h-6 fill-orange" />
      </button>

      <button
        onClick={onNextClick}
        className="absolute cursor-pointer right-2 -top-4 -translate-y-1/2 border-2 border-orange p-2 rounded-full shadow-lg hover:bg-white transition-colors"
        aria-label="Next slide"
      >
        <MdiChevronRight className="w-6 h-6 fill-orange" />
      </button>
    </>
  );
}
