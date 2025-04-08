"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import dynamic from "next/dynamic";

const DynamicCarouselDots = dynamic(
  () => import("./CarouselDots").then((mod) => mod.CarouselDots),
  {
    loading: () => (
      <div
        className="w-32 lg:w-auto h-32 lg:h-[500px] bg-gray-100 animate-pulse rounded-xl
      "
      ></div>
    ),
    ssr: false,
  }
);

const DynamicCarouselSlides = dynamic(
  () => import("./CarouselSlides").then((mod) => mod.CarouselSlides),
  {
    loading: () => (
      <div className="w-full h-[500px] bg-gray-100 animate-pulse rounded-xl" />
    ),
    ssr: false,
  }
);

const scrollTime = 4000;

export default function ImageSlider({ data }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    breakpoints: {
      "(min-width: 1024px)": { slidesToScroll: 1 },
      "(min-width: 768px)": { slidesToScroll: 1 },
      "(max-width: 767px)": { slidesToScroll: 1 },
    },
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Add Auto-Scrolling Logic
  useEffect(() => {
    if (!emblaApi) return;

    const autoScroll = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, scrollTime); // Scrolls every 3 seconds

    return () => clearInterval(autoScroll); // Cleanup on unmount
  }, [emblaApi]);

  return (
    <div className="flex flex-col-reverse h-full lg:flex-row lg:gap-4">
      <div className="w-full lg:w-32">
        <DynamicCarouselDots
          selectedIndex={selectedIndex}
          photos={data}
          onDotClick={scrollTo}
        />
      </div>
      <div
        className="overflow-x-hidden rounded-xl w-full relative"
        ref={emblaRef}
      >
        <DynamicCarouselSlides
          data={data}
          scrollNext={scrollNext}
          scrollPrev={scrollPrev}
        />
      </div>
    </div>
  );
}
