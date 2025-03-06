"use client";

import { Tabs } from "flowbite-react";

import Image from "next/image";
import { HiCalendar, HiCamera, HiLocationMarker } from "react-icons/hi";

export default function ClientTabs() {
  return (
    <Tabs
      aria-label="Egypt Destinations"
      variant="fullWidth"
      theme={{
        tabitem: {
          base: "flex items-center justify-center rounded-t-lg p-4 text-sm font-medium first:ml-0 focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500",
        },
      }}
    >
      {/* Giza Pyramids */}
      <Tabs.Item active title="Giza Pyramids">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=1170&auto=format&fit=crop"
              alt="Giza Pyramids"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Giza Pyramids Complex</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <HiLocationMarker className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <span className="font-medium">Highlights:</span> Great Pyramid
                  of Khufu, Sphinx, Solar Boat Museum
                </div>
              </li>
              <li className="flex items-start gap-3">
                <HiCalendar className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <span className="font-medium">Best Time:</span> October-April
                </div>
              </li>
              <li className="flex items-start gap-3">
                <HiCamera className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <span className="font-medium">Experience:</span> Camel rides,
                  sound and light shows, VR historical reconstructions
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Tabs.Item>

      {/* Luxor */}
      <Tabs.Item title="Luxor">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1601142634808-38923eb7c560?q=80&w=1170&auto=format&fit=crop"
              alt="Luxor Temple"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Luxor: Open-Air Museum</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <HiLocationMarker className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <span className="font-medium">Highlights:</span> Valley of the
                  Kings, Karnak Temple, Luxor Temple
                </div>
              </li>
              <li className="flex items-start gap-3">
                <HiCalendar className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <span className="font-medium">Best Time:</span>{" "}
                  November-February
                </div>
              </li>
              <li className="flex items-start gap-3">
                <HiCamera className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <span className="font-medium">Experience:</span> Hot air
                  balloon rides, private tomb visits, Nile cruises
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Tabs.Item>

      {/* Aswan */}
      <Tabs.Item title="Aswan">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1633163893862-4cdc62de7d82?q=80&w=1170&auto=format&fit=crop"
              alt="Abu Simbel"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Aswan & Abu Simbel</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <HiLocationMarker className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <span className="font-medium">Highlights:</span> Abu Simbel
                  temples, Philae Temple, Nubian villages
                </div>
              </li>
              <li className="flex items-start gap-3">
                <HiCalendar className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <span className="font-medium">Best Time:</span>{" "}
                  December-February
                </div>
              </li>
              <li className="flex items-start gap-3">
                <HiCamera className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <span className="font-medium">Experience:</span> Felucca
                  sailing, Nubian dinners, High Dam tour
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Tabs.Item>

      {/* Alexandria */}
      <Tabs.Item title="Alexandria">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1633624646814-3a61ed3e2847?q=80&w=1074&auto=format&fit=crop"
              alt="Alexandria Library"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Alexandria: Mediterranean Gem
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <HiLocationMarker className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <span className="font-medium">Highlights:</span> Bibliotheca
                  Alexandrina, Qaitbay Citadel, Catacombs of Kom El Shoqafa
                </div>
              </li>
              <li className="flex items-start gap-3">
                <HiCalendar className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <span className="font-medium">Best Time:</span> March-June,
                  September-November
                </div>
              </li>
              <li className="flex items-start gap-3">
                <HiCamera className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <span className="font-medium">Experience:</span> Mediterranean
                  cuisine tours, Greco-Roman ruins, coastal drives
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Tabs.Item>
    </Tabs>
  );
}
