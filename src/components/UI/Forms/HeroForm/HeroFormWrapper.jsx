"use client";

import dynamic from "next/dynamic";

const HeroForm = dynamic(() => import("./HeroForm"), {
  ssr: false,
  loading: () => (
    <div className="rounded-md  h-[400px] lg:h-28 w-full bg-gray-200 animate-pulse"></div>
  ),
});

export default function HeroFormWrapper() {
  return <HeroForm />;
}
