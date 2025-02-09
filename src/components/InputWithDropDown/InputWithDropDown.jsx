"use client";

import { useEffect, useRef, useState } from "react";

const data = [
  {
    id: 1,
    name: "United States",
  },
  {
    id: 2,
    name: "United Kingdom",
  },
  {
    id: 3,
    name: "Canada",
  },
  {
    id: 4,
    name: "Australia",
  },
];

function getCountryList({ setCountries, setError }) {
  // getting the list of the countries from the api
  fetch("https://countriesnow.space/api/v0.1/countries/iso")
    .then((response) => response.json())
    .then((data) => {
      console.log("data", data);
      setCountries(data.data);
    })
    .catch((error) => {
      setError(error);
    });
}

export function InputWithDropDown({
  name,
  id,
  placeholder,
  onChange,
  value,
  ...props
}) {
  const [selected, setSelected] = useState(value || "");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    getCountryList({ setCountries, setError });
  }, []);

  useEffect(() => {
    setSelected(value || "");
  }, [value]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setSelected(newValue);
    onChange && onChange(newValue);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <input
        type="text"
        name={name}
        id={id}
        placeholder={placeholder}
        className="w-full rounded-md"
        value={selected}
        onChange={handleInputChange}
        onClick={() => setIsOpen(true)}
        onFocus={(e) => e.target.select()}
        onBlur={() => setIsOpen(false)}
        {...props}
      />

      {error ? (
        <div className="absolute top-full w-full bg-white border border-darkBlue/30 rounded-md">
          <p className="text-red-500">
            Error: Couldn&apos;t fetch countries list, please try again later
          </p>
        </div>
      ) : (
        <>
          {isOpen && (
            <div className="absolute top-full w-full bg-white border border-darkBlue/30 rounded-md max-h-[200px] overflow-y-auto">
              {countries
                .filter((item) =>
                  item.name.toLowerCase().startsWith(selected.toLowerCase())
                )
                .map((item) => (
                  <div
                    key={`${item.Iso3}-${item.name}`}
                    className="w-full h-full py-2 px-4 hover:bg-gray-100"
                    onClick={() => {
                      setSelected(item.name);
                      setIsOpen(false);
                      onChange && onChange(item.name);
                    }}
                  >
                    {item.name}
                  </div>
                ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
