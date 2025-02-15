"use client";

import Link from "next/link";
import { useState } from "react";

export default function page() {
  const [selectedOption, setSelectedOption] = useState("option1");

  return (
    <div
      id="makeATrip"
      className="min-h-screen flex flex-col justify-between gap-y-12 py-12 scroll-m-12 text-darkBlue"
    >
      {/* head */}
      <div>
        <h1 className="font-bold text-3xl text-orange text-center ">
          Customize Your Trip
        </h1>
      </div>
      {/* end head */}

      {/* body */}
      <div className=" flex-1 grid grid-cols-6 bg-white rounded-lg p-3">
        {/* left side */}
        <div className="col-span-2 h-full container">
          <div className="flex flex-col justify-center gap-3 w-full h-full">
            <div>
              {/* title */}
              <h2 className="font-semibold text-xl lg:text-[28px] text-darkBlue">
                When Do You Want To Go?
              </h2>
            </div>
            {/* option 1  */}
            <div className="flex items-center gap-2 ">
              <input
                className="peer size-[24px] rounded-full border  border-darkBlue  checked:bg-darkBlue checked:ring-darkBlue  checked:bg-none"
                name="type"
                type="radio"
                value={"option1"}
                id="option1"
                checked={selectedOption === "option1"}
                onChange={(e) => setSelectedOption(e.target.value)}
              />
              <label
                htmlFor="option1"
                className="text-darkBlue text-x peer-checked:font-bold"
              >
                Have An Exact Time
              </label>
            </div>

            {/* option 2 */}
            <div className="flex items-center gap-2">
              <input
                className="peer size-[24px] rounded-full border border-darkBlue checked:bg-darkBlue checked:ring-darkBlue checked:border-darkBlue checked:bg-none"
                type="radio"
                name="type"
                value={"option2"}
                id="option2"
                checked={selectedOption === "option2"}
                onChange={(e) => setSelectedOption(e.target.value)}
              />
              <label
                htmlFor="option2"
                className="text-darkBlue text-x peer-checked:font-bold"
              >
                Have An Approximate Time
              </label>
            </div>

            {/* option 3 */}
            <div className="flex items-center gap-2">
              <input
                className="peer size-[24px] rounded-full border border-darkBlue checked:bg-darkBlue checked:ring-darkBlue checked:border-darkBlue checked:bg-none"
                type="radio"
                name="type"
                value={"option3"}
                id={"option3"}
                checked={selectedOption === "option3"}
                onChange={(e) => setSelectedOption(e.target.value)}
              />
              <label
                htmlFor="option3"
                className="text-darkBlue text-x peer-checked:font-bold"
              >
                Not Sure Yet
              </label>
            </div>
          </div>
        </div>
        {/* end left */}

        {/* right */}
        <div className="col-span-4 border border-darkBlue text-darkBlue rounded-lg flex flex-col  py-8 px-6">
          <div className="flex-1 flex items-center justify-center">
            {selectedOption === "option1" && <div>Exact Time Component</div>}
            {selectedOption === "option2" && (
              <div>Approximate Time Component</div>
            )}
            {selectedOption === "option3" && <div>Not Sure Component</div>}
          </div>
          <div className="self-end">
            <Link
              href="/complete-form"
              className="py-4 px-7 text-white bg-orange rounded-lg "
            >
              Next
            </Link>
          </div>
        </div>
        {/* end right */}
      </div>
      {/* end body */}
    </div>
  );
}
