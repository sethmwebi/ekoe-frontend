import { format, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";

const MAX_LENGTH = 35;

const RecentPosts = ({ blog }) => {
  return (
    <Link href={`/blog/${blog.id}`} className="flex items-center">
      <div className="relative h-12 md:h-14 w-12 lg:h-16 lg:w-16">
        <Image
          src={blog.image_link}
          alt={blog.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="ml-1 lg:ml-2 md:w-36 lg:w-44 text-sm">
        <div className="flex">
          {blog.title?.length > MAX_LENGTH
            ? blog.title.slice(0, MAX_LENGTH) + "..."
            : blog.title}
        </div>
        <div className="mt-1 flex gap-[2px] items-center text-xs lg:text-sm">
          <span className="text-[#ff7a20] dark:text-[#ff6700] tracking-wide capitalize">
            {blog.category}
          </span>
          <span className="">&mdash;</span>
          <span className="lg:text-xs">
            {format(parseISO(blog.date), "MMMM d, yyyy")}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default RecentPosts;
