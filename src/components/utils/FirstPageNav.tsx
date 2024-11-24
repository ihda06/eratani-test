"use client";

import cn from "@/app/utils/clsx";
import Link from "next/link";
import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function FirstPageNav() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link
      href={"/"}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      className="fixed bottom-4 z-50 right-4 bg-primary-400 text-white py-2 px-4 rounded-full shadow-lg flex items-center cursor-pointer transition-all duration-300 ease-in-out hover:w-auto hover:px-6 hover:bg-primary-500"
    >
      <FaArrowUp className="text-lg transition-transform duration-300 ease-in-out hover:text-xl" />
      <span
        className={cn(
          "ml-2 transition-opacity duration-300 ease-in-out",
          isHovered ? "block" : "hidden"
        )}
      >
        Back to first page
      </span>
    </Link>
  );
}
