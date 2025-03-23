import React from "react";

{
  /*
            step 3 :
            display name , date , pick up and drop off location 
            pick up time , price number of travelers        
          */
}

export default function ThirdStep({ next, prev }) {
  return (
    <>
      <div className="col-span-2 flex flex-col h-fit">
        <p className="text-2xl font-bold text-darkBlue">Name : John Doe</p>
      </div>
      <div className="col-span-2 flex flex-col h-fit">
        <p className="text-2xl font-bold text-darkBlue">Date : 12/12/2022</p>
      </div>
      <div className="col-span-2 flex flex-col h-fit">
        <p className="text-2xl font-bold text-darkBlue">
          Pick up Location : Cairo
        </p>
      </div>
      <div className="col-span-2 flex flex-col h-fit">
        <p className="text-2xl font-bold text-darkBlue">
          Drop off Location : Giza
        </p>
      </div>
      <div className="col-span-2 flex flex-col h-fit">
        <p className="text-2xl font-bold text-darkBlue">Pick up Time : 12:00</p>
      </div>
      <div className="col-span-2 flex flex-col h-fit">
        <p className="text-2xl font-bold text-darkBlue">Price : $100</p>
      </div>

      <div className="col-span-2 flex flex-col h-fit">
        <div className="col-span-2 flex justify-between items-center mt-2">
          <button
            className="py-3 px-4 rounded-md bg-darkBlue text-white"
            onClick={prev}
          >
            Prev
          </button>
          <button
            className="py-3 px-4 rounded-md bg-darkBlue text-white"
            onClick={next}
          >
            Confirm
          </button>
        </div>
      </div>
    </>
  );
}
