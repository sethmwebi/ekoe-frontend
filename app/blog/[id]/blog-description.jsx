import { BsDash } from "react-icons/bs";
import { FaQuoteLeft } from "react-icons/fa";

const BlogDescription = ({ blog }) => {
  return (
    <div>
      <p className="text-foreground first-letter:text-4xl leading-6 lg:leading-8 text-base md:text-lg tracking-wide">
        {blog.description.para1}
      </p>
      <div className="flex h-20 my-6 lg:my-10 items-center">
        <span className="w-[4px] h-full bg-[#ff6700] mr-6" />
        <div className="flex gap-x-2 text-xl font-medium lg:text-2xl">
          <FaQuoteLeft size={20} />
          <blockquote>
            {blog.quote.text}
            <footer className="flex items-center text-base font-light text-foreground tracking-wide">
              <BsDash /> {blog.quote.author}
            </footer>
          </blockquote>
        </div>
      </div>
      {Object.values(blog.description)
        .slice(1)
        .map((blogItem, index) => (
          <p
            key={`blog-item-${index}`}
            className="text-foreground mb-4 lg:mb-8 not-last:mb-0 leading-6 lg:leading-8 text-base md:text-lg tracking-wide"
          >
            {blogItem}
          </p>
        ))}
    </div>
  );
};

export default BlogDescription;
