import { LucideAward, LucideClock, LucideLeaf } from "@/icons/Icons";
import Image from "next/image";

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
          <section className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2010 by history enthusiasts, Egypt Explorer began
                with a passion for sharing Egypt&apos;s rich heritage
                responsibly. Today, we&apos;re a trusted name in historical
                tours, partnering with local communities to preserve cultural
                treasures while delivering unmatched adventures through the land
                of pharaohs.
              </p>
              <div className="bg-gray-200 p-6 rounded-lg border border-primary/20">
                <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
                <p className="text-muted-foreground">
                  To ignite your passion for ancient civilizations through
                  ethical, immersive, and transformative journeys across
                  Egypt&apos;s historical landscapes.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1539768942893-daf53e448371?q=80&w=1171&auto=format&fit=crop"
                alt="Egyptian Temple"
                fill
                className="object-cover"
              />
            </div>
          </section>

          {/* Meet the Team Section */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-center">
              Meet the Team
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              Our guides aren&apos;t just experts—they&apos;re storytellers,
              historians, and your window into Egypt&apos;s soul.
            </p>

            {/* cards */}
            <div className="grid md:grid-cols-3 gap-8"></div>
          </section>

          {/* Destinations Section */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-center">
              Top Historical Experiences
            </h2>

            {/* tabs */}

            <div className="mt-12 bg-secondary p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Not Sure Where to Go?</h3>
              <p className="text-lg mb-6">
                Our experts will help you craft the perfect Egyptian adventure
              </p>
              {/* call us */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4"></div>
            </div>
          </section>

          {/* Tour Packages */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-center">
              Tour Packages
            </h2>

            <div className="grid md:grid-cols-3 gap-8"></div>

            <div className="mt-10 text-center"></div>
          </section>

          {/* Why Choose Us */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-center">
              Why Choose Us?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-lg border">
                <LucideAward className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  Award-Winning Service
                </h3>
                <p className="text-muted-foreground">
                  Voted &quot;Best Cultural Tour Operator 2023&quot; by Travel
                  Middle East.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <LucideLeaf className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Sustainable Tourism</h3>
                <p className="text-muted-foreground">
                  Committed to preserving Egypt&apos;s heritage and supporting
                  local communities.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <LucideClock className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                <p className="text-muted-foreground">
                  Instant booking support. Call us anytime at 01001264478.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
