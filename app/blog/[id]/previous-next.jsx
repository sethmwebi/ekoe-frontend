import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const PreviousNext = ({ direction, blog }) => {
  return (
    <Link
      href={`/blog/${blog.id}`}
      className={`flex gap-4 items-center cursor-pointer ${
        direction === "next" && "flex-row-reverse flex-end"
      }`}
    >
      {direction === "next" ? (
        <AiOutlineArrowRight
          size={32}
          className="cursor-pointer text-foreground"
        />
      ) : (
        <AiOutlineArrowLeft
          size={32}
          className="cursor-pointer text-foreground"
        />
      )}
      <div className="!h-20 !w-20 rounded-full overflow-hidden relative">
        <Image
          src={blog.image_link}
          alt={blog.title}
          className="object-cover"
          fill
        />
      </div>
      <div className={`w-3/5 sm:w-1/2 ${direction === "next" && "text-right"}`}>
        <p className="text-foreground tracking-wider text-sm">
          {direction === "next" ? "Next Post:" : "Previous Post:"}
        </p>
        <p className="font-bold text-lg tracking-wider">{blog.title}</p>
      </div>
    </Link>
  );
};

export default PreviousNext;
