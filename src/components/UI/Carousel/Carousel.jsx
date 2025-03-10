"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const scrollTime = 4000;

export default function Carousel({
  data,
  CustomCard,
  CarouselDots,
  CarouselButtons,
}) {
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
    <div className="relative">
      <div className="overflow-hidden py-4" ref={emblaRef}>
        <div className="flex gap-4 px-4">
          {data.map((item, index) => (
            <div
              key={`${index}-${item.title}`}
              className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(50%-8px)] lg:flex-[0_0_calc(25%-8px)]"
            >
              <CustomCard {...item} />
            </div>
          ))}
        </div>
      </div>

      {CarouselButtons && (
        <CarouselButtons onPrevClick={scrollPrev} onNextClick={scrollNext} />
      )}

      {CarouselDots && (
        <CarouselDots
          selectedIndex={selectedIndex}
          scrollSnaps={scrollSnaps}
          onDotClick={scrollTo}
        />
      )}
    </div>
  );
}
