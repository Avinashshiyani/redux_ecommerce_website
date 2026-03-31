import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "./Store/productSlice";
import ProductList from "./Components/ProductList";
import SearchBar from "./Components/SearchBar";
import FilterDropDown from "./Components/FilterDropDown";

const NAV_LINKS = ["Home", "Products", "Orders"];

const App = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    const apiData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        dispatch(setProducts(response.data.products));
      } catch (err) {
        setError("Something went wrong. Please try again.");
      }
      setLoading(false);
    };
    apiData();
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f5f0eb" }}>

      {/* ── Navbar ── */}
      <header className="bg-gradient-to-b from-white to-stone-50 shadow-md border-b border-stone-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
          {/* Logo / Title */}
          <span className="text-lg md:text-xl font-semibold text-stone-800 tracking-tight drop-shadow-sm">
            🪵 Product Dashboard
          </span>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-2">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                className="px-4 py-1.5 text-sm font-medium text-stone-600 bg-stone-100 border border-stone-200 rounded-lg shadow-sm hover:shadow-inner hover:bg-stone-200 active:scale-95 transition-all duration-150 cursor-pointer"
              >
                {link}
              </button>
            ))}
          </nav>

          {/* Hamburger (mobile only) */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] rounded-lg bg-stone-100 border border-stone-200 shadow-sm hover:bg-stone-200 transition-all duration-150 cursor-pointer"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              /* Close (X) icon */
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#57534e" strokeWidth="2.2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              /* Hamburger icon */
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#57534e" strokeWidth="2.2" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div className="md:hidden bg-gradient-to-b from-stone-50 to-white border-t border-stone-200 px-6 py-3 flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => setMenuOpen(false)}
                className="w-full text-left px-4 py-2.5 text-sm font-medium text-stone-700 bg-stone-100 border border-stone-200 rounded-lg shadow-sm hover:shadow-inner hover:bg-stone-200 active:scale-[0.98] transition-all duration-150 cursor-pointer"
              >
                {link}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* ── Filter Bar ── */}
      <div className="bg-gradient-to-b from-stone-50 to-amber-50/30 border-b border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center gap-3 flex-wrap">
          <SearchBar />
          <FilterDropDown />
        </div>
      </div>

      {/* ── Main Content ── */}
      <main className="max-w-7xl mx-auto px-8 py-8">
        {error && (
          <p className="text-center text-sm text-stone-500 py-16">{error}</p>
        )}

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="bg-amber-50 border border-stone-200 rounded-2xl overflow-hidden shadow-lg animate-pulse"
              >
                <div className="h-[200px] bg-stone-200" />
                <div className="p-4 space-y-3">
                  <div className="h-3.5 bg-stone-200 rounded-full w-3/4" />
                  <div className="h-3 bg-stone-200 rounded-full w-full" />
                  <div className="h-3 bg-stone-200 rounded-full w-2/3" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <ProductList />
        )}
      </main>
    </div>
  );
};

export default App;
