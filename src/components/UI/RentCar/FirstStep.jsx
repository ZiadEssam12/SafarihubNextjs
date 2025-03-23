"use client";

import FormFieldWithValidation from "@/components/FormFieldWithValidation/FormFieldWithValidation";

{
  /*
            step 1 :
            pick up date / time , location and drop off location
  */
}
export default function FirstStep({ next }) {
  const today = new Date();

  return (
    <>
      <div className="col-span-2 md:col-span-1 flex flex-col h-fit">
        <FormFieldWithValidation
          id={"pickUpDate"}
          label={"Pick up date"}
          type="date"
          min={today.toISOString().split("T")[0]}
          lableFortSize="text-lg"
        />
      </div>
      <div className="col-span-2 md:col-span-1 flex flex-col h-fit">
        <FormFieldWithValidation
          id={"pickUpTime"}
          label={"Pick up time"}
          type="time"
          min={"12:00"}
          defaultValue={"12:00"} // Set the default value here
          lableFortSize="text-lg"
        />
      </div>
      <div className="col-span-2 md:col-span-1 flex flex-col ">
        <FormFieldWithValidation
          id={"pickUpLocation"}
          label={"Pick up Location"}
          placeholder="Enter your pick up location"
          lableFortSize="text-lg"
        />
      </div>
      <div className="col-span-2 md:col-span-1 flex flex-col ">
        <FormFieldWithValidation
          id={"dropOffLocation"}
          label={"Drop Off Location"}
          placeholder="Enter your Drop Off location"
          lableFortSize="text-lg"
        />
      </div>
      <div className="col-span-2 flex justify-end items-start mt-2">
        <button
          className="py-3 px-4 rounded-md bg-darkBlue text-white"
          onClick={next}
        >
          Next
        </button>
      </div>
    </>
  );
}
