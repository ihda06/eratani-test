"use client";

import useMenu from "@/providers/menu";
import "./style.css";
import cn from "@/app/utils/clsx";

export const MobileMenuButton = () => {
  const toggleMenu = useMenu((state) => state.toggleOpen);
  const expandMenu = useMenu((state) => state.isOpen);
  const menuSpanData = [{ index: 1 }, { index: 2 }, { index: 3 }];

  const expandMenuClick = () => {
    toggleMenu();
  };

  return (
    <div
      className="flex lg:hidden mobile-button-wrapper"
      onClick={() => expandMenuClick()}
    >
      {menuSpanData.map((item) => (
        <span
          key={item.index}
          className={cn(
            "bg-primary-700 dark:bg-neutral-100 ",
            expandMenu ? "active bg-white" : ""
          )}
        />
      ))}
    </div>
  );
};
