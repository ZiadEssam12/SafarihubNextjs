import { Button } from "flowbite-react";
import Image from "next/image";
import TourPageHead from "./table";
import Carousel from "../Carousel/Carousel";
import ReviewCard from "./ReviewCard";
import { reviews } from "./ReviewsData";
import ImageCarouselButton from "./ImageCarouselButton";
import CarouselButtons from "../Carousel/CarouselButtons";
import TravelCard from "../HomeCarousel/TravelCard";
import { travelPackages } from "../HomeCarousel/travelPackages";
import CarouselDots from "../Carousel/CarouselDots";

const tour = {
  title: "Quad Bike Safari At Luxor From The West Bank",
  price: 40,
  overview: `Embark on an unforgettable journey through Egypt's most iconic landscapes on our signature Nile River and Sahara Desert adventure. This carefully crafted 3-hour quad bike expedition offers you the perfect blend of adrenaline-pumping excitement and cultural immersion in the heart of ancient Egypt.
Starting from the historic city of Luxor, you'll venture into the mystical Sahara Desert, where endless golden dunes stretch as far as the eye can see. Our experienced guides will ensure your safety while leading you through this majestic terrain, sharing fascinating insights about the desert ecosystem and Bedouin way of life.`,
  highlights: [
    "Embark on an exhilarating journey with us.",
    "Experience the beauty of the Nile River and the Sahara Desert.",
    "Escape the city and head for the open desert.",
  ],

  details: [
    {
      title: "Duration",
      description: "3 hours",
    },
    {
      title: "Language",
      description: "English",
    },
    {
      title: "Pick-up service",
      description: "Pick-up from your hotel in Luxor",
    },
    {
      title: "Easy cancellation",
      description: "Cancel up to 24 hours in advance for a full refund",
    },
  ],

  inclusions: [
    "Pick-up and drop off at your hotel in Luxor",
    "Quad bike ride",
    "Bottled water",
    "All service charges and taxes",
  ],

  exclusions: ["Gratuities", "Personal expenses"],

  photos: {
    main: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&q=80&w=1470",

    previews: [
      "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&q=80&w=1470",
      "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&q=80&w=1470",
      "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&q=80&w=1470",
      "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&q=80&w=1470",
    ],
  },
};

export default function TourPage() {
  const {
    title,
    price,
    photos: { main, previews },
  } = tour;

  return (
    <div className="mt-8 text-black">
      {/* title */}
      <div>
        <h2 className="tour-title">{title}</h2>
      </div>
      {/* end title */}

      <div className="grid grid-cols-1 md:grid-cols-7 gap-4 mt-4 w-full max-h-[500px]">
        <div className="flex gap-4 md:col-span-5">
          {/* preview */}
          <div>
            {/* This div maintains full height */}
            <div className="flex flex-col gap-3 h-[500px] overflow-y-auto">
              {previews.map((item, index) => (
                <Image
                  key={index}
                  src={item}
                  alt={`preview-${index}`}
                  width={0}
                  height={0}
                  className="object-cover w-32 h-24 rounded-xl"
                  unoptimized
                />
              ))}
            </div>
          </div>
          {/* end preview */}

          {/* image slider */}
          <div className="w-full h-full relative">
            <div className="rounded-xl overflow-hidden h-full">
              <Image
                src={main}
                alt={title}
                width={0}
                height={0}
                className="object-cover w-full h-full"
                unoptimized
              />
            </div>

            <ImageCarouselButton />
          </div>
          {/* end image slider */}
        </div>

        {/* booking options */}
        <div className="md:col-span-2 rounded-xl shadow-md pt-4 h-full">
          <div className="tour-title border-b-2 border-gray-100 pb-2">
            <h3 className="px-4">Booking</h3>
          </div>
          <div className="px-4">
            <form className="flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex flex-col gap-1">
                  <label htmlFor="formDate" className="color-dark">
                    From
                  </label>
                  <input
                    type="date"
                    id="formDate"
                    placeholder="number of adults"
                    className="rounded-lg"
                    defaultValue={new Date().toISOString().split("T")[0]}
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="toDate" className="color-dark">
                    To
                  </label>
                  <input
                    type="date"
                    id="toDate"
                    placeholder="number of adults"
                    className="rounded-lg"
                    defaultValue={new Date().toISOString().split("T")[0]}
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="numOfAdult" className="color-dark">
                    Numebr of adults
                  </label>
                  <input
                    type="number"
                    id="numOfAdult"
                    placeholder="number of adults"
                    className="rounded-lg"
                    min={1}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="numOfChild" className="color-dark">
                    Numebr of children
                  </label>
                  <input
                    type="number"
                    id="numOfChild"
                    placeholder="number of children"
                    className="rounded-lg"
                    min={1}
                  />
                </div>
              </div>

              <div className="text-center my-4">
                <p className="text-sm">subtotal</p>
                <h4 className="font-bold text-4xl color-dark">${price}</h4>
              </div>

              <Button className="w-full">Book Now</Button>
            </form>
          </div>
        </div>
        {/* end booking options */}
      </div>

      <div className="mt-8">
        {/* head */}
        <TourPageHead />
        {/* end head */}

        <main className="py-14 space-y-10 ">
          {/* overview */}
          <div id="overview" className="scroll-mt-40">
            <h3 className="tour-page-title capitalize">Overview</h3>
            <p className="text-gray-700 my-2">{tour.overview}</p>
          </div>

          <div id="highlights" className="scroll-mt-40">
            <h3 className="tour-page-title capitalize">highlights</h3>
            <p className="text-gray-700 my-2">{tour.highlights}</p>
          </div>

          <div id="details" className="scroll-mt-40">
            <h3 className="tour-page-title capitalize">details</h3>
            {
              <ul className="text-gray-700 my-2">
                {tour.details.map((item, index) => (
                  <li key={index} className="flex gap-2">
                    <span className="text-gray-500 font-medium">
                      {item.title}:
                    </span>
                    <span>{item.description}</span>
                  </li>
                ))}
              </ul>
            }
          </div>

          <div id="inclusions" className="scroll-mt-40">
            <div>
              <h3 className="tour-page-title capitalize">inclusions</h3>
              <ul className="text-gray-700 my-2">
                {tour.inclusions.map((item, index) => (
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
                {tour.exclusions.map((item, index) => (
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

            <Carousel
              CustomCard={ReviewCard}
              data={reviews}
              CarouselButtons={CarouselButtons}
            />
          </div>

          <div>
            <h3 className="tour-page-title capitalize">Related Tours</h3>

            <Carousel
              CustomCard={TravelCard}
              data={travelPackages}
              CarouselButtons={CarouselButtons}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
