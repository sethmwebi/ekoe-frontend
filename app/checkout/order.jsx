"use client";
import Currency from "@/components/Common/Currency";
import { Button } from "@/components/ui/button";
import { cartData } from "@/lib/data";
import { Square, SquareCheckBig } from "lucide-react";
import { useState } from "react";

const OrderedProduct = ({ item }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between font-light">
        <div className="flex items-center gap-[1px]">
          {item.product_name} x {item.quantity}
        </div>
        <Currency price={item.total} classNames={"font-medium tracking-wide"} />
      </div>
      <hr className="border-accent" />
    </div>
  );
};

const Order = () => {
  const [mpesaChecked, setMpesaChecked] = useState(true);
  const [cashChecked, setCashChecked] = useState(false);

  const handleMpesaChange = () => {
    setMpesaChecked(true);
    setCashChecked(false);
  };

  const handleCashChange = () => {
    setCashChecked(true);
    setMpesaChecked(false);
  };

  return (
    <div>
      <h2 className="text-2xl font-light mb-4 text-center md:text-left">
        Your Order
      </h2>
      <div className="flex flex-col border-2 border-accent px-6 py-4">
        <div className="flex justify-between">
          <p className="uppercase">Product</p>
          <p className="uppercase">Total</p>
        </div>
        <hr className="mt-4 mb-6 border-accent" />
        {cartData.map((product) => (
          <OrderedProduct key={product.id} item={product} />
        ))}
        <div className="flex justify-between">
          <p className="font-light">Subtotal</p>
          <Currency price={"225"} classNames={"font-medium"} />
        </div>
        <hr className="border-accent" />
        <div className="flex justify-between mt-6">
          <p className="font-bold text-xl tracking-wider">Total</p>
          <Currency
            price={"225"}
            classNames={"font-bold text-2xl dark:text-[#ff6700] text-[#ff7a20]"}
          />
        </div>
        <hr className="border-accent" />
        <div className="my-14">
          <div className="flex gap-2">
            {mpesaChecked ? (
              <SquareCheckBig
                onClick={handleMpesaChange}
                className="dark:text-[#ff6700] text-[#ff7a20]"
              />
            ) : (
              <Square
                onClick={handleMpesaChange}
                className="dark:text-[#ff6700] text-[#ff7a20]"
              />
            )}
            <span>Pay with M-Pesa</span>
          </div>
          <div className="flex gap-2 mt-2">
            {cashChecked ? (
              <SquareCheckBig
                onClick={handleCashChange}
                className="dark:text-[#ff6700] text-[#ff7a20]"
              />
            ) : (
              <Square
                onClick={handleCashChange}
                className="dark:text-[#ff6700] text-[#ff7a20]"
              />
            )}
            <span>Pay in cash</span>
          </div>
        </div>
        <Button className="self-center mb-8">Place Order</Button>
      </div>
    </div>
  );
};

export default Order;
