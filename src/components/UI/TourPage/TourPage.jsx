import TourPageHead from "./table";
import ReviewCard from "./ReviewCard";
import { reviews } from "./ReviewsData";
import CarouselButtons from "../Carousel/CarouselButtons";
import Carousel from "../Carousel/Carousel";
import TourForm from "./TourForm";
import ImageSlider from "./CarosuelSettings";
import FeaturedToursSection from "@/components/FeaturedToursSection/FeaturedToursSection";

export default function TourPage({ data }) {
  return (
    <div className="mt-8 text-black">
      {/* title */}
      <div>
        <h2 className="tour-title">{data.title}</h2>
      </div>
      {/* end title */}

      <div className="grid grid-cols-1 md:grid-cols-7 gap-4 mt-4 w-full min-h-[500px]">
        <div className="md:col-span-5 h-full">
          <ImageSlider data={data.gallery} />
        </div>

        {/* booking options */}
        <div className="md:col-span-2 rounded-xl shadow-md h-full flex flex-col">
          <div className="tour-title border-b-2 border-gray-100 p-4">
            <h3 className="text-xl">Booking</h3>
          </div>
          <div className="flex-1 overflow-auto">
            <TourForm
              price={data.start_from}
              pricingGroups={data.pricing_groups}
            />
          </div>
        </div>
        {/* end booking options */}
      </div>

      <div className="mt-8">
        {/* head */}
        <TourPageHead />
        {/* end head */}

        <div className="py-14 space-y-10 ">
          {/* overview */}
          <div id="overview" className="scroll-mt-40">
            <h3 className="tour-page-title capitalize">Overview</h3>
            <p className="text-gray-700 my-2">{data.overview_text}</p>
          </div>

          <div id="highlights" className="scroll-mt-40">
            <h3 className="tour-page-title capitalize">highlights</h3>
            <ul className="flex flex-col gap-2 my-2">
              {data.highlights.map((highlight, index) => (
                <li key={index} className="text-gray-700 flex items-start">
                  <span className="mr-2 font-medium">{index + 1}.</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div id="details" className="scroll-mt-40">
            <h3 className="tour-page-title capitalize">details</h3>

            <ul className="text-gray-700 my-2">
              <li className="flex gap-2">
                <span className="text-gray-500 font-medium">Duration:</span>
                <span>{data.duration}</span>
              </li>
              <li className="flex gap-2">
                <span className="text-gray-500 font-medium">Destinations:</span>
                {data.destinations.map((destination, index) => (
                  <span key={index} className="text-gray-700">
                    {destination.title}
                    {index < data.destinations.length - 1 ? ", " : ""}
                  </span>
                ))}
              </li>
            </ul>
          </div>

          <div id="inclusions" className="scroll-mt-40">
            <div>
              <h3 className="tour-page-title capitalize">inclusions</h3>
              <ul className="text-gray-700 my-2">
                {data.included.map((item, index) => (
                  <li key={index} className="flex gap-2">
                    <span className="text-green-500">+</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10">
              <h3 className="tour-page-title capitalize">exclusions</h3>
              <ul className="text-gray-700 my-2">
                {data.excluded.map((item, index) => (
                  <li key={index} className="flex gap-2">
                    <span className="text-red-500">-</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div id="reviews" className="scroll-mt-40">
            <h3 className="tour-page-title capitalize">Reviews</h3>
            {data.reviews_number > 0 ? (
              <Carousel
                CustomCard={ReviewCard}
                data={reviews}
                CarouselButtons={CarouselButtons}
              />
            ) : (
              <>
                <p className="text-gray-700 my-2">
                  No reviews yet. Be the first to review this tour!
                </p>
              </>
            )}
          </div>

          <FeaturedToursSection />
        </div>
      </div>
    </div>
  );
}
