"use client";
import Image from "next/image";
import { useState } from "react";

const ImageItem = ({ image, alt }) => {
  const [loading, setLoading] = useState(true);

  return (
    <Image
      src={image}
      className={`object-cover duration-700 ease-in-out ${
        loading
          ? "scale-110 blur-2xl grayscale"
          : "scale-100 blur-0 grayscale-0"
      }`}
      onLoad={() => setLoading(false)}
      priority
      alt={alt}
      fill
    />
  );
};

export default ImageItem;
