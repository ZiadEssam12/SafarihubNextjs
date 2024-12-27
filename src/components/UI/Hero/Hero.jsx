import HeroForm from "@/components/HeroForm/HeroForm";
import Image from "next/image";
export default function Hero() {
  return (
    <>
      <div className="flex justify-center items-center mx-break-out">
        <div className="w-full">
          <figure className="w-full h-1/2">
            <Image
              src="/image_fx_ (8).jpg" // Ensure the correct path is provided here
              alt="pyramids hero background"
              className="w-full object-cover max-h-[600px] h-[60vh] lg:h-auto hero-section"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 400px"
              loading="lazy"
              // layout="responsive" // This makes the image responsive
              width={1200} // Specify the original width
              height={800} // Specify the original height
              unoptimized
            />
          </figure>
        </div>
      </div>

      <div id="triPackUp" className="px-4 md:px-0 -translate-y-3 ">
        <HeroForm />
      </div>
    </>
  );
}
