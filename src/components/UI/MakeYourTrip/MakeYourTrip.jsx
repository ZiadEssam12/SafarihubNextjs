"use client";

import { useState } from "react";
import Options from "./Options";

//
// this page formed from some steps
// --> step 1
// where first step the user has to choose option for the trip
// and then choose the date of the trip
// options component is step one

// --> step 2
// second step the user has to fill the information about the trip
// then user submits the form

export default function MakeYourTrip() {
  const [step, setStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState("option1");

  return (
    <>
      {step === 1 && (
        <Options
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          setStep={setStep}
          step={step}
        />
      )}
      {step >= 2 && (
        <div className="col-span-6 h-full container py-3">
          <h2 className="font-semibold text-xl lg:text-[28px] text-darkBlue text-center">
            Fill The Information
          </h2>
          <div className="h-full">
            <form className="h-full flex flex-col justify-between">
              <div className="flex-1 flex flex-col gap-2 mt-3">
                <input
                  type="text"
                  placeholder="Name"
                  className="border border-darkBlue rounded-lg p-2"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="border border-darkBlue rounded-lg p-2"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="border border-darkBlue rounded-lg p-2"
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="border border-darkBlue rounded-lg p-2"
                />
                <input
                  type="text"
                  placeholder="City"
                  className="border border-darkBlue rounded-lg p-2"
                />
                <input
                  type="text"
                  placeholder="Country"
                  className="border border-darkBlue rounded-lg p-2"
                />
              </div>
              <div className="flex gap-4 justify-center py-3">
                <button
                  className="text-white rounded-lg bg-orange w-[100px] py-2"
                  onClick={() => setStep((prev) => prev - 1)}
                >
                  Back
                </button>
                <button className="bg-orange text-white rounded-lg w-[100px] py-2">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
