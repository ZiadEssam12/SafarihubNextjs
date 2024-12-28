import Image from "next/image";

export function CarouselDots({ selectedIndex, photos, onDotClick }) {
  return (
    <div
      className="
      flex flex-row lg:flex-col 
      gap-3 
      w-full lg:w-auto 
      h-32 lg:h-[530px] 
      overflow-x-auto lg:overflow-y-auto 
      lg:overflow-x-hidden
      scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-300
      lg:py-0 lg:px-0
    "
    >
      {photos.map((item, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          aria-label={`Go to slide ${index + 1}`}
          className={`
            shrink-0 
            transition-all duration-300
          `}
        >
          <Image
            src={item}
            alt={`preview-${index}`}
            width={0}
            height={0}
            className="object-cover w-24 h-24 lg:w-32 lg:h-24 rounded-xl"
            unoptimized
          />
        </button>
      ))}
    </div>
  );
}
