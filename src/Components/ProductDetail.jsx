import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = useSelector(state => 
    state.products.products.find(p => p.id === parseInt(id))
  );

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center py-24 gap-4">
         <p className="text-stone-500 text-sm font-medium">Product not found</p>
         <button onClick={() => navigate("/")} className="text-amber-800 hover:underline text-sm font-medium">Return Home</button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-stone-200">
      <button 
        onClick={() => navigate(-1)} 
        className="mb-6 flex items-center gap-2 text-stone-500 hover:text-stone-800 font-medium transition-colors text-sm cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        Back to products
      </button>
      
      <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
        <div className="w-full md:w-1/2 h-[350px] md:h-[450px] bg-stone-50 rounded-xl overflow-hidden shadow-inner flex items-center justify-center p-4 border border-stone-100">
          <img src={product.images?.[0]} alt={product.title} className="max-w-full max-h-full object-contain" />
        </div>
        
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-2 leading-tight">{product.title}</h2>
          
          <div className="mb-4">
            <span className="inline-block bg-amber-100 text-amber-800 text-xs font-medium px-3 py-1 rounded-full border border-amber-200 shadow-sm">
              {product.category}
            </span>
          </div>
          
          <p className="text-stone-600 mb-8 leading-relaxed text-[15px]">{product.description}</p>
          
          <div className="text-3xl md:text-4xl font-extrabold text-stone-900 mb-8">
            ${product.price.toFixed(2)}
          </div>
          
          <button className="bg-gradient-to-b from-stone-700 to-stone-900 text-white font-medium px-6 py-3 md:py-4 rounded-xl shadow-md hover:shadow-inner hover:from-stone-800 hover:to-stone-950 active:scale-95 transition-all duration-150 w-full sm:w-auto text-center cursor-pointer">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
