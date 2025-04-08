import React from "react";

{
  /*
            step 3 :
            display name, date, pick up and drop off location 
            pick up time, price, number of travelers        
          */
}

export default function ThirdStep({ formik, next, prev }) {
  const { values } = formik;

  // Format the date to a readable format
  const formattedDate = values.pickUpDate
    ? new Date(values.pickUpDate).toLocaleDateString()
    : "";

  // Calculate the total number of travelers
  const totalTravelers = (values.numOfAdult || 0) + (values.numOfChildren || 0);

  return (
    <>
      <div className="col-span-2 mb-6 mt-3">
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Personal Information Section */}
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold text-darkBlue mb-3 border-b pb-2">
                Personal Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm">Full Name</span>
                  <span className="font-medium">{values.name}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm">Email</span>
                  <span className="font-medium">{values.email}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm">Phone</span>
                  <span className="font-medium">{values.phone}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm">Travelers</span>
                  <span className="font-medium">
                    {totalTravelers} ({values.numOfAdult}{" "}
                    {values.numOfAdult === 1 ? "Adult" : "Adults"},{" "}
                    {values.numOfChildren}{" "}
                    {values.numOfChildren === 1 ? "Child" : "Children"})
                  </span>
                </div>
              </div>
            </div>

            {/* Trip Details Section */}
            <div className="md:col-span-2 mt-4">
              <h3 className="text-lg font-semibold text-darkBlue mb-3 border-b pb-2">
                Trip Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm">Pick Up Date</span>
                  <span className="font-medium">{formattedDate}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm">Pick Up Time</span>
                  <span className="font-medium">{values.pickUpTime}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm">
                    Pick Up Location
                  </span>
                  <span className="font-medium">{values.pickUpLocation}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm">
                    Drop Off Location
                  </span>
                  <span className="font-medium">{values.dropOffLocation}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-2">
        <div className="flex justify-between items-center mt-4">
          <button
            className="py-3 px-6 rounded-md bg-gray-200 text-darkBlue hover:bg-gray-300 transition duration-300 flex items-center"
            onClick={prev}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            Back
          </button>
          <button
            className="py-3 px-6 rounded-md bg-darkBlue text-white hover:bg-blue-900 transition duration-300 flex items-center"
            onClick={next}
          >
            Confirm
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
