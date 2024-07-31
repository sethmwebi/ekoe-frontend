"use client";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { Meteors } from "../ui/meteor";
import WavyUnderline from "../Common/WavyUnderline";

const services = [
  "We offer a wide range of repair services including fixing tears, replacing zippers, mending seams, and more",
  "Customers can request for alterations such as hemming, resizing, or adjustments to customize their garments",
  "We provide restoration services to revatilize vintage or sentimental pieces.",
];

const ClothingRepairSection = () => {
  return (
    <div className="relative flex flex-col gap-y-4 overflow-hidden w-full container my-10 md:my-20">
      <div>
        <h2 className="text-center font-medium my-2 text-2xl">
          Clothing Repair Section
        </h2>
        <p>
          At Ekoebrand, we are dedicated to promoting sustainability through
          every aspect of our business. Our clothing Repair Section is a new
          initiative aimed at extending the lifespan of clothing items and
          reducing waste by offering clothing repair to our customers.
        </p>
      </div>
      <div>
        <h2 className="text-center font-medium text-xl my-2">Purpose</h2>
        <p>
          The clothing Repair Section serves to encourage responsible
          consumption by providing convenient and professional repair solutions
          for damaged or worn-out clothing. By offering repair services, we aim
          to promote a culture of reuse and longevity in fashion.
        </p>
      </div>
      <div className="flex justify-center my-2">
        <button className="z-[80] inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-[#ff7a20] bg-[linear-gradient(110deg,#ff6700,45%,#ff7a20,55%,#ff6700)] bg-[length:200%_100%] px-6 font-medium text-[#f5f5fd] transition-colors focus:outline-none">
          Repair Now
        </button>
      </div>
      <div className="my-2">
        <div className="flex justify-center">
          <h2 className="relative w-fit font-medium text-xl mb-4">
            Services Offered
            <WavyUnderline.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-4 text-[#ff6700]" />
          </h2>
        </div>
        <ul className="w-full flex flex-col space-y-2">
          {services.map((service, idx) => (
            <li key={`service-${idx}`} className="flex font-thin capitalize">
              <Check className="text-primary mr-2" />
              {service}
            </li>
          ))}
        </ul>
      </div>

      <Meteors number={20} />
    </div>
  );
};

export default ClothingRepairSection;
