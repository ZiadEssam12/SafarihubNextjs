"use client";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const NileCruises = [
  {
    id: 1,
    title: "standard nile cruise",
    img: "standard.webp",
  },
  {
    id: 2,
    title: "deluxe nile cruise",
    img: "deluxe.webp",
  },
  {
    id: 3,
    title: "superior nile cruise",
    img: "superior.webp",
  },
  {
    id: 4,
    title: "luxury nile cruise",
    img: "luxury.webp",
  },
];

function slug(title) {
  return title.toLowerCase().replace(/ /g, "-");
}

const ImageCard = dynamic(() => import("./ImageCard"), {
  loading: () => (
    <div className="h-[400px] bg-gray-200 relative animate-pulse rounded-xl"></div>
  ),
  ssr: false,
});

export default function NileCruise() {
  return (
    <>
      <SectionHeader title="Nile Cruise" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10">
        {NileCruises.map((item) => (
          <Link href={`/nile-cruises/${slug(item.title)}`} key={item.id}>
            <ImageCard item={item} />
          </Link>
        ))}
      </div>
    </>
  );
}
