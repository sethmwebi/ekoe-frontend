import { blogData } from "@/lib/data";
import RecentPosts from "./RecentPosts";
import ProductTags from "./ProductTags.jsx";
import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";

const productTags = [
  "bags",
  "fascinators",
  "dresses",
  "jumpsuits",
  "sandals",
  "shoes",
  "bracelets",
];

const BlogSidebar = () => {
  return (
    <aside className="fixed w-64 h-screen overflow-y-scroll">
      <ScrollArea className="w-full h-screen">
        <h2 className="font-semibold text-2xl tracking-wide">Search</h2>
        <div className="flex h-10 items-center space-x-2 md:mr-2">
          <Input type="text" className="max-w-[100%]" placeholder="search..." />
          <Button
            className="dark:bg-[#ff6700] bg-[#ff7a20] hover:bg-[#ff6700] px-2"
            variant="outline"
            size="icon"
          >
            <Search className="h-4 w-4 text-[#f5f5f5]" />
          </Button>
        </div>
        <div className="mt-6">
          <h2 className="font-semibold text-2xl mb-4 tracking-wide">
            Categories
          </h2>
          <ul className="flex flex-col gap-y-2">
            <li className="cursor-pointer">Fashion</li>
            <li className="cursor-pointer">Travel</li>
            <li className="cursor-pointer">Model</li>
            <li className="cursor-pointer">Picnic</li>
          </ul>
        </div>
        <div className="mt-6">
          <h2 className="font-semibold text-2xl mb-4 tracking-wide">
            Recent Posts
          </h2>
          <div className="flex gap-y-4 flex-col">
            {blogData.slice(0, 4).map((blog, index) => (
              <RecentPosts key={`recent-blog-${index}`} blog={blog} />
            ))}
          </div>
        </div>
        <div className="mt-6">
          <h2 className="font-semibold text-2xl mb-4 tracking-wide">
            Product Tags
          </h2>
          <ProductTags tags={productTags} />
        </div>
      </ScrollArea>
    </aside>
  );
};

export default BlogSidebar;
