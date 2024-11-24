import ImageCarousel from "../_components/ImageCarousel/ImageCarousel";
import FifthSection from "./_components/FifthSection";
import FooterSection from "./_components/FooterSection";
import FourthSection from "./_components/FourthSection";
import SecondSection from "./_components/SecondSection";
import SixthSection from "./_components/SixthSection";
import ThirdSection from "./_components/ThirdSection";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Eratani - Beranda",
};

export default function Page() {
  return (
    <div className="md:pt-[80] dark:bg-neutral-800 space-y-16">
      <ImageCarousel />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <FooterSection />
    </div>
  );
}
