import FirstPageNav from "@/components/utils/FirstPageNav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simple CRUD - Third Page",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative ">
      <FirstPageNav />

      {children}
    </div>
  );
}
