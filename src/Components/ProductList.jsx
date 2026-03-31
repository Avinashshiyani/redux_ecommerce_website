import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const data = useSelector((state) => state.products.products);
  const searchedQuery = useSelector((state) => state.products.searchQuery);
  const selectedCategory = useSelector(
    (state) => state.products.selectedCategory
  );
  const sort = useSelector((state) => state.products.sortOrder);

  const filteredData = data
    .filter((e) =>
      e.title.toLowerCase().includes(searchedQuery.toLowerCase())
    )
    .filter((e) =>
      selectedCategory === "all" ? true : e.category === selectedCategory
    )
    .sort((a, b) => {
      if (sort === "asc") return a.price - b.price;
      if (sort === "desc") return b.price - a.price;
      return 0;
    });

  if (filteredData.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 gap-4">
        <div className="bg-amber-50 border border-amber-200 shadow-inner rounded-full w-16 h-16 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#c8a96e"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>
        <p className="text-stone-500 text-sm font-medium">No products found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {filteredData.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
