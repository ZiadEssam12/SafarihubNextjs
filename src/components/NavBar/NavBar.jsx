import { LucideUser } from "@/icons/Icons";
import Link from "next/link";
import ClientNavbar from "./ClientNavbar";

export const links = [
  {
    name: "Home",
    url: "/",
    dropdown: false,
  },
  {
    name: "About Us",
    url: "/about-us",
    dropdown: false,
  },
  {
    name: "Egypt Tours",
    url: "/",
    dropdown: [
      { name: "One Day Trip", url: "/one-day-tours" },
      { name: "Multi Days Trips", url: "/multi-days-tours" },
      { name: "Nile Cruise", url: "/nile-cruise" },
      { name: "Shore Excursions", url: "/shore-excursions" },
    ],
  },
  {
    name: "Hidden Gems",
    url: "/hidden-gems",
    dropdown: false,
  },
  {
    name: "Make Your Trip",
    url: "/make-trip",
    dropdown: false,
  },
  {
    name: "Rent A Car",
    url: "/rent-car",
    dropdown: false,
  },
  {
    name: "Contact Us",
    url: "/contact-us#contact",
    dropdown: false,
  },
];

export default function Navbar() {
  return (
    <>
      <ClientNavbar />
      <div className="hidden bg-darkBlue w-full h-20 sticky top-0 z-30 lg:flex items-center font-normal text-white">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-x-3">
            {links.map((link, index) => (
              <div key={index} className="relative group">
                {link.dropdown ? (
                  <div className="flex-shrink-0 lg:text-sm xl:text-base px-2 py-2 cursor-pointer">
                    {link.name}
                  </div>
                ) : (
                  <Link
                    href={link.url}
                    className="flex-shrink-0 lg:text-sm xl:text-base px-2 py-2 cursor-pointer"
                  >
                    {link.name}
                  </Link>
                )}
                {link.dropdown && (
                  <div className="absolute flex flex-col gap-y-2 left-0 mt-2 top-6 pt-4 translate-y-[100px] opacity-0 invisible group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-darkBlue shadow-lg min-w-max z-50">
                    {link.dropdown.map((sublink, subIndex) => (
                      <Link
                        key={subIndex}
                        href={sublink.url}
                        className="block px-4 py-2 hover:opacity-90 dark:hover:bg-gray-700"
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div>
            <Link
              href="/login"
              className="flex gap-x-1 items-center bg-white text-darkBlue px-4 py-2 rounded-md dark:bg-darkBlue dark:text-white"
            >
              <span className="fill-darkBlue stroke-darkBlue">
                <LucideUser />
              </span>
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
