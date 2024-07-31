"use client";
import { AlignRight, Search, ShoppingBasket, X } from "lucide-react";
import Image from "next/image";
import { ThemeToggle } from "../Common/ThemeToggle";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="w-full flex z-[100] h-[44px] rounded-b-sm fixed right-0 left-0 top-0 px-2 xl:px-0 backdrop-blur-lg border-b-[1px] border-neutral-100 dark:border-neutral-900">
      <div className="max-w-5xl w-full flex justify-between items-center mx-auto ">
        <Link href="/" className="flex gap-2 items-center">
          <span className="block relative h-8 w-8 bg-accent rounded-full">
            <Image src={"/logo.png"} alt="" className="object-contain" fill />
          </span>
          <span>Ekoebrand</span>
        </Link>

        {/*  desktop navigation */}
        <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
          <ul className="flex items-center gap-4 list-none">
            <li>
              <Link href="/store">store</Link>
            </li>
            <li>
              <Link href="/products?item=clothing">clothing</Link>
            </li>
            <li>
              <Link href="/products?item=bags">bags</Link>
            </li>
            <li>
              <Link href="/products?item=accessories">accessories</Link>
            </li>
            <li>
              <Link href="/blog">blog</Link>
            </li>
          </ul>
        </nav>

        {/* icons */}
        <aside className="flex items-center gap-4">
          <Search className="h-4 w-4 cursor-pointer" />
          <Link href="/cart">
            <ShoppingBasket className="h-4 w-4 cursor-pointer" />
          </Link>

          <ThemeToggle />
          <div
            className="md:hidden z-50"
            onClick={() => setShowMenu((prev) => !prev)}
          >
            {showMenu ? (
              <X className="text-[#f5f5f5] h-6 w-6 cursor-pointer" />
            ) : (
              <AlignRight className="h-6 w-6 cursor-pointer" />
            )}
          </div>
        </aside>

        {/*  mobile navigation */}
        {showMenu && <MobileMenu />}
      </div>
    </header>
  );
};

export default Navbar;
