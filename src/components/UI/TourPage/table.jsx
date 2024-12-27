"use client";
export default function TourPageHead() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="px-5 py-4 sticky top-[85px] bg-white border-[0.5px] border-gray-500 rounded flex justify-around">
        <button
          onClick={() => scrollToSection("overview")}
          className="cursor-pointer opacity-80 hover:opacity-100 transition-all relative before:absolute before:-bottom-1 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:h-[2px] before:bg-black"
        >
          Overview
        </button>
        <button
          onClick={() => scrollToSection("highlights")}
          className="cursor-pointer opacity-80 hover:opacity-100 transition-all relative before:absolute before:-bottom-1 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:h-[2px] before:bg-black"
        >
          Highlights
        </button>
        <button
          onClick={() => scrollToSection("details")}
          className="cursor-pointer opacity-80 hover:opacity-100 transition-all relative before:absolute before:-bottom-1 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:h-[2px] before:bg-black"
        >
          Details
        </button>
        <button
          onClick={() => scrollToSection("inclusions")}
          className="cursor-pointer opacity-80 hover:opacity-100 transition-all relative before:absolute before:-bottom-1 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:h-[2px] before:bg-black"
        >
          Inclusions
        </button>
        <button
          onClick={() => scrollToSection("reviews")}
          className="cursor-pointer opacity-80 hover:opacity-100 transition-all relative before:absolute before:-bottom-1 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:h-[2px] before:bg-black"
        >
          Reviews
        </button>
      </div>
    </>
  );
}
