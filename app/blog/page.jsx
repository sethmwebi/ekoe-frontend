import BlogSidebar from "@/components/BlogSidebar";
import MainBlog from "@/components/MainBlog";
import { blogData } from "@/lib/data";

const Blog = () => {
  return (
    <div className="container grid grid-cols-12 mt-[48px]">
      <div className="col-span-12 ml-4 md:ml-0 grid md:col-span-3 order-3 md:order-first">
        <BlogSidebar />
      </div>
      <div className="col-span-12 gap-y-8 overflow-hidden gap-x-4 md:col-span-9 grid grid-cols-1 sm:grid-cols-2 place-items-center md:place-items-end">
        {blogData.map((blog) => (
          <MainBlog key={blog.id} blog={blog} />
        ))}
      </div>
    </div >
  );
};

export default Blog;
