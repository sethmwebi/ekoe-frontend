import React from "react";

const ProductSkeleton = () => {
  return (
    <div className="relative animate-pulse">
      <div className="rounded-md w-[300px] h-[300px] md:w-[230px] md:h-[250px] lg:w-[280px] lg:h-[300px] bg-gray-200 overflow-hidden">
        <div className="h-full w-full bg-gray-200" />
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <div className="bg-gray-200 h-4 w-full" />
        <div className="bg-gray-200 h-4 w-full" />
      </div>
    </div>
  );
};

export default ProductSkeleton;
