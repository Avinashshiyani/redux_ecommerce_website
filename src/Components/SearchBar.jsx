import React from "react";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../Store/productSlice";

const SearchBar = () => {
  const dispatch = useDispatch();

  return (
    <div className="relative flex-1 max-w-[400px] min-w-[180px]">
      {/* Search icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#a8977e"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>

      <input
        type="text"
        className="search-input w-full h-10 bg-white border border-stone-300 rounded-lg shadow-inner pl-10 pr-4 text-[13px] text-stone-700 placeholder-stone-400 transition-all duration-200"
        placeholder="Search products..."
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
      />
    </div>
  );
};

export default SearchBar;
