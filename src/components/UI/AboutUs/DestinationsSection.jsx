import { SolarPhoneCallingOutline } from "@/icons/Icons";
import ClientTabs from "app/(website)/about-us/ClientTabs";
import Link from "next/link";
import React from "react";

export default function DestinationsSection() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8 text-center">
        Top Historical Experiences
      </h2>

      <ClientTabs />

      <div className="mt-12 bg-gray-100 p-8 rounded-lg text-center">
        <h3 className="text-2xl font-bold mb-4">Not Sure Where to Go?</h3>
        <p className="text-lg mb-6">
          Our experts will help you craft the perfect Egyptian adventure
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            href="tel:00201001264478"
            className="flex justify-center items-center gap-2 bg-black hover:bg-black/90 transition-all duration-150 py-2 px-8 text-white rounded-md"
          >
            <SolarPhoneCallingOutline className="h-4 w-4" />
            Call Us: 01001264478
          </Link>
          <button className="bg-white px-5 py-2 rounded-md border-[1px] border-gray-300 hover:bg-transparent transition-all duration-150">
            Let&apos;s Chat
          </button>
        </div>
      </div>
    </section>
  );
}
