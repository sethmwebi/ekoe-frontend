import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  priceRange: { lowerBound: 0, upperBound: 10000 },
  selectedCategories: [],
  taggedItems: [],
  sortOption: "none",
  searchQuery: "",
  ratings: null,
  availability: "all", // Options: "all", "inStock", "outOfStock"
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },
    setSelectedCategories: (state, action) => {
      state.selectedCategories = action.payload;
    },
    setTaggedItems: (state, action) => {
      state.taggedItems = action.payload;
    },
    setSortOption: (state, action) => {
      state.sortOption = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setRatings: (state, action) => {
      state.ratings = action.payload;
    },
    setAvailability: (state, action) => {
      state.availability = action.payload;
    },
  },
});

export const {
  setPriceRange,
  setSelectedCategories,
  setTaggedItems,
  setSortOption,
  setSearchQuery,
  setRatings,
  setAvailability,
} = filterSlice.actions;

export default filterSlice.reducer;
