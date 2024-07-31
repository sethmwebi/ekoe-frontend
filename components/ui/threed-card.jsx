"use client"

import { cn } from "@/lib/utils";
import React, { createContext, useState, useContext, useRef, useEffect } from "react";

const MouseEnterContext = createContext([false, () => {}]);

export const CardContainer = ({ children, className, containerClassName }) => {
  const containerRef = useRef(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseEnter = () => setIsMouseEntered(true); // Concise arrow function

  const handleMouseLeave = () => {
    setIsMouseEntered(false);
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={cn("py-1 flex items-center justify-center", containerClassName)}
        style={{ perspective: "1000px" }}
      >
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "flex items-center justify-center relative transition-all duration-200 ease-linear",
            className
          )}
          style={{ transformStyle: "preserve-3d" }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

export const CardBody = ({ children, className }) => (
  <div
    className={cn(
      "h-96 w-96 [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]",
      className
    )}
  >
    {children}
  </div>
);

export const CardItem = ({
  as = "div",
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}) => {
  const ref = useRef(null);
  const [isMouseEntered] = useContext(MouseEnterContext);

  useEffect(() => {
    handleAnimations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMouseEntered]);

  const handleAnimations = () => {
    if (!ref.current) return;
    ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
  };

  return (
    <as
      ref={ref}
      className={cn("w-fit transition duration-200 ease-linear", className)}
      {...rest}
    >
      {children}
    </as>
  );
};

// Create a hook to use the context
export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (!context) {
    throw new Error("useMouseEnter must be used within a MouseEnterProvider");
  }
  return context;
};
