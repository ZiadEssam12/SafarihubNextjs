import Hero from "@/components/UI/Hero/Hero";
import HomeCarousel from "@/components/UI/HomeCarousel/HomeCarousel";
import HowWorks from "@/components/UI/HowWorks/HowWorks";

export default async function Home() {
  let data = [];

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/tours/featured`
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status}`);
    }

    const responseData = await res.json();
    data = responseData.data || [];
  } catch (error) {
    console.error("Error fetching featured tours:", error);
    // You could also use error boundaries or other error handling methods
  }

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
