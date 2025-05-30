import { TablerUsers } from "@/icons/Icons";
import Image from "next/image";
import WhyChooseUS from "@/components/UI/AboutUs/WhyChooseUS";
import TourPackages from "@/components/UI/AboutUs/TourPackages";
import MeetTheTeam from "@/components/UI/AboutUs/MeetTheTeam";
import OurStory from "@/components/UI/AboutUs/OurStory";
import DestinationsSection from "@/components/UI/AboutUs/DestinationsSection";

export const metadata = {
  title: "Egypt Explorer - Discover Ancient Egypt",
  description:
    "Expert guided tours to Egypt's historical treasures with Egypt Explorer, your trusted travel companion since 2010.",
};

export default function page() {
  return (
    <>
      <main className="break-out min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 text-darkBlue dark:text-white bg-red-900">
        {/* Hero Section - Enhanced */}
        <section className="relative h-[80vh]">
          <Image
            src="https://images.unsplash.com/photo-1568322445389-f64ac2515020?q=80&w=2070&auto=format&fit=crop"
            alt="Egyptian Pyramids"
            className="object-cover"
            fill
            priority
          />

          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          {/* Hero Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-orange/20 backdrop-blur-sm border border-orange/30 px-4 py-2 rounded-full text-orange text-sm font-medium">
                <TablerUsers className="w-4 h-4" />
                Trusted by 10,000+ Travelers
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                <span className="block">Discover</span>
                <span className="block bg-gradient-to-r from-orange to-yellow-400 bg-clip-text text-transparent">
                  Ancient Egypt
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed text-gray-200">
                Embark on extraordinary journeys through the cradle of
                civilization with expert guides, authentic experiences, and
                memories that last a lifetime.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <button className="bg-orange hover:bg-orange/90 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                  Start Your Journey
                </button>
                <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300">
                  Watch Our Story
                </button>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/4 animate-bounce">
              <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="break-out bg-darkBlue dark:bg-gray-800 py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "15+", label: "Years Experience" },
                { number: "10,000+", label: "Happy Travelers" },
                { number: "50+", label: "Tour Packages" },
                { number: "99%", label: "Satisfaction Rate" },
              ].map((stat, index) => (
                <div key={index} className="text-white">
                  <div className="text-3xl md:text-4xl font-bold text-orange mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <div className="relative">
          {/* Our Story Section - Enhanced */}
          <section className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4 lg:px-12">
              <OurStory />
            </div>
          </section>

          {/* Meet the Team Section - Enhanced */}
          <section className="py-20 bg-gradient-to-r from-gray-50 to-orange/5 dark:from-gray-800 dark:to-orange/5">
            <div className="container mx-auto px-4 lg:px-12">
              <MeetTheTeam />
            </div>
          </section>

          {/* Destinations Section - Enhanced */}
          <section className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4 lg:px-12">
              <DestinationsSection />
            </div>
          </section>

          {/* Tour Packages Section - Enhanced */}
          <section className="py-20 bg-gradient-to-l from-gray-50 to-orange/5 dark:from-gray-800 dark:to-orange/5">
            <div className="container mx-auto px-4 lg:px-12">
              <TourPackages />
            </div>
          </section>

          {/* Why Choose Us Section - Enhanced */}
          <section className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4 lg:px-12">
              <WhyChooseUS />
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="break-out bg-gradient-to-r from-darkBlue via-orange to-darkBlue py-20">
            <div className="container mx-auto px-4 text-center text-white">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to Explore Egypt?
              </h2>
              <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Join thousands of satisfied travelers and create unforgettable
                memories in the land of pharaohs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-darkBlue hover:bg-gray-100 font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105">
                  Browse All Tours
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-darkBlue font-semibold px-8 py-4 rounded-full transition-all duration-300">
                  Contact Us Today
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
