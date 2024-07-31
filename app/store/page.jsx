"use client";

import Dot from "@/components/Common/Dot";
import Product from "@/components/products/Product";
import StoreSidebar from "@/components/StoreSidebar";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";

import { useGetAllProductsQuery } from "@/lib/features/products/productSlice";
import { ChevronDownIcon } from "lucide-react";
import { useEffect, useState } from "react";

const SORT_OPTIONS = [
  { name: "None", value: "none" },
  { name: "New to Ekoe", value: "newest" },
  { name: "Low to High", value: "asc" },
  { name: "High to Low", value: "desc" },
];

const PRICE_FILTERS = {
  options: [
    { value: [0, 10000], label: "Any Price" },
    { value: [0, 2000], label: "Under ksh 2000" },
    { value: [0, 1000], label: "Under ksh 1000" },
  ],
};

export const dynamic = "force-dynamic";

const Store = () => {
  const [filters, setFilters] = useState({
    priceRange: { lowerBound: 2500, upperBound: 7500 },
    selectedCategories: [],
    taggedItems: [],
    sortOption: "none",
  });

  const { data: products, error, isLoading } = useGetAllProductsQuery(filters);

  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      priceRange: { lowerBound: 0, upperBound: 100000 },
    }));
  }, []);

  const handleSortChange = (sortOption) => {
    setFilters((prev) => ({
      ...prev,
      sortOption,
    }));
  };

  const handPriceChange = (priceRange) => {
    setFilters((prev) => ({
      ...prev,
      priceRange: { lowerBound: priceRange[0], upperBound: priceRange[1] },
    }));
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="mt-[48px] z-20 container grid grid-cols-12">
      <div className="hidden  col-span-12 ml-4 md:ml-0 md:grid md:col-span-2 order-3 md:order-first">
        <StoreSidebar filters={filters} setFilters={setFilters} />
      </div>
      <div className="col-span-12 md:col-span-10 gap-8 md:gap-3 xl:ml-auto grid grid-cols-1 my-8 lg:grid-cols-2 xl:grid-cols-3">
        <div className="col-span-full flex justify-between md:justify-end">
          <div className="md:hidden flex">
            <DropdownMenu modal={false} className="bg-accent">
              <DropdownMenuTrigger className="ring-0 border-0 focus-visible:ring-offset-0 focus-visible:ring-0">
                <div className="flex w-full justify-between items-center">
                  <p>Price: </p>
                  <p className="mt-[2px]">
                    <ChevronDownIcon className="h-4 w-4" />
                  </p>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-accent">
                {PRICE_FILTERS.options.map((option, index) => (
                  <DropdownMenuItem
                    onClick={() => handPriceChange(option.value)}
                    className="w-full hover:bg-red-500 cursor-pointer"
                    key={`price-filter-${index}`}
                  >
                    <Dot />
                    &nbsp;
                    {option.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex items-center">
            <DropdownMenu modal={false} className="bg-accent">
              <DropdownMenuTrigger>
                <div className="flex w-full justify-between items-center">
                  <p>
                    Sort by:{" "}
                    {SORT_OPTIONS.find(
                      (option) => option.value === filters?.sortOption
                    )?.name || "None"}
                  </p>
                  <p className="mt-[2px]">
                    <ChevronDownIcon className="h-4 w-4" />
                  </p>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-accent">
                {SORT_OPTIONS.map((option, index) => (
                  <DropdownMenuItem
                    onClick={() => handleSortChange(option.value)}
                    className="w-full hover:bg-red-500 cursor-pointer"
                    key={`sort-option-${index}`}
                  >
                    <Dot />
                    &nbsp;
                    {option.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        {products.ids.map((id) => (
          <Product key={id} product={products.entities[id]} />
        ))}
      </div>
    </div>
  );
};

export default Store;
