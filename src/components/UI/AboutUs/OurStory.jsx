import Image from "next/image";

export default function OurStory() {
  return (
    <section className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl font-bold mb-6">Our Story</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Founded in 2010 by history enthusiasts, Egypt Explorer began with a
          passion for sharing Egypt&apos;s rich heritage responsibly. Today,
          we&apos;re a trusted name in historical tours, partnering with local
          communities to preserve cultural treasures while delivering unmatched
          adventures through the land of pharaohs.
        </p>
        <div className="bg-gray-200 p-6 rounded-lg border border-primary/20">
          <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
          <p className="text-muted-foreground">
            To ignite your passion for ancient civilizations through ethical,
            immersive, and transformative journeys across Egypt&apos;s
            historical landscapes.
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
  );
}
