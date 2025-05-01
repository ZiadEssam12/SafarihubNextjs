import React, { useState } from "react";
import { SearchModal } from "../UI/SearchBar/SearchModal";
import { IconamoonSearchThin } from "@/icons/Icons";

export default function SearchButton() {
  const [showSearch, setShowSearch] = useState(false);
  const handleToggle = () => {
    setShowSearch((prev) => !prev);
  };

  return (
    <>
      <div className="relative hidden lg:block">
        {/* search bar */}
        <button
          name="search"
          id="search"
          placeholder="Search"
          className="py-2 pl-4 pr-8 text-start w-[150px] capitalize cursor-pointer border-[1px] border-darkBlue/30 rounded-full text-darkBlue text-sm font-normal"
          onClick={handleToggle}
          title="Click To Open Search Bar"
        >
          search...
        </button>
        {/* end of search bar */}
        <span className="absolute right-3 top-1/2 -translate-y-1/2 stroke-darkBlue fill-darkBlue">
          <IconamoonSearchThin width={20} height={20} />
        </span>
      </div>
      {/* search modal */}

      <SearchModal show={showSearch} toggle={handleToggle} />
    </>
  );
}
