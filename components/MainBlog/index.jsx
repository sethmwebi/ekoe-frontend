import Link from "next/link";
import { format, parseISO } from "date-fns";
import ImageItem from "../Common/ImageItem";

const MainBlog = ({ blog }) => {
  return (
    <div className="flex flex-col">
      <div className="relative xl:h-64 xl:w-[25rem] lg:h-56 lg:w-[21rem] md:h-50 md:w-[16rem] sm:w-[18rem] sm:h-52 h-64 w-[28rem] mb-8">
        <ImageItem image={blog.image_link} title={blog.title} />
      </div>
      <Link
        href={`blog/${blog.id}`}
        className="text-normal text-center xl:text-xl font-semibold"
      >
        {blog.title}
      </Link>
      <div className="mt-4 flex gap-2 items-center">
        <span className="text-[#ff6700] tracking-wide text-lg capitalize">
          {blog.category}
        </span>
        <span className="text-foreground">&mdash;</span>
        <span className="text-foreground">
          {format(parseISO(blog.date), "MMMM d, yyyy")}
        </span>
      </div>
    </div>
  );
};

export default MainBlog;
