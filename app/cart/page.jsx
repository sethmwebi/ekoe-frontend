import { cartData } from "@/lib/data";
import CartItem from "./cart-item";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button, buttonVariants } from "@/components/ui/button";

const Cart = () => {
  return (
    <div className="container my-8 md:my-14">
      <div className="grid grid-cols-12 place-items-center text-sm md:text-lg uppercase font-medium md:font-semibold border border-gray-200 py-4">
        <div className="col-span-2">
          <span>Image</span>
        </div>
        <div className="col-span-2">
          <span>Product</span>
        </div>
        <div className="col-span-3">
          <span>Quantity</span>
        </div>
        <div className="col-span-4 md:col-span-2">
          <span>Price</span>
        </div>
        <div className="hidden md:block col-span-2">
          <span>Total</span>
        </div>
        <div className="col-span-1"></div>
      </div>
      {cartData.map((cart) => (
        <CartItem key={cart.id} item={cart} />
      ))}
      <div className="mt-14 flex items-center justify-between flex-col md:flex-row gap-4">
        <div className="flex flex-col">
          <Button asChild className="w-80 sm:w-60 md:w-72">
            <Link href="/store" className="text-center text-gray-500 uppercase">
              Continue Shopping
            </Link>
          </Button>
          <div className="mt-8 w-80 sm:w-60 md:w-72">
            <p className="uppercase mb-2 text-lg">Coupon Code</p>
            <div className="w-full max-w-sm flex items-center space-x-2">
              <Input className="text-center font-bold uppercase" />
              <Button type="submit">apply</Button>
            </div>
          </div>
        </div>
        <div className="w-80 sm:w-60 md:w-96 bg-gray-200 pt-6 h-fit flex gap-y-2 flex-col">
          <div className="w-full flex justify-between px-4 ">
            <p className="font-light text-lg">subtotal</p>
            <p className="font-base">ksh 1,500.00</p>
          </div>
          <hr className="w-full px-4 bg-white" />
          <div className="w-full flex justify-between px-4 ">
            <p className="font-base text-lg uppercase">total</p>
            <p className="font-bold text-lg">ksh 1,500.00</p>
          </div>
          <Button asChild>
            <Link href="/checkout">proceed to checkout</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
