import Image from "next/image";

export default function MeetTheTeam() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8 text-center">Meet the Team</h2>
      <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
        Our guides aren&apos;t just experts—they&apos;re storytellers,
        historians, and your window into Egypt&apos;s soul.
      </p>

      {/* cards */}

      <div className="grid md:grid-cols-3 gap-8">
        <div className="rounded-md border-[1px] border-gray-200 flex flex-col justify-between">
          {/* head */}
          <figure className="relative h-64">
            <Image
              src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1021&auto=format&fit=crop"
              alt="Ahmed Hassan"
              fill
              className="object-cover"
            />
          </figure>

          <div className="p-4">
            {/* body */}
            <div className="pb-4">
              <h3 className="text-lg font-semibold">Ahmed Hassan</h3>
              <p className="text-darkBlue/70 text-sm">
                Egyptologist & Senior Guide
              </p>
            </div>

            {/* footer */}
            <div>
              <p className="text-darkBlue/70">
                With 15 years of experience, Ahmed specializes in the mysteries
                of the Valley of Kings and ancient hieroglyphics.
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-md border-[1px] border-gray-200 flex flex-col justify-between">
          {/* head */}
          <figure className="relative h-64">
            <Image
              src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1021&auto=format&fit=crop"
              alt="Ahmed Hassan"
              fill
              className="object-cover"
            />
          </figure>

          <div className="p-4">
            {/* body */}
            <div className="pb-4">
              <h3 className="text-lg font-semibold">Ahmed Hassan</h3>
              <p className="text-darkBlue/70 text-sm">
                Egyptologist & Senior Guide
              </p>
            </div>

            {/* footer */}
            <div>
              <p className="text-darkBlue/70">
                With 15 years of experience, Ahmed specializes in the mysteries
                of the Valley of Kings and ancient hieroglyphics.
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-md border-[1px] border-gray-200 flex flex-col justify-between">
          {/* head */}
          <figure className="relative h-64">
            <Image
              src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1021&auto=format&fit=crop"
              alt="Ahmed Hassan"
              fill
              className="object-cover"
            />
          </figure>

          <div className="p-4">
            {/* body */}
            <div className="pb-4">
              <h3 className="text-lg font-semibold">Ahmed Hassan</h3>
              <p className="text-darkBlue/70 text-sm">
                Egyptologist & Senior Guide
              </p>
            </div>

            {/* footer */}
            <div>
              <p className="text-darkBlue/70">
                With 15 years of experience, Ahmed specializes in the mysteries
                of the Valley of Kings and ancient hieroglyphics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
