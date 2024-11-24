import Link from "next/link";

export default function Card({ title, link }: { title: string; link: string }) {
  return (
    <Link
      href={link}
      className="w-full bg-white/80 dark:bg-black/60 rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 active:translate-y-1 hover:shadow-[0_10px_10px_rgba(0,0,0,0.25)] flex justify-center items-center active:shadow-none duration-200"
    >
      <h3 className="font-bold text-center text-lg cursor-pointer">{title}</h3>
    </Link>
  );
}
