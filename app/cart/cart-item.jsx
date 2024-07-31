import Currency from "@/components/Common/Currency";
import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";

const CartItem = ({ item }) => {
  return (
    <div className="grid grid-cols-12 gap-4 my-8 place-items-center">
      <div className="col-span-2 grid place-items-start">
        <div className="relative h-16 w-16">
          <Image
            src={item.product_image}
            className="object-cover"
            alt={item.product_name}
            fill
          />
        </div>
      </div>
      <div className="col-span-2 max-w-[100%]">
        <p className="font-light tracking-normal md:tracking-wide truncate">
          {item.product_name}
        </p>
      </div>
      <div className="col-span-3">
        <div className="w-20 md:w-32 justify-around p-2 border border-gray-200 flex items-center gap-2">
          <Plus size={20} className="cursor-pointer text-gray-500" />
          {item.quantity}
          <Minus size={20} className="cursor-pointer text-gray-500" />
        </div>
      </div>
      <div className="col-span-4 md:col-span-2">
        <Currency price={item.price} classNames="text-[#ff6700]" />
      </div>
      <div className="hidden md:block col-span-2">
        <Currency price={item.total} classNames="text-[#ff6700]" />
      </div>
      <div className="col-span-1">
        <X size={24} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default CartItem;
