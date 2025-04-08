// import { Datepicker } from "flowbite-react";
import { useState } from "react";

export default function ExactTimeComponent({ setFieldValue }) {
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
    setFieldValue("from", formatedDate);
    if (fromDate > toDateFull) {
      handleToDateChange(fromDate);
    }
  };

  const handleToDateChange = (toDate) => {
    const formatedDate = formatDate(toDate);

    setToDateFull(toDate);
    setToDateFormatted(formatedDate);
    setFieldValue("to", formatedDate);
    if (toDate < fromDateFull) {
      handleFromDateChange(toDate);
    }
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
