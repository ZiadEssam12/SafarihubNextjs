import SectionHeader from "@/components/SectionHeader/SectionHeader";
import Image from "next/image";
import Link from "next/link";

export default function OneDayTours() {
  const OneDayTours = [
    {
      title: "cairo",
      img: "cairo-tour.jpg",
      link: "/cairo",
    },
    {
      title: "luxor",
      img: "luxor-tour.jpg",
      link: "/luxor",
    },
    {
      title: "aswan",
      img: "cairo-tour.jpg",
      link: "/aswan",
    },
    {
      title: "Hurghada",
      img: "cairo-tour.jpg",
      link: "/hurghada",
    },
    {
      title: "sharm el sheikh",
      img: "cairo-tour.jpg",
      link: "/sharm-el-sheikh",
    },
    {
      title: "dahab",
      img: "cairo-tour.jpg",
      link: "/dahab",
    },
    {
      title: "alexandria",
      img: "cairo-tour.jpg",
      link: "/alexandria",
    },
    {
      title: "taba",
      img: "cairo-tour.jpg",
      link: "/taba",
    },
    {
      title: "marsa alam",
      img: "cairo-tour.jpg",
      link: "/marsa-alam",
    },
  ];

  return (
    <div id="one-day-tour">
      <SectionHeader title="Egypt Day Tours" />
      <div className="min-h-screen dark:text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 color-white font-semibold text-2xl">
          {OneDayTours.map((tour, index) => (
            <Link
              key={index}
              href={"/one-day-tours" + tour.link}
              className="relative transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <Image
                src={tour.img}
                alt={tour.title}
                width={0}
                height={0}
                className="object-fit w-full h-[200px]"
                unoptimized
              />
              <h2 className="text-2xl font-bold absolute bottom-4 left-4 border-t-[1px] border-white pt-1 uppercase ">
                {tour.title}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
