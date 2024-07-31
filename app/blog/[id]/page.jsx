"use client";
import { blogData } from "@/lib/data";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import { BsDash, BsTagsFill } from "react-icons/bs";
import BlogDescription from "./blog-description";
import Share from "./share";
import PreviousNext from "./previous-next";
import WriterBio from "./writer-bio";
import LeaveMessage from "./LeaveMessage";

const BlogId = () => {
  const { id } = useParams();
  const blog = blogData.find((blog) => blog.id == id);
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <div className="container mt-[56px] lg:mt-[64px]">
      <div className="mb-6 lg:mb-12">
        <h2 className="mb-2 lg:first-letter:mb-4 text-center font-medium text-xl md:text-2xl tracking-wide lg:tracking-wider  leading-snug">
          {blog.title}
        </h2>
        <div className="flex lg:gap-x-14 gap-x-4 md:gap-x-8 justify-center items-center">
          <hr className="w-[15%] lg:w-[20%]" />
          <div className="flex items-center">
            <span className="text-[#ff7a20] dark:text-[#ff6700] tracking-wide capitalize">
              {blog.category}
            </span>
            <BsDash className="" />
            <span className="lg:text-sm">
              {format(parseISO(blog.date), "MMMM d, yyyy")}
            </span>
          </div>
          <hr className="w-[15%] lg:w-[20%]" />
        </div>
      </div>
      <div className="relative w-full h-[40vh] lg:h-[70vh] mx-auto mb-4">
        <Image
          src={blog.image_link}
          className={`object-cover duration-700 ease-in-out ${
            imageLoading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          }`}
          onLoad={() => setImageLoading(false)}
          alt={blog.title}
          quality={95}
          priority
          fill
        />
      </div>
      <div className="mb-12">
        <BlogDescription blog={blog} />
      </div>
      <div className="flex items-end justify-between mb-12">
        <div className="flex gap-x-6">
          <BsTagsFill className="text-[#ff6700]" size={18} />
          <div className="flex gap-x-4 uppercase text-xs tracking-wider font-light">
            {blog?.tags.map((tag, index) => (
              <span key={`blog-tag-${index}`}>{tag}</span>
            ))}
          </div>
        </div>
        <Share />
      </div>
      <hr className="" />
      <div className="my-8 md:my-16 flex flex-col gap-y-4 md:flex-row justify-between">
        <PreviousNext blog={blogData[0]} />
        <PreviousNext direction="next" blog={blogData[4]} />
      </div>
      <div className="border border-gray-300/45 rounded-md px-4 md:px-20 py-12 w-full mx-auto">
        <WriterBio writer={blog.writer} />
      </div>
      <div className="my-12 font-semibold">
        <h2 className="text-xl">Leave A Comment</h2>
        <LeaveMessage />
      </div>
    </div>
  );
};

export default BlogId;
