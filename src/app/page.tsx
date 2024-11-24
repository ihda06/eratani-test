import Image from "next/image";

import ThemeToggle from "./_components/ThemeToggle";
import Card from "./_components/Card";
const questions = [
  {
    title: "1. Design UI dengan ReactJS",
    link: "/first",
  },
  {
    title: "2. Implementasi Algoritma Search",
    link: "/second",
  },
  {
    title: "3. Buat Single Page Application",
    link: "/third",
  },
  {
    title: "4. Akses API dan Tampilkan dalam Table",
    link: "/fourth",
  },
  {
    title: "5. Tampilan Register User",
    link: "/fifth",
  },
];

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0E9749] dark:from-[#065B2E] dark:to-[#996600] to-[#FFCC00] pointer-events-none -z-10" />
      <ThemeToggle />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen py-8 px-8 xl:px-80 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-2 row-start-2 items-center sm:items-start ">
          <div className="bg-white/80 dark:bg-black/60 p-8 rounded-lg w-full">
            <h1 className="text-4xl font-bold dark:text-white">Hi, Welcome!</h1>
            <h2>
              Kalau ada bug di aplikasi ini, anggap saja itu fitur rahasia yang
              butuh eksplorasi lebih lanjut. 👀🐛
            </h2>
          </div>
          <div className="grid xl:grid-cols-5 lg:grid-cols-3 grid-cols-1 w-full gap-3">
            {questions.map((question) => (
              <Card
                key={question.title}
                title={question.title}
                link={question.link}
              />
            ))}
          </div>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <div className="mt-10 text-center text-sm">
            Made with ❤ by Ihda Anwari
          </div>
        </footer>
      </div>
    </div>
  );
}
