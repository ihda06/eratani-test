"use client";
import FirstPageNav from "@/components/utils/FirstPageNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative ">
      <FirstPageNav />

      {children}
    </div>
  );
}
