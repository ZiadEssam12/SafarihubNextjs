import { Datepicker } from "flowbite-react";
import { useState } from "react";

export default function Options({
  selectedOption,
  setSelectedOption,
  setStep,
}) {
  return (
    <>
      {/* left side */}
      <div className="col-span-6 lg:col-span-2 container">
        <div className="flex flex-col lg:justify-center gap-3 w-full lg:h-full ">
          <div className="">
            {/* title */}
            <h2 className="font-semibold text-xl lg:text-[28px] text-darkBlue">
              When Do You Want To Go?
            </h2>
          </div>
          {/* options */}
          <div className="flex flex-col gap-3">
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
          {/* end options */}
        </div>
      </div>
      {/* left side */}
      {/* ---------- */}
      {/* right side */}
      <div className="flex-1 h-full col-span-6 lg:col-span-4 border border-darkBlue text-darkBlue rounded-lg flex flex-col  py-8 px-6">
        <div className="flex-1 flex items-center justify-center">
          {selectedOption === "option1" && <ExactTimeComponent />}
          {selectedOption === "option2" && (
            <div>Approximate Time Component</div>
          )}
          {selectedOption === "option3" && <NotSureComponent />}
        </div>
        <div className="self-end">
          <button
            className="py-4 px-7 text-white bg-orange rounded-lg "
            onClick={() => setStep((prev) => prev + 1)}
          >
            Next
          </button>
        </div>
      </div>
      {/* end right */}
    </>
  );
}

function ExactTimeComponent() {
  const theme = {
    popup: {
      footer: {
        base: "hidden",
      },
    },
  };

  const formatDate = (date) => {
    if (!date) return ""; // Handle null/undefined dates
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}/${month}/${day}`;
  };

  // Define today and tomorrow first
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  // Initialize state with tomorrow's date
  const [fromDateFull, setFromDateFull] = useState(today);
  const [fromDateFormatted, setFromDateFormatted] = useState(formatDate(today));

  const [toDateFull, setToDateFull] = useState(today);
  const [toDateFormatted, setToDateFormatted] = useState(formatDate(today));

  const handleFromDateChange = (fromDate) => {
    const formatedDate = formatDate(fromDate);

    setFromDateFull(fromDate);
    setFromDateFormatted(formatedDate);
  };

  const handleToDateChange = (toDate) => {
    const formatedDate = formatDate(toDate);

    setToDateFull(toDate);
    setToDateFormatted(formatedDate);
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-3">
        <div className="flex flex-col items-center">
          <p className="text-darkBlue">
            From <span className="font-bold">{fromDateFormatted}</span>
          </p>
          <Datepicker
            inline
            onChange={(date) => {
              handleFromDateChange(date);
              // If new from date is after current to date, update to date
              if (date > toDateFull) {
                setToDateFull(date);
                setToDateFormatted(formatDate(date));
              }
            }}
            minDate={today}
            value={fromDateFull}
            theme={theme}
          />
        </div>
        <div className="flex flex-col items-center">
          <p className="text-darkBlue">
            To <span className="font-bold">{toDateFormatted}</span>
          </p>
          <Datepicker
            key={toDateFormatted}
            inline
            onChange={(date) => {
              handleToDateChange(date);
            }}
            minDate={fromDateFull || tomorrow}
            value={toDateFull}
            theme={theme}
          />
        </div>
      </div>
    </>
  );
}

function NotSureComponent() {
  return (
    <div className="flex flex-col items-center gap-3">
      <label htmlFor="duration">How many days do you want to stay?</label>
      <input
        type="number"
        id="duration"
        placeholder="Days"
        className="w-full py-4 border border-darkBlue rounded-md"
        min={1}
      />
    </div>
  );
}
