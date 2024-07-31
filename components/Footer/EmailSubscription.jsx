"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const EmailSubscription = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="flex mt-1 space-x-2">
      <Input
        type="email"
        placeholder="Enter Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button
        type="button"
        onClick={() => {}}
        className="border border-[#ff7a20] dark:border-[#ff6700] bg-[#ff7a20] dark:bg-[#ff6700] hover:bg-[#ff6700] text-[#f5f5fd] w-20 sm:w-32"
      >
        Subscribe
      </Button>
    </div>
  );
};

export default EmailSubscription;
