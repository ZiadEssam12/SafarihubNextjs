// "use client";
export default function TourPageHead() {
  // const scrollToSection = (id) => {
  //   const element = document.getElementById(id);
  //   element?.scrollIntoView({ behavior: "smooth" });
  // };

  const table = [
    {
      name: "Overview",
      link: "overview",
    },
    {
      name: "Highlights",
      link: "highlights",
    },
    {
      name: "Details",
      link: "details",
    },
    {
      name: "Inclusions",
      link: "inclusions",
    },
    {
      name: "Reviews",
      link: "reviews",
    },
  ];

  return (
    <>
      <div className="hidden lg:px-5 py-4 sticky z-[2]  top-0 lg:top-20 bg-white border-[0.5px] border-gray-500 rounded md:flex justify-around">
        {table.map(({ name, link }) => (
          <div className="w-[100px]" key={name}>
            <a className="tour-page-table" href={`#${link}`}>
              {name}
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
