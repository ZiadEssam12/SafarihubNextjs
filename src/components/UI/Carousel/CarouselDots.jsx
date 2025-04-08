"use client";
export default function CarouselDots({
  selectedIndex,
  scrollSnaps,
  onDotClick,
}) {
  return (
    <div className=" hidden md:flex justify-center gap-2 mt-4">
      {scrollSnaps.map((_, index) => (
        <button
          key={index}
          className={`w-2.5 h-2.5 rounded-full transition-colors ${
            index === selectedIndex
              ? "bg-orange"
              : "bg-gray-300 hover:bg-gray-400"
          }`}
          onClick={() => onDotClick(index)}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
}
