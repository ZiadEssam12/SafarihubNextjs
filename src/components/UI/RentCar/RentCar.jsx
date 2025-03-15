"use client";

import { useState } from "react";

const steps = [
  {
    title: "Car Information",
    content: "Car Information",
  },
  {
    title: "Personal Information",
    content: "Personal Information",
  },
  {
    title: "Payment",
    content: "Payment",
  },
];

export default function RentCar() {
  const [step, setStep] = useState(1);

  return (
    <>
      <section className="w-full flex-1 flex flex-col gap-3">
        {/* 1- steps  */}
        <div className="flex justify-center items-center">
          {/* Progress Bar */}
          {/* 
              Note: used pseudo elements instead of a real element but it's not working
              so I had to use a real element so I can Give it a dynamic translateX value
              as the pseudo elements don't accept dynamic values
          */}

          {/* Steps */}
          <div className="w-3/4 relative flex  py-2 border-b-2 ">
            <div
              className="absolute bg-darkBlue h-2 w-1/3 rounded-full z-10 -bottom-1 transition-all duration-300"
              style={{
                transform: `translateX(${(step - 1) * 100}%)`,
              }}
            />
            {steps.map((item, index) => (
              <div
                key={index}
                className="flex-1 flex flex-col text-center items-center"
              >
                <span
                  className={`text-2xl font-bold size-10 text-white flex items-center justify-center ${
                    step === index + 1 ? "bg-darkBlue" : "bg-darkBlue/70"
                  } rounded-md`}
                >
                  {index + 1}
                </span>
                <span
                  className={`text-lg font-semibold ${
                    step === index + 1 ? "text-darkBlue" : "text-darkBlue/70"
                  }`}
                >
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* 2- form  */}
        <div className="flex-1 flex flex-col justify-between items-center p-10 rounded-xl bg-white shadow-md">
          <div className="flex gap-2">
            <button
              onClick={() => {
                setStep((prev) => (prev === 1 ? 1 : prev - 1));
              }}
            >
              prev
            </button>
            <button
              onClick={() => {
                setStep((prev) => (prev === 3 ? 3 : prev + 1));
              }}
            >
              Next
            </button>
          </div>
        </div>
        {/* test button */}
      </section>
    </>
  );
}
