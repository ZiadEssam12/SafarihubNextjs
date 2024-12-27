"use client";

import { MdiChevronUp } from "@/icons/Icons";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

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
    <>
      <CarouselDots
        selectedIndex={selectedIndex}
        photos={data}
        onDotClick={scrollTo}
      />
      <div
        className="overflow-x-hidden rounded-xl w-full relative bg-red-900"
        ref={emblaRef}
      >
        <div className="flex">
          {data.map((item, index) => (
            <div key={`${index}-${item.title}`} className="flex-[0_0_100%]">
              <Image
                src={item}
                alt="tour image"
                className="w-full h-[500px] object-cover"
                width={0}
                height={0}
                unoptimized
              />
            </div>
          ))}
        </div>
        <button
          onClick={scrollPrev}
          className="absolute top-1/2 -left-4 md:left-2 transform -translate-y-1/2 bg-white/80 hover:bg-white transition-all rounded-full p-2.5 shadow-md z-10"
        >
          <MdiChevronUp className="-rotate-90 size-6" />
        </button>

        <button
          onClick={scrollNext}
          className="absolute top-1/2 -right-4 md:right-2 transform -translate-y-1/2 bg-white/80 hover:bg-white transition-all rounded-full p-2.5 shadow-md z-10"
        >
          <MdiChevronUp className="rotate-90 size-6" />
        </button>
      </div>
    </>
  );
}

export function CarouselDots({ selectedIndex, photos, onDotClick }) {
  return (
    <>
      <div className="flex flex-col gap-3 h-[500px] overflow-y-auto">
        {photos.map((item, index) => (
          <button
            key={index}
            onClick={() => onDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`relative transition-all duration-300 ${
              index !== selectedIndex && "opacity-60"
            }`}
          >
            <Image
              src={item}
              alt={`preview-${index}`}
              width={0}
              height={0}
              className="object-cover w-32 h-24 rounded-xl"
              unoptimized
            />
          </button>
        ))}
      </div>
    </>
  );
}
