"use client";
import FirstPageNav from "@/components/utils/FirstPageNav";
import Image from "next/image";
import { MobileMenuButton } from "./_components/MenuButton/MenuButton";
import useIsMobile from "@/hooks/useIsMobile";
import { AnimatePresence } from "framer-motion";
import useMenu from "@/providers/menu";
import { motion } from "framer-motion";
import cn from "../utils/clsx";

export default function Layout({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();
  const isOpen = useMenu((state) => state.isOpen);
  return (
    <div className="relative">
      <FirstPageNav />
      <header className="sticky z-40 top-0 w-full hidden md:grid grid-cols-[auto_1fr_auto] dark:bg-neutral-800 items-center p-5 bg-white shadow-md px-[2rem]">
        {/* Logo */}
        <Image src="/images/logo.png" alt="logo" width={100} height={100} />

        {/* Navigation Links */}
        <nav className="flex justify-center items-center gap-8">
          <a
            href="#home"
            className="text-gray-800 dark:text-white  font-medium text-base hover:text-secondary-400 duration-200"
          >
            Beranda
          </a>
          <a
            href="#about"
            className="text-gray-800 dark:text-white font-medium text-base hover:text-secondary-400 duration-200"
          >
            Tentang Kami
          </a>
          <a
            href="#news"
            className="text-gray-800 dark:text-white font-medium text-base hover:text-secondary-400 duration-200"
          >
            Tips & Berita Pertanian
          </a>
          <a
            href="#activities"
            className="text-gray-800 dark:text-white font-medium text-base hover:text-secondary-400 duration-200"
          >
            Kegiatan
          </a>
        </nav>

        {/* Mitra Petani Button */}
        <button className="bg-secondary-500 dark:bg-neutral-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-yellow-600 transition-colors">
          Mitra Petani
        </button>
      </header>
      <header className="fixed z-40 top-0 w-full flex justify-between p-5 backdrop-blur-sm px-[2rem] md:hidden">
        {/* Logo */}
        <Image src="/images/logo.png" alt="logo" width={100} height={100} />

        <MobileMenuButton />
      </header>
      {isMobile && (
        <AnimatePresence>{isOpen && <MobileMenu></MobileMenu>}</AnimatePresence>
      )}
      {children}
    </div>
  );
}

const ListMenu = [
  {
    title: "Beranda",
    link: "#home",
  },
  {
    title: "Tentang Kami",
    link: "#about",
  },
  {
    title: "Tips & Berita Pertanian",
    link: "#news",
  },
  {
    title: "Kegiatan",
    link: "#activities",
  },
];

const MobileMenu = () => {
  return (
    <motion.div
      className="sticky z-20 top-0 left-0 w-full h-screen bg-primary-600 dark:bg-neutral-800 text-white py-[80px] flex flex-col items-center justify-center gap-20 text-center"
      initial={{ y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <ul className="flex flex-col gap-4 text-lg">
        {ListMenu.map((item) => (
          <ItemLink
            key={item.title}
            link={item.link}
            title={item.title}
            active={item.title === "Beranda"}
          />
        ))}
      </ul>
      <button className="bg-secondary-600 dark:bg-neutral-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-yellow-600 transition-colors">
        Mitra Petani
      </button>
    </motion.div>
  );
};

const ItemLink = ({
  link,
  title,
  active = false,
}: {
  link: string;
  title: string;
  active?: boolean;
}) => {
  return (
    <a href={link}>
      <li
        className={cn(
          "cursor-pointer duration-200",
          active && "underline underline-offset-4 decoration-secondary-500",
          !active && "text-white/70 hover:text-white"
        )}
      >
        {title}
      </li>
    </a>
  );
};
