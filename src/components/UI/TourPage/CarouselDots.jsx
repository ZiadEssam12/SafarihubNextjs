import Image from "next/image";

export function CarouselDots({ selectedIndex, photos, onDotClick }) {
  // const activeThumbRef = useRef(null);

  // useEffect(() => {
  //   activeThumbRef.current?.scrollIntoView({
  //     behavior: "smooth",
  //     block: "nearest",
  //   });
  // }, [selectedIndex]);

  return (
    <div className="flex flex-col gap-3 h-[500px] overflow-y-auto">
      {photos.map((item, index) => (
        <button
          key={index}
          // ref={index === selectedIndex ? activeThumbRef : null}
          onClick={() => onDotClick(index)}
          aria-label={`Go to slide ${index + 1}`}
          // className={`relative transition-all duration-300 ${
          //   index !== selectedIndex ? "opacity-60" : ""
          // }`}
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
  );
}
