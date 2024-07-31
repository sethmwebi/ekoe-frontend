"use client";

import { AuroraBackground } from "../ui/aurora-background";

const AboutEkoe = () => {
  return (
    <AuroraBackground>
      <h1 className="text-center text-foreground mb-4 text-2xl font-normal tracking-tight md:text-3xl capitalize">
        Ekoebrand
      </h1>
      <div className="flex flex-col w-full px-4 mx-auto justify-center tracking-wide leading-5 gap-2 text-normal text-foreground">
        <p>
          Since 2018, Ekoe has been crafting fashion pieces with beauty, class,
          durability, functionality and strength at its core. Ekoe continues
          this tradition by combining superior manufacturing components to offer
          unprecedented beauty and functionality for a product that is second to
          none.
        </p>
      </div>
    </AuroraBackground>
  );
};

export default AboutEkoe;
