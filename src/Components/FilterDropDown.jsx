import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setSortOrder } from "../Store/productSlice";

const selectClass =
  "filter-select h-10 bg-white border border-stone-300 rounded-lg shadow-inner px-3 text-[13px] text-stone-700 min-w-[160px] transition-all duration-200";

const FilterDropDown = () => {
  const dispatch = useDispatch();
  const allData = useSelector((state) => state.products.products);
  const dropDownData = [...new Set(allData.map((e) => e.category))];

  return (
    <div className="flex items-center gap-3 flex-wrap">
      {/* Category */}
      <select
        id="category-filter"
        className={selectClass}
        onChange={(e) => dispatch(setCategory(e.target.value))}
      >
        <option value="all">All Categories</option>
        {dropDownData.map((cat) => (
          <option key={cat} value={cat}>
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </option>
        ))}
      </select>

      {/* Sort */}
      <select
        id="sort-filter"
        className={selectClass}
        onChange={(e) => dispatch(setSortOrder(e.target.value))}
      >
        <option value="none">Sort by Price</option>
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </select>
    </div>
  );
};

export default FilterDropDown;
