"use client";
import Link from "next/link";
import { useState } from "react";
import Currency from "../../Common/Currency";

const Product = ({ product }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="place-self-center block overflow-hidden rounded-md">
      <Link href={`/product/${product.id}`}>
        <div className="flex flex-col items-end lg:items-start rounded-md">
          <div
            className="rounded-md w-[300px] h-[300px] md:w-[230px] md:h-[250px] lg:w-[280px] lg:h-[300px] bg-accent overflow-hidden"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <img
              className="h-full w-full object-cover object-center"
              src={product.image}
              alt={product.title}
            />
          </div>
          <div className="flex mt-6 w-full items-center justify-center flex-col">
            <p className="text-foreground tracking-widest my-1 text-sm font-extralight">
              {product.category}
            </p>
            <p className="truncate w-[300px] sm:w-[230px] text-center cursor-pointer">
              {product.title}
            </p>
            <Currency
              price={product.price}
              classNames={
                "text-lg font-bold text-[#FF7A20] dark:text-[#ff6700]"
              }
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
