import Hero from "@/components/UI/Hero/Hero";
import HomeCarousel from "@/components/UI/HomeCarousel/HomeCarousel";
import HowWorks from "@/components/UI/HowWorks/HowWorks";

export default async function Home() {
  const res = await fetch(`${process.env.BASE_URL}/tours/featured`);
  const { data } = await res.json();

  return (
    <>
      <Hero />
      {/* <TravelCarousel /> */}
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
