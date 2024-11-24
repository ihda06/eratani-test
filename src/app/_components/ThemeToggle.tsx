"use client";

import Show from "@/components/utils/Show";
import { useTheme } from "next-themes";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <div
      className="absolute top-6 right-6 hover:bg-white/35 cursor-pointer rounded-full p-2 duration-200"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Show
        when={theme === "dark"}
        fallback={<HiOutlineMoon className="size-6 text-white" />}
      >
        <HiOutlineSun className="size-6 text-white" />
      </Show>
    </div>
  );
}
