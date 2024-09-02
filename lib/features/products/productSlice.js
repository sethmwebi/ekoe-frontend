import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import { useSelector } from "react-redux";

// Create an entity adapter for products
const productsAdapter = createEntityAdapter();

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (filters) => {
        // Build the query parameters based on non-empty filter values
        const params = {};
        if (filters.priceRange.lowerBound !== undefined) {
          params.lowerBound = filters.priceRange.lowerBound;
        }
        if (filters.priceRange.upperBound !== undefined) {
          params.upperBound = filters.priceRange.upperBound;
        }
        if (filters.selectedCategories.length > 0) {
          params.categories = filters.selectedCategories.join(",");
        }
        if (filters.taggedItems.length > 0) {
          params.tags = filters.taggedItems.join(",");
        }
        if (filters.sortOption !== "none") {
          params.sort = filters.sortOption;
        }
        return {
          url: "/v1/api/products",
          params,
        };
      },
      transformResponse: (responseData) => {
        return productsAdapter.setAll(
          productsAdapter.getInitialState(),
          responseData
        );
      },
      providesTags: (result) => {
        if (result && result.ids) {
          return [
            ...result.ids.map((id) => ({ type: "Product", id })),
            "Product",
          ];
        }
        return ["Product"];
      },
    }),
    getProductById: builder.query({
      query: (id) => `products/${id}`,
      providesTags: (result, error, id) => [{ type: "Product", id }],
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductsByIdQuery } =
  productsApiSlice;

// Selectors
const selectProductsResult = productsApiSlice.endpoints.getAllProducts.select();
const selectProductsData = createSelector(
  selectProductsResult,
  (productsResult) => productsResult.data
);

export const {
  selectAll: selectAllProducts,
  selectById: selectProductById,
  selectIds,
  selectProductIds,
} = productsAdapter.getSelectors(
  (state) => selectProductsData(state) ?? productsAdapter.getInitialState()
);
