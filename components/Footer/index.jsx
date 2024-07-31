import Link from "next/link";
import EmailSubscription from "./EmailSubscription";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div className="w-full mt-8 py-4 md:py-10 border-t-[1px] border-neutral-100 dark:border-neutral-900">
      <div className="flex flex-col justify-between lg:flex-row ">
        <div>
          <h2 className="font-bold text-3xl tracking-wide">Ekoebrand</h2>
          <div className="mt-4 leading-8">
            <p>Address: 30178-100 Nairobi</p>
            <p>Phone: +254 704387700</p>
            <p>Email: ekoebrand@gmail.com</p>
          </div>
          <div className="flex gap-x-4 items-center mt-6">
            <Link
              href="https://www.facebook.com/slimkingdesigns"
              target="_blank"
              className="h-10 w-10 rounded-full bg-accent flex justify-center items-center cursor-pointer"
            >
              <Facebook className="h-6 w-6 text-[#ff7a20] dark:text-[#ff6700]" />
            </Link>
            <Link
              target="_blank"
              href="https://www.instagram.com/ekoe.ke/"
              className="h-10 w-10 rounded-full bg-accent flex justify-center items-center cursor-pointer"
            >
              <Instagram className="h-6 w-6 text-[#ff7a20] dark:text-[#ff6700]" />
            </Link>
            <Link
              target="_blank"
              href="https://twitter.com/ekoebrand"
              className="h-10 w-10 rounded-full bg-accent flex justify-center items-center cursor-pointer"
            >
              <Twitter className="h-6 w-6 text-[#ff7a20] dark:text-[#ff6700]" />
            </Link>
          </div>
        </div>
        <div className="hidden md:block">
          <h2 className="font-semibold text-lg tracking-wide">Information</h2>
          <div className="mt-4 leading-8 flex flex-col">
            <Link href="/about-us">About us</Link>
            <Link href="/contact">Contact us</Link>
            <Link href="/legal/privacies">Privacy Policies</Link>
            <Link href="/legal/terms-and-conditions">Terms &amp; Conditions</Link>
          </div>
        </div>
        <div className="hidden md:block">
          <h2 className="font-semibold text-lg tracking-wide">My Account</h2>
          <div className="mt-4 leading-8 flex flex-col">
            <Link href="/cart">Shopping cart</Link>
            <Link href="/account">My Account</Link>
          </div>
        </div>
        <div className="mt-8 md:mt-0">
          <h2 className="font-semibold text-lg tracking-wide">
            Join Our Newsletter
          </h2>
          <div className="mt-2 md:mt-4 leading-8">
            <p>
              Get E-mail updates about our latest products and special offers
            </p>
            <EmailSubscription />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
