import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HowWorks() {
  return (
    <>
      <div id="howItWorks" className="py-10 text-[#071c55]">
        <h3 className="font-semibold text-[32px] capitalize">how it works</h3>

        <div className="flex flex-col  lg:flex-row gap-x-5 gap-y-10 pt-10">
          {/* left div */}
          <div className="flex-1 space-y-12 ">
            <div className="flex gap-x-5">
              <div>
                <span className="rounded-full size-[55px] flex items-center justify-center border-2 border-[#071c55] text-3xl user-select-none">
                  1
                </span>
              </div>
              <div>
                <h3 className="text-xl capitalize">Tailor Your Journey</h3>
                <p>
                  Select, personalize, or simply inform us about your ideal
                  travel experience, including desired destinations,
                  preferences, and the sights and activities you wish to
                  explore.
                </p>
              </div>
            </div>
            <div className="flex gap-x-5">
              <div>
                <span className="rounded-full size-[55px] flex items-center justify-center border-2 border-[#071c55] text-3xl user-select-none">
                  2
                </span>
              </div>
              <div>
                <h3 className="text-xl capitalize">Find Your Ideal Match</h3>
                <p>
                  Get in contact with a local travel expert who will craft a
                  flawless itinerary tailored to your preferences, all at the
                  most competitive price.
                </p>
              </div>
            </div>
            <div className="flex gap-x-5">
              <div>
                <span className="rounded-full size-[55px] flex items-center justify-center border-2 border-[#071c55] text-3xl user-select-none">
                  3
                </span>
              </div>
              <div>
                <h3 className="text-xl capitalize">Book & Free your mind</h3>
                <p>
                  Obtain a personalized itinerary that caters to your specific
                  needs and preferences. Make your payment and finalize your
                  booking only when you are satisfied with both the travel
                  specialist and the proposed itinerary.
                </p>
              </div>
            </div>

            <div className="w-full">
              <Link
                href="/makeTrip"
                className="w-full h-14 bg-[#071c55] text-white rounded-lg text-[24px] flex items-center justify-center"
              >
                BOOK NOW
              </Link>
            </div>
          </div>
          {/* end left side */}

          <div className="flex-1 bg-[#f6951b]  h-80 rounded-[45px]">
            <div className="rounded-[45px] overflow-hidden h-full bg-red-900  translate-x-5 translate-y-5">
              <Image
                src="/video.webp"
                width={0}
                height={0}
                alt="video button"
                className="w-full h-full object-cover "
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
