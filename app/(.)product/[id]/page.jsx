"use client";

import ImageItem from "@/components/Common/ImageItem";
import { Dialog } from "@headlessui/react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Star, StarHalf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Currency from "@/components/Common/Currency";

const Modal = () => {
  let [isOpen, setIsOpen] = useState(true);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const router = useRouter();
  const { theme } = useTheme();

  useEffect(() => {
    async function fetchProduct() {
      setLoading(true);
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const product = await res.json();
      setProduct(product);
      setLoading(false);
    }

    fetchProduct();
  }, [id]);

  return (
    <Dialog
      open={isOpen}
      onClose={() => {
        setIsOpen(false);
        router.back();
      }}
      className="relative z-50"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div
        className="fixed inset-0 bg-black/30 dark:bg-black/40"
        aria-hidden="true"
      />

      {/* Full-screen scrollable container */}
      <div className="fixed inset-0 w-screen overflow-y-auto">
        {/* Container to center the panel */}
        <div className="flex min-h-full items-center justify-center p-4">
          {/* The actual dialog panel  */}
          <Dialog.Panel className="mx-auto max-w-3xl rounded bg-card p-10">
            {loading ? (
              <div className="h-8 w-8 rounded-full border-l-2 border-[#ff7a20] dark:border-[#ff6700] animate-spin" />
            ) : (
              <div className="flex flex-col justify-center items-center md:flex-row gap-x-8 h-96">
                {product?.image && (
                  <div className="relative w-48 h-56 lg:w-72 lg:h-full">
                    <ImageItem image={product.image} alt={product.title} />
                  </div>
                )}

                <div className="flex-1 flex flex-col">
                  <div className="flex-1">
                    <h4 className="font-semibold text-xl text-center">
                      {product?.title}
                    </h4>
                    <p className="font-medium text-sm text-center">
                      <Currency price={product.price} />
                    </p>
                    <div className="flex justify-center items-center text-sm my-4">
                      <p>{product?.rating.rate}</p>
                      {product?.rating.rate && (
                        <div className="flex items-center ml-2 mr-6">
                          {/* Display 5 stars but display the rate ones as StarIconOutline  */}
                          {Array.from(
                            { length: Math.floor(product.rating.rate) },
                            (_, i) => (
                              <Star
                                fill={theme === "dark" ? "#ff6700" : "#ff7a20"}
                                key={i}
                                className="h-4 w-4 text-[#ff7a20] dark:text-[#ff6700]"
                              />
                            )
                          )}

                          {/* Display the rest of the stars as StarIconOutline  */}
                          {Array.from(
                            { length: 5 - Math.floor(product.rating.rate) },
                            (_, i) => (
                              <Star
                                key={i}
                                className="h-4 w-4 text-[#ff7a20] dark:text-[#ff6700]"
                              />
                            )
                          )}
                        </div>
                      )}
                      <p className="text-[#ff7a20] dark:text-[#ff6700] hover:underline cursor-pointer text-xs">
                        See all {product?.rating.count} reviews
                      </p>
                    </div>
                    <p className="line-clamp-5 text-sm">
                      {product?.description}
                    </p>
                  </div>

                  <div className="space-y-3 text-sm">
                    <Button className="button w-full py-2 bg-[#ff7a20] hover:bg-[#ff6700] dark:bg-[#ff6700] hover:dark:bg-[#ff7a20]">
                      Add to cart
                    </Button>
                    <Button
                      onClick={() => window.location.reload()}
                      variant={"outline"}
                      className="py-2 w-full"
                    >
                      View full details
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};

export default Modal;
