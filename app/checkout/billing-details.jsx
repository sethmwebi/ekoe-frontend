"use client";
import { SquareCheckBig, Square } from "lucide-react";
import { useState } from "react";

const TextInput = ({ type = "text", labelText, required }) => {
  return (
    <div className="flex flex-col gap-1 max-w-[100%]">
      <label className="text-sm text-foreground">
        {labelText}
        {required && (
          <span className="dark:text-[#ff6700] text-[#ff7a20]">*</span>
        )}
      </label>
      <input
        className="h-10 md:h-12 max-w-[100%] border-2 border-accent px-4 bg-transparent outline-none"
        type={type}
      />
    </div>
  );
};

const BillingDetails = () => {
  const [checked, setChecked] = useState(false);
  return (
    <form className="flex flex-col gap-3 md:gap-6 mb-4 md:mb-0">
      <h2 className="text-2xl font-light mb-4 text-center md:text-left">
        Billing Details
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TextInput labelText="First Name" required />
        <TextInput labelText="Last Name" required />
      </div>
      <TextInput labelText="County" required />
      <TextInput labelText="Address" required />
      <TextInput labelText="Town/City" required />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TextInput labelText="Email" required />
        <TextInput labelText="Phone" required />
      </div>
      <div className="flex gap-2 items-center">
        {checked ? (
          <SquareCheckBig
            className="dark:text-[#ff6700] text-[#ff7a20]"
            onClick={() => setChecked((prev) => !prev)}
          />
        ) : (
          <Square
            className="dark:text-[#ff6700] text-[#ff7a20]"
            onClick={() => setChecked((prev) => !prev)}
          />
        )}
        <span className="text-sm">Create an account?</span>
      </div>
    </form>
  );
};

export default BillingDetails;
