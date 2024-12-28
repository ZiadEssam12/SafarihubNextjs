import { MdiChevronUp } from "@/icons/Icons";
import Image from "next/image";

export function CarouselSlides({ data, scrollNext, scrollPrev }) {
  return (
    <>
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
        aria-label="Scroll to previous slide"
        role="button"
        className="absolute top-1/2 -left-4 md:left-2 transform -translate-y-1/2 bg-white/80 hover:bg-white transition-all rounded-full p-2.5 shadow-md z-10"
      >
        <MdiChevronUp className="-rotate-90 size-6" />
      </button>

      <button
        onClick={scrollNext}
        aria-label="Scroll to next slide"
        role="button"
        className="absolute top-1/2 -right-4 md:right-2 transform -translate-y-1/2 bg-white/80 hover:bg-white transition-all rounded-full p-2.5 shadow-md z-10"
      >
        <MdiChevronUp className="rotate-90 size-6" />
      </button>
    </>
  );
}
