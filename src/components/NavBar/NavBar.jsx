import { LucideUser } from "@/icons/Icons";
// import Logo from "../Logo/Logo";
import Link from "next/link";
import ClientNavbar from "./ClientNavbar";
export default function Navbar() {
  return (
    <>
      <ClientNavbar />
      <div className="hidden bg-darkBlue w-full h-20 sticky top-0 z-30  lg:flex items-center font-normal text-white">
        <div className="container flex items-center justify-between">
          <div className=" flex items-center gap-x-3 ">
            <Link
              href="/"
              className="flex-shrink-0 lg:text-sm xl:text-base px-2 py-2"
            >
              Home
            </Link>
            <Link
              href="/"
              className="flex-shrink-0 lg:text-sm xl:text-base px-2 py-2"
            >
              About Us
            </Link>
            <div className="relative group">
              {/* Parent Link */}
              <Link
                href="/"
                className="flex-shrink-0 lg:text-sm xl:text-base px-2 py-2 cursor-pointer"
              >
                Egypt Tours
              </Link>

              {/* Dropdown Menu */}
              <div className="absolute flex flex-col gap-y-2 left-0 mt-2 top-5 pt-4 translate-y-[100px] opacity-0 invisible group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-darkBlue shadow-lg min-w-max z-50">
                <Link
                  href="/one-day-tours"
                  className="block px-4 py-2 hover:opacity-90 dark:hover:bg-gray-700"
                >
                  One Day Trip
                </Link>

                <Link
                  href="/multi-days-tours"
                  className="block px-4 py-2 hover:opacity-90 dark:hover:bg-gray-700"
                >
                  Multi Days Trips
                </Link>

                <Link
                  href="/nile-cruise"
                  className="block px-4 py-2 hover:opacity-90 dark:hover:bg-gray-700"
                >
                  Nile Cruise
                </Link>

                <Link
                  href="/shore-excursions"
                  className="block px-4 py-2 hover:opacity-90 dark:hover:bg-gray-700"
                >
                  Shore Excursions
                </Link>
              </div>
            </div>

            <Link
              href="/"
              className="flex-shrink-0 lg:text-sm xl:text-base px-2 py-2"
            >
              Hidden Gems
            </Link>
            <Link
              href="/"
              className="flex-shrink-0 lg:text-sm xl:text-base px-2 py-2"
            >
              Make Your Trip
            </Link>
            <Link
              href="/"
              className="flex-shrink-0 lg:text-sm xl:text-base px-2 py-2"
            >
              Rent A Car
            </Link>
            <Link
              href="/contact-us"
              className="flex-shrink-0 lg:text-sm xl:text-base px-2 py-2"
            >
              Contact Us
            </Link>
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
