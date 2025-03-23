import FormFieldWithValidation from "@/components/FormFieldWithValidation/FormFieldWithValidation";
import React from "react";

{
  /* 
            step 2 : 
            name , email , phone , nationality , num of adult and num of children
        */
}
export default function SecondStep({ next, prev }) {
  return (
    <>
      <div className="col-span-2 md:col-span-1 flex flex-col h-fit">
        <FormFieldWithValidation
          id={"name"}
          label={"Name"}
          placeholder="Enter your name"
          lableFortSize="text-lg"
        />
      </div>
      <div className="col-span-2 md:col-span-1 flex flex-col h-fit">
        <FormFieldWithValidation
          id={"email"}
          label={"Email"}
          type="email"
          placeholder="Enter your email"
          lableFortSize="text-lg"
        />
      </div>
      <div className="col-span-2 md:col-span-1 flex flex-col h-fit">
        <FormFieldWithValidation
          id={"phone"}
          label={"Phone"}
          type="tel"
          placeholder="Enter your phone"
          lableFortSize="text-lg"
        />
      </div>
      <div className="col-span-2 md:col-span-1 flex flex-col h-fit">
        <FormFieldWithValidation
          id={"nationality"}
          label={"nationality"}
          placeholder="Enter your nationality"
          lableFortSize="text-lg"
        />
      </div>
      <div className="col-span-2 md:col-span-1 flex flex-col h-fit">
        <FormFieldWithValidation
          id={"numOfAdult"}
          label={"Number of adults"}
          type="number"
          placeholder="Enter number of adults"
          lableFortSize="text-lg"
          min={1}
        />
      </div>
      <div className="col-span-2 md:col-span-1 flex flex-col h-fit">
        <FormFieldWithValidation
          id={"numOfChildren"}
          label={"Number of children"}
          type="number"
          placeholder="Enter number of children"
          lableFortSize="text-lg"
          min={0}
        />
      </div>

      <div className="col-span-2 flex flex-row-reverse justify-between items-start mt-2">
        <button
          className="py-3 px-4 rounded-md bg-darkBlue text-white"
          onClick={next}
        >
          Next
        </button>
        <button
          className="py-3 px-4 rounded-md bg-darkBlue text-white"
          onClick={prev}
        >
          Back
        </button>
      </div>
    </>
  );
}
