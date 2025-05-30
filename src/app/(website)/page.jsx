import Hero from "@/components/UI/Hero/Hero";
import HomeCarousel from "@/components/UI/HomeCarousel/HomeCarousel";
import HowWorks from "@/components/UI/HowWorks/HowWorks";
import { fetchFeaturedTours } from "@/lib/api";
import { ThemeConfig } from "flowbite-react";

// Import new components
import StatsSection from "@/components/UI/Stats/StatsSection";
import TourCategoriesSection from "@/components/UI/TourCategories/TourCategoriesSection";
import TestimonialsSection from "@/components/UI/Testimonials/TestimonialsSection";
import NewsletterSection from "@/components/UI/Newsletter/NewsletterSection";
import CTASection from "@/components/UI/CTA/CTASection";
import QuickSearchSection from "@/components/UI/QuickSearch/QuickSearchSection";

export default async function Home() {
  const data = await fetchFeaturedTours();

  return (
    <>
      <ThemeConfig /> {/* Hero Section */}
      <Hero />
      {/* Quick Search Section */}
      <QuickSearchSection />
      {/* Hot Travel Deals Section */}
      <div className="py-12">
        <div className="mb-12">
          <h2 className="font-bold text-3xl text-darkBlue capitalize text-center dark:text-white">
            hot travel deals
          </h2>
        </div>
        <HomeCarousel dots={false} carouselData={data} />
      </div>
      {/* How It Works Section */}
      <HowWorks />
      {/* Stats Section */}
      <StatsSection />
      {/* Tour Categories Section */}
      <TourCategoriesSection />
      {/* Testimonials Section */}
      <TestimonialsSection />
      {/* Call to Action Section */}
      <CTASection />
      {/* Newsletter Section */}
      <NewsletterSection />
    </>
  );
}
