import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Plus, Share2, ShoppingBag } from "lucide-react";

const ItemOverlay = ({ productId }) => {
  return (
    <Link
      href={`/product/${productId}`}
      className="absolute top-0 bottom-0 right-0 left-0 z-10"
    >
      <div className="flex flex-col justify-between mt-2 px-1 overflow-y-hidden">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <Heart className="h-6 w-6 text-[#ff7a20] dark:text-[#ff6700]"/>
        </motion.span>
        <motion.div
          initial={{ opacity:0  }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute bottom-0 right-0 w-full"
        >
          <div className="flex justify-center items-center gap-[5px] mx-auto">
            <span className="bg-[#ff7a20] dark:bg-[#ff6700] py-2 px-4 md:px-2 cursor-pointer">
              <ShoppingBag className="w-6 h-6 md:h-5 md:w-5 lg:h-6 lg:w-6 text-[#f5f5fd]" />
            </span>
            <Link
              href={`/(.)product/${productId}`}
              className="bg-[#f5f5fd] py-2 px-2 cursor-pointer flex items-center text-[#1e1e1e]"
            >
              <Plus className="h-6 w-6 md:h-4 md:w-4 lg:h-6 lg:w-6" />
              <p className="md:text-sm lg:text-base">Quick view</p>
            </Link>
            <span className="py-2 px-4 md:px-2 bg-[#f5f5fd] cursor-pointer">
              <Share2 className="w-6 h-6 md:h-5 md:w-5 lg:h-6 lg:w-6 text-[#1e1e1e]" />
            </span>
          </div>
        </motion.div>
      </div>
    </Link>
  );
};

export default ItemOverlay;
