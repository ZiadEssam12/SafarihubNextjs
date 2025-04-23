import { MdiChevronUp } from "@/icons/Icons";
import Image from "next/image";

export function CarouselSlides({ data, scrollNext, scrollPrev }) {
  return (
    <>
      <div className="flex">
        {data.map((item, index) => (
          <div
            key={`${index}-${item.title}`}
            className="flex-[0_0_100%] relative h-[530px] w-full"
          >
            <Image
              src={item}
              alt="tour image"
              className="object-cover"
              fill
              loading={index === 0 ? "eager" : "lazy"}
              priority={index === 0}
              unoptimized
            />
          </div>
        ))}
      </div>
      <button
        onClick={scrollPrev}
        aria-label="Scroll to previous slide"
        role="button"
        className="absolute cursor-pointer top-1/2  lg:-left-0  transform -translate-y-1/2 bg-white/80 hover:bg-white transition-all rounded-full p-2.5 shadow-md z-10"
      >
        <MdiChevronUp className="-rotate-90 size-6" />
      </button>

      <button
        onClick={scrollNext}
        aria-label="Scroll to next slide"
        role="button"
        className="absolute cursor-pointer top-1/2 right-0 lg:-right-0 transform -translate-y-1/2 bg-white/80 hover:bg-white transition-all rounded-full p-2.5 shadow-md z-10"
      >
        <MdiChevronUp className="rotate-90 size-6" />
      </button>
    </>
  );
}
