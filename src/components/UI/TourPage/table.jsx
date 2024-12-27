"use client";
export default function TourPageHead() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="px-5 py-4 sticky z-[2] top-20 bg-white border-[0.5px] border-gray-500 rounded flex justify-around">
        <button
          onClick={() => scrollToSection("overview")}
          className="tour-page-table"
        >
          Overview
        </button>
        <button
          onClick={() => scrollToSection("highlights")}
          className="tour-page-table"
        >
          Highlights
        </button>
        <button
          onClick={() => scrollToSection("details")}
          className="tour-page-table"
        >
          Details
        </button>
        <button
          onClick={() => scrollToSection("inclusions")}
          className="tour-page-table"
        >
          Inclusions
        </button>
        <button
          onClick={() => scrollToSection("reviews")}
          className="tour-page-table"
        >
          Reviews
        </button>
      </div>
    </>
  );
}
