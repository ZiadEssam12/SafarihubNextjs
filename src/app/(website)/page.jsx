import Hero from "@/components/UI/Hero/Hero";
import HomeCarousel from "@/components/UI/HomeCarousel/HomeCarousel";
import HowWorks from "@/components/UI/HowWorks/HowWorks";
import { fetchFeaturedTours } from "@/lib/api";
import { ThemeConfig } from "flowbite-react";

export default async function Home() {
  const data = await fetchFeaturedTours();

  return (
    <>
      <ThemeConfig />
      <Hero />
      <div className="py-12">
        <div className="mb-12">
          <h2 className="font-bold text-3xl text-darkBlue capitalize text-center dark:text-white">
            hot travel deals
          </h2>
        </div>
        <HomeCarousel carouselData={data} />
      </div>
      <HowWorks />
    </>
  );
}
