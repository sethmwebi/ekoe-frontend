"use client";
import { Minus } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";
import { Slider } from "../ui/slider";
import { Checkbox } from "../ui/checkbox";
import { cn } from "@/lib/utils";
import { useState } from "react";
import {
  setPriceRange,
  setSelectedCategories,
  setTaggedItems,
} from "@/lib/features/filters/filterSlice";
import { useDispatch, useSelector } from "react-redux";

const DEFAULT_CUSTOM_VALUE = [2500, 7500];

const categories = [
  { id: "bags", value: "bags" },
  { id: "dresses", value: "dresses" },
  { id: "footwear", value: "footwear" },
];

const StoreSidebar = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  const handlePriceChange = (newRange) => {
    dispatch(
      setPriceRange({ lowerBound: newRange[0], upperBound: newRange[1] })
    );
  };

  const handleCategoryChange = (category) => {
    dispatch(
      setSelectedCategories(
        filters.selectedCategories.includes(category)
          ? filters.selectedCategories.filter((item) => item !== category)
          : [...filters.selectedCategories, category]
      )
    );
  };

  const handleTagChange = (tag) => {
    dispatch(
      setTaggedItems(
        filters.taggedItems.includes(tag)
          ? filters.taggedItems.filter((item) => item !== tag)
          : [...filters.taggedItems, tag]
      )
    );
  };
  return (
    <ScrollArea className="fixed w-64 overflow-y-scroll h-screen flex flex-col">
      <h2 className="font-semibold mt-4 text-2xl">Category</h2>
      <div className="mt-2 ml-1 flex flex-col gap-y-2">
        {categories.map((category) => (
          <div
            key={`search-category-${category.id}`}
            className="flex gap-x-2 items-center cursor-pointer"
          >
            <Checkbox
              checked={filters.selectedCategories.includes(category.value)}
              onCheckedChange={() => handleCategoryChange(category.value)}
              id={category.id}
            />
            <label htmlFor={category.id} className="cursor-pointer">
              {category.value}
            </label>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <h2 className="font-bold text-2xl mb-4">Price</h2>
        <div className="flex items-center">
          <div className="flex items-center flex-col rounded-sm">
            <span>ksh</span>
            <input
              value={filters.priceRange.lowerBound}
              type="text"
              className="py-2 border-box border border-accent  overflow-hidden outline-none bg-transparent w-16 text-center"
              onChange={(e) => {
                setPriceRange([
                  Number(e.target.value),
                  filters.priceRange.upperBound,
                ]);
              }}
            />
          </div>
          <Minus className="mx-2" />
          <div className="flex items-center flex-col rounded-sm">
            <span>ksh</span>
            <input
              value={filters.priceRange.upperBound}
              className="py-2 border-box border border-accent  outline-none overflow-hidden bg-transparent w-16 text-center"
              onChange={(e) => {
                setPriceRange([
                  filters.priceRange.lowerBound,
                  Number(e.target.value),
                ]);
              }}
            />
          </div>
        </div>
      </div>
      <div className="w-64 md:w-full my-4">
        <Slider
          value={[filters.priceRange.lowerBound, filters.priceRange.upperBound]}
          onValueChange={handlePriceChange}
          defaultValue={DEFAULT_CUSTOM_VALUE}
          min={0}
          max={10000}
        />
      </div>
      <div className="w-64 mt-4">
        <h2 className="font-bold text-2xl mb-4">Tags</h2>
        <div className="flex flex-wrap gap-2">
          {["shoes", "dresses", "bags", "sandals", "shorts"].map(
            (item, idx) => (
              <button
                onClick={() => handleTagChange(item)}
                key={`shop-tags-${idx}`}
                className={cn(
                  "w-fit border py-1 px-5 border-accent tracking-wide rounded-sm",
                  {
                    "dark:bg-[#ff6700] bg-[#ff7a20] text-[#f5f5fd]":
                      filters.taggedItems.includes(item),
                  }
                )}
              >
                {item}
              </button>
            )
          )}
        </div>
      </div>
    </ScrollArea>
  );
};

export default StoreSidebar;
