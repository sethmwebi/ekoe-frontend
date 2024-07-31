// Blog highlights on the index page

import { blogData } from "@/lib/data";
import { format, parseISO } from "date-fns";
import Link from "next/link";
import ImageItem from "../Common/ImageItem";
import { Calendar, MessageSquare } from "lucide-react";

const Blog = () => {
  return (
    <div className="container mt-8 mb-20">
      <h2 className="text-3xl mb-4 font-extrabold text-center underline underline-offset-8 tracking-widest">
        Latest Blogs
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogData.slice(0, 3).map((blog) => (
          <Link
            href={`/blog/${blog.id}`}
            className="cursor-default"
            key={blog.id}
          >
            <div className="relative  w-[100%] mb-8 h-[250px]">
              <ImageItem image={blog.image_link} alt={blog.title} />
            </div>
            <div className="text-gray-500 text-sm flex items-center gap-x-8">
              <span className="flex items-center gap-2">
                <Calendar className="h-6 w-6 text-red-500" />
                <span>{format(parseISO(blog.date), "MMMM d, yyyy")}</span>
              </span>
              <span className="flex gap-1">
                <MessageSquare className="h-5 w-5 text-red-500" /> 5
              </span>
            </div>
            <p className="font-bold text-2xl my-8 cursor-pointer">
              {blog.title}
            </p>
            <p className="text-gray-500 line-clamp-3 text-sm mt-4">
              {blog.description.para1}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
