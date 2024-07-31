"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="relative w-full h-[60vh]">
        <Image src={"/astronaut.svg"} fill={true} alt="something went wrong" />
      </div>
      <div className="flex justify-center items-center flex-col">
        <h2 className="text-black-500/75 text-2xl tracking-widest font-extrabold">
          404
        </h2>
        <div className="text-black-500/75 text-2xl tracking-widest font-extrabold">
          <p className="uppercase">page not found!!!</p>
        </div>
        <button
          onClick={() => router.push("/")}
          className="bg-black px-5 py-2 mt-4 cursor-pointer rounded-md text-white"
        >
          go home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
