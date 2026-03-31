import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { id, title, description, price, category, images } = product;

  return (
    <Link to={`/product/${id}`} className="group bg-gradient-to-b from-white to-amber-50 border border-stone-200 border-t-2 border-t-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-pointer block">

      {/* Image — framed like a photo */}
      <div className="h-[200px] overflow-hidden relative bg-stone-100">
        <img
          src={images?.[0]}
          alt={title}
          className="w-full h-full object-cover"
        />
        {/* Inner shadow to simulate a photo frame */}
        <div className="absolute inset-0 shadow-[inset_0_2px_8px_rgba(0,0,0,0.15)] rounded-none pointer-events-none" />
      </div>

      {/* Card Body */}
      <div className="p-4 flex flex-col flex-1">

        {/* Title */}
        <h3 className="text-[15px] font-semibold text-stone-800 leading-snug line-clamp-1">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[13px] text-stone-500 mt-1 leading-relaxed line-clamp-2">
          {description}
        </p>

        {/* Category Badge */}
        <div className="mt-2">
          <span className="inline-block bg-amber-100 text-amber-800 text-xs font-medium px-3 py-1 rounded-full border border-amber-200 shadow-sm">
            {category}
          </span>
        </div>

        {/* Footer: Price + Add Button */}
        <div className="flex items-center justify-between mt-auto pt-3">
          <span className="text-[16px] font-bold text-stone-900">
            ${price.toFixed(2)}
          </span>

          <button 
            onClick={(e) => e.preventDefault()}
            className="bg-gradient-to-b from-stone-700 to-stone-900 text-white text-[13px] font-medium px-4 py-2 rounded-xl shadow-md hover:shadow-inner hover:from-stone-800 hover:to-stone-950 active:scale-95 transition-all duration-150 cursor-pointer"
          >
            Add
          </button>
        </div>

      </div>
    </Link>
  );
};

export default ProductCard;
