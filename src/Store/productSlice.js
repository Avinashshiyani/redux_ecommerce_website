import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  searchQuery: "",
  selectedCategory: "all",
  sortOrder: "none",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // set Products
    setProducts: (state, action) => {
      state.products = action.payload;
    },

    // search queries
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },

    // for selecting categories
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },

    //for sorting orders
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload;
    },
  },
});
export const { setProducts, setSearchQuery, setCategory, setSortOrder } =
  productSlice.actions;
export default productSlice.reducer;
