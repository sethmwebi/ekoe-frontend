"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { name: "Home", to: "/" },
  { name: "Store", to: "/store" },
  { name: "Clothing", to: "/clothing" },
  { name: "Bags", to: "/bags" },
  { name: "Blog", to: "/blog" },
  { name: "Login", to: "/login" },
];

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  closed: { opacity: 0 },
  open: { opacity: 1 },
};

const MobileMenu = () => {
  return (
    <motion.div className="text-white font-normal h-[100vh] fixed bg-black/20 top-0 right-0 bottom-0 left-0">
      <AnimatePresence>
        <motion.aside
          initial={{ width: "-100%" }}
          animate={{ width: "60%" }}
          exit={{ width: "-100%" }}
          className="fixed right-0 flex items-center justify-center h-[100vh] bg-black/80 "
        >
          <motion.ul
            initial="closed"
            animate="open"
            exit="closed"
            variants={sideVariants}
            className="w-full items-center flex flex-col gap-4"
          >
            {links.map(({ name, to }, idx) => (
              <motion.li
                className="last:border px-4 w-fit border-[#ff7a20] dark:border-[#ff6700] rounded-lg"
                variants={itemVariants}
                key={`mobile-menu-${idx}`}
              >
                <Link href={to}>{name}</Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.aside>
      </AnimatePresence>
    </motion.div>
  );
};

export default MobileMenu;
