import { LucideAward, LucideClock, LucideLeaf } from "@/icons/Icons";
import React from "react";

export default function WhyChooseUS() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us?</h2>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-card p-6 rounded-lg border">
          <LucideAward className="h-10 w-10 text-primary mb-4" />
          <h3 className="text-xl font-bold mb-2">Award-Winning Service</h3>
          <p className="text-muted-foreground">
            Voted &quot;Best Cultural Tour Operator 2023&quot; by Travel Middle
            East.
          </p>
        </div>

        <div className="bg-card p-6 rounded-lg border">
          <LucideLeaf className="h-10 w-10 text-primary mb-4" />
          <h3 className="text-xl font-bold mb-2">Sustainable Tourism</h3>
          <p className="text-muted-foreground">
            Committed to preserving Egypt&apos;s heritage and supporting local
            communities.
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
  );
}
