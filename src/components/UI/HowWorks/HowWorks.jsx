import Image from "next/image";
import Link from "next/link";
import React from "react";

const list = [
  {
    title: "Tailor Your Journey",
    description:
      "Select, personalize, or simply inform us about your ideal travel experience, including desired destinations, preferences, and the sights and activities you wish to explore.",
  },
  {
    title: "Find Your Ideal Match",
    description:
      "Get in contact with a local travel expert who will craft a flawless itinerary tailored to your preferences, all at the most competitive price.",
  },
  {
    title: "Book & Free your mind",
    description:
      "Obtain a personalized itinerary that caters to your specific needs and preferences. Make your payment and finalize your booking only when you are satisfied with both the travel specialist and the proposed itinerary.",
  },
];

export default function HowWorks() {
  return (
    <>
      <div id="howItWorks" className="py-10 text-darkBlue dark:text-white">
        <h3 className="font-semibold text-[32px] capitalize">how it works</h3>

        <div className="flex flex-col  lg:flex-row gap-x-5 gap-y-10 pt-10">
          {/* left div */}

          <div className="flex-1 space-y-12 ">
            {list.map((item, index) => (
              <div className="flex gap-x-5" key={item.title}>
                <div>
                  <span className="rounded-full size-[55px] flex items-center justify-center border-2 border-darkBlue dark:border-white text-3xl user-select-none">
                    {index + 1}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl capitalize">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}

            <div className="w-full">
              <Link
                href="/make-trip"
                className="w-full h-14 bg-darkBlue text-white rounded-lg text-[24px] flex items-center justify-center"
              >
                BOOK NOW
              </Link>
            </div>
          </div>
          {/* end left side */}

          <div className="flex-1 bg-orange  size-80 rounded-[45px]">
            <div className="rounded-[45px] overflow-hidden h-full  translate-x-5 translate-y-5">
              <Image
                src="/Video.jpg"
                width={0}
                height={0}
                alt="video button"
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
