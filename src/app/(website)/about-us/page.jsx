import { TablerUsers } from "@/icons/Icons";
import Image from "next/image";
import WhyChooseUS from "@/components/UI/AboutUs/WhyChooseUS";
import TourPackages from "@/components/UI/AboutUs/TourPackages";
import MeetTheTeam from "@/components/UI/AboutUs/MeetTheTeam";
import OurStory from "@/components/UI/AboutUs/OurStory";

export const metadata = {
  title: "Egypt Explorer - Discover Ancient Egypt",
  description:
    "Expert guided tours to Egypt's historical treasures with Egypt Explorer, your trusted travel companion since 2010.",
};

export default function page() {
  return (
    <>
      <main className="min-h-screen bg-background text-darkBlue mx-break-out">
        {/* Hero Section */}
        <section className="relative h-[60vh] w-full">
          <Image
            src="https://images.unsplash.com/photo-1568322445389-f64ac2515020?q=80&w=2070&auto=format&fit=crop"
            alt="Egyptian Pyramids"
            className="object-cover brightness-75"
            fill
            priority
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white p-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center ">
              Discover Ancient Egypt
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl text-center">
              Immersive journeys through the cradle of civilization
            </p>
          </div>
        </section>
        
        <div className="container mx-auto px-12 py-16 space-y-24">
          {/* Our Story Section */}
          <OurStory />

          {/* Meet the Team Section */}
          <MeetTheTeam />

          {/* Destinations Section */}

          {/* Tour Packages */}
          <TourPackages />

          {/* Why Choose Us */}
          <WhyChooseUS />
        </div>
      </main>
    </>
  );
}
