import {
  BasilFacebookOutline,
  IcOutlineEmail,
  MdiInstagram,
  SolarPhoneOutline,
} from "@/icons/Icons";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#071c55] py-10 dark:text-white">
        <div className="container">
          <div id="footer-title" className="text-center pb-10   ">
            <h3 className="text-white text-3xl font-semibold">
              Need Our Help ?
            </h3>
            <p className="text-2xl">We Would Happy To Help You ...</p>
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-10  text-[18px]">
            <div className="flex-1">
              <div className="border-white">
                <h3 className="border-b-2 text-center font-semibold text-xl pb-2">
                  Contact Info
                </h3>
              </div>
              <div className="flex flex-col">
                <div className="flex gap-4 items-center mt-5">
                  <p className="w-fit p-2 border-2 rounded-full border-white">
                    <SolarPhoneOutline width={30} height={30} />
                  </p>
                  <div className="flex flex-col gap-4">
                    <p className="text-white">
                      <a href="tel:+91 1234567890">+91 1234567890</a>
                    </p>
                    <p className="text-white">
                      <a href="tel:+91 1234567890">+91 1234567890</a>
                    </p>
                    <p className="text-white">
                      <a href="tel:+91 1234567890">+91 1234567890</a>
                    </p>
                  </div>
                </div>
                <div className=" mt-4 flex gap-x-4 items-center">
                  <p className="w-fit p-2 border-2 rounded-full border-white">
                    <IcOutlineEmail width={30} height={30} />
                  </p>
                  <p>
                    <a href="mailto:test@test.com">test@test.com </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="border-white">
                <div className="border-white">
                  <h3 className="border-b-2 text-center font-semibold text-xl pb-2">
                    Sun Pyramids Tours
                  </h3>
                </div>
                <div className="capitalize text-center mt-5 flex flex-col gap-y-4">
                  <Link href="/">make your trip</Link>
                  <Link href="/">one day tours</Link>
                  <Link href="/">multi day tours</Link>
                  <Link href="/">placehoder</Link>
                  <Link href="/">placehoder</Link>
                </div>
                <div className="flex flex-col"></div>
              </div>
            </div>
            <div className="  flex-1">
              <div className="border-white">
                <h3 className="border-b-2 text-center font-semibold text-xl pb-2">
                  Social Media
                </h3>
                <div className="mt-5 flex flex-col gap-4 items-center">
                  <a href="" title="follow us on facebook">
                    <BasilFacebookOutline width={30} height={30} />
                  </a>
                  <a href="" title="follow us on instagram">
                    <MdiInstagram width={30} height={30} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
