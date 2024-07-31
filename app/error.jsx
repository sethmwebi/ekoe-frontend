"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const ErrorPage = () => {
  const router = useRouter();
  return (
    <div>
      <div className="relative w-full h-[60vh]">
        <Image src={"/astronaut.svg"} fill={true} alt="something went wrong" />
      </div>
      <div className="flex justify-center items-center flex-col">
        <h2 className="text-black-500/75 text-2xl tracking-widest font-extrabold">
          Oops!
        </h2>
        <h2 className="text-black-500/75 text-2xl tracking-widest font-extrabold">
          Something went wrong!
        </h2>
        <button
          onClick={() => router.push("/")}
          className="bg-black-500/75 px-5 py-2 mt-4 cursor-pointer rounded-md text-white"
        >
          go home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
