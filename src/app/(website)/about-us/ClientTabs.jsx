"use client";

import { useState } from "react";
import Image from "next/image";
import { HiCalendar, HiCamera, HiLocationMarker } from "react-icons/hi";

const destinationsData = [
  {
    id: "giza",
    title: "Giza Pyramids",
    subtitle: "Giza Pyramids Complex",
    image:
      "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=1170&auto=format&fit=crop",
    highlights: "Great Pyramid of Khufu, Sphinx, Solar Boat Museum",
    bestTime: "October-April",
    experience:
      "Camel rides, sound and light shows, VR historical reconstructions",
  },
  {
    id: "luxor",
    title: "Luxor",
    subtitle: "Luxor: Open-Air Museum",
    image:
      "https://images.unsplash.com/photo-1601142634808-38923eb7c560?q=80&w=1170&auto=format&fit=crop",
    highlights: "Valley of the Kings, Karnak Temple, Luxor Temple",
    bestTime: "November-February",
    experience: "Hot air balloon rides, private tomb visits, Nile cruises",
  },
  {
    id: "aswan",
    title: "Aswan",
    subtitle: "Aswan & Abu Simbel",
    image:
      "https://images.unsplash.com/photo-1633163893862-4cdc62de7d82?q=80&w=1170&auto=format&fit=crop",
    highlights: "Abu Simbel temples, Philae Temple, Nubian villages",
    bestTime: "December-February",
    experience: "Felucca sailing, Nubian dinners, High Dam tour",
  },
  {
    id: "alexandria",
    title: "Alexandria",
    subtitle: "Alexandria: Mediterranean Gem",
    image:
      "https://images.unsplash.com/photo-1633624646814-3a61ed3e2847?q=80&w=1074&auto=format&fit=crop",
    highlights:
      "Bibliotheca Alexandrina, Qaitbay Citadel, Catacombs of Kom El Shoqafa",
    bestTime: "March-June, September-November",
    experience:
      "Mediterranean cuisine tours, Greco-Roman ruins, coastal drives",
  },
];

export default function ClientTabs() {
  const [activeTab, setActiveTab] = useState("giza");

  const activeDestination = destinationsData.find(
    (dest) => dest.id === activeTab
  );

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200 dark:border-gray-700 mb-8">
        <nav className="flex flex-wrap justify-center lg:justify-start gap-2 lg:gap-0 -mb-px">
          {destinationsData.map((destination) => (
            <button
              key={destination.id}
              onClick={() => setActiveTab(destination.id)}
              className={`px-4 py-3 lg:px-6 lg:py-4 text-sm lg:text-base font-medium rounded-t-lg lg:rounded-none transition-all duration-200 ${
                activeTab === destination.id
                  ? "bg-orange text-white border-b-2 border-orange lg:bg-transparent lg:text-orange lg:border-orange"
                  : "text-gray-600 hover:text-orange hover:bg-orange/5 dark:text-gray-400 dark:hover:text-orange"
              }`}
            >
              {destination.title}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Image Section */}
          <div className="relative h-[300px] lg:h-[450px]">
            <Image
              src={activeDestination.image}
              alt={activeDestination.title}
              fill
              className="object-cover transition-all duration-500"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Content Section */}
          <div className="p-6 lg:p-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-darkBlue dark:text-white mb-6">
              {activeDestination.subtitle}
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-orange/10 p-2 rounded-lg">
                  <HiLocationMarker className="h-5 w-5 text-orange flex-shrink-0" />
                </div>
                <div>
                  <span className="font-semibold text-darkBlue dark:text-white block mb-1">
                    Highlights:
                  </span>
                  <p className="text-gray-600 dark:text-gray-300">
                    {activeDestination.highlights}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange/10 p-2 rounded-lg">
                  <HiCalendar className="h-5 w-5 text-orange flex-shrink-0" />
                </div>
                <div>
                  <span className="font-semibold text-darkBlue dark:text-white block mb-1">
                    Best Time:
                  </span>
                  <p className="text-gray-600 dark:text-gray-300">
                    {activeDestination.bestTime}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange/10 p-2 rounded-lg">
                  <HiCamera className="h-5 w-5 text-orange flex-shrink-0" />
                </div>
                <div>
                  <span className="font-semibold text-darkBlue dark:text-white block mb-1">
                    Experience:
                  </span>
                  <p className="text-gray-600 dark:text-gray-300">
                    {activeDestination.experience}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <button className="bg-orange hover:bg-orange/90 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg">
                Explore {activeDestination.title} Tours
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
