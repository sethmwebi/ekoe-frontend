"use client";
import { Minus } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";
import { Slider } from "../ui/slider";
import { Checkbox } from "../ui/checkbox";
import { cn } from "@/lib/utils";
import { useState } from "react";

const DEFAULT_CUSTOM_VALUE = [2500, 7500];

const categories = [
  { id: "bags", value: "bags" },
  { id: "dresses", value: "dresses" },
  { id: "footwear", value: "footwear" },
];

const StoreSidebar = ({ filters, setFilters }) => {
  const [priceRange, setPriceRange] = useState(DEFAULT_CUSTOM_VALUE);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [taggedItems, setTaggedItems] = useState([]);

  const handlePriceChange = (newRange) => {
    setPriceRange(newRange);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const handleTagChange = (tag) => {
    setTaggedItems((prev) =>
      prev.includes(tag) ? prev.filter((item) => item !== tag) : [...prev, tag]
    );
  };

  const applyFilters = () => {
    setFilters({
      ...filters,
      priceRange: { lowerBound: priceRange[0], upperBound: priceRange[1] },
      selectedCategories,
      taggedItems,
    });
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
              checked={selectedCategories.includes(category.value)}
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
              value={priceRange[0]}
              type="text"
              className="py-2 border-box border border-accent  overflow-hidden outline-none bg-transparent w-16 text-center"
              onChange={(e) => {
                setPriceRange([Number(e.target.value), priceRange[1]]);
              }}
            />
          </div>
          <Minus className="mx-2" />
          <div className="flex items-center flex-col rounded-sm">
            <span>ksh</span>
            <input
              value={priceRange[1]}
              className="py-2 border-box border border-accent  outline-none overflow-hidden bg-transparent w-16 text-center"
              onChange={(e) => {
                setPriceRange([priceRange[0], Number(e.target.value)]);
              }}
            />
          </div>
        </div>
      </div>
      <div className="w-64 md:w-full my-4">
        <Slider
          value={priceRange}
          onValueChange={handlePriceChange}
          defaultValue={DEFAULT_CUSTOM_VALUE}
          min={0}
          max={10000}
        />
        <button
          type="button"
          className="font-normal dark:bg-[#ff6700] bg-[#ff7a20] text-[#f5f5fd] mt-4 tracking-wide px-8 py-2 cursor-pointer rounded-sm"
          onClick={applyFilters}
        >
          Filter
        </button>
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
                      taggedItems.includes(item),
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
