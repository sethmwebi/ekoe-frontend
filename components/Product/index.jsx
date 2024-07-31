"use client";
import Link from "next/link";
import { useState } from "react";
import Currency from "../Common/Currency";
import ItemOverlay from "../Common/ItemOverlay";
import { AnimatePresence } from "framer-motion";
import ImageItem from "../Common/ImageItem";

const Product = ({ product }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link className="place-self-center" href={`/product/${product.id}`}>
      <div className="flex flex-col items-end lg:items-start">
        <div
          className="relative w-[300px] h-[300px] md:w-[230px] md:h-[250px] lg:w-[280px] lg:h-[300px] bg-accent"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <AnimatePresence>
            {hovered && <ItemOverlay productId={product.id} />}
          </AnimatePresence>
          <ImageItem image={product.image} alt={product.title} />
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
            classNames={"text-lg font-bold text-[#FF7A20] dark:text-[#ff6700]"}
          />
        </div>
      </div>
    </Link>
  );
};

export default Product;
