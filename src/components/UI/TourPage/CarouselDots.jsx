import Image from "next/image";
import { useEffect, useState } from "react";

export function CarouselDots({ selectedIndex, photos, onDotClick }) {
  const [blurredImages, setBlurredImages] = useState([]);

  useEffect(() => {
    async function getBlurredImages() {
      const blurred = await Promise.all(
        photos.map(async (imageUrl) => {
          // Insert transformation after "/upload/"
          const uploadIndex = imageUrl.indexOf("/upload/");
          if (uploadIndex === -1) return "";
          // Insert transformation string after "/upload/"
          const blurUrl =
            imageUrl.slice(0, uploadIndex + 8) + // "/upload/" is 8 chars
            "w_100/e_blur:1000,q_auto,f_webp/" +
            imageUrl.slice(uploadIndex + 8);
          const response = await fetch(blurUrl);
          const buffer = await response.arrayBuffer();
          const data = btoa(
            new Uint8Array(buffer).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              ""
            )
          );
          console.log(data);
          return `data:image/webp;base64,${data}`;
        })
      );
      setBlurredImages(blurred);
    }
    getBlurredImages();
  }, [photos]);

  return (
    <div
      className="
      flex flex-row lg:flex-col 
      lg:gap-2
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
          <div className="relative w-24 h-24 lg:w-28 lg:h-24 overflow-hidden">
            {blurredImages[index] ? (
              <Image
                src={item}
                alt={`preview-${index}`}
                width={128}
                height={96}
                placeholder="blur"
                blurDataURL={blurredImages[index]}
                className="object-cover w-24 h-24 lg:w-32 lg:h-24 rounded-xl"
                unoptimized
              />
            ) : (
              <Image
                src={item}
                alt={`preview-${index}`}
                width={128}
                height={96}
                className="object-cover w-24 h-24 lg:w-32 lg:h-24 rounded-xl hidden"
                unoptimized
              />
            )}
          </div>
        </button>
      ))}
    </div>
  );
}
