import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { ReactSelect } from "./react-select";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import cn from "@/app/utils/clsx";

export default function Pagination({
  page,
  totalPage,
  limit,
  setLimit,
  setPage,
}: {
  page: number;
  totalPage: number;
  limit: number;
  setLimit: (limit: number) => void;
  setPage: (page: number) => void;
}) {
  const generatePages = () => {
    if (totalPage <= 5) {
      return Array.from({ length: totalPage }, (_, i) => i + 1);
    }

    if (page <= 3) {
      return [1, 2, 3, 4, 5];
    }

    if (page > totalPage - 3) {
      return [
        totalPage - 4,
        totalPage - 3,
        totalPage - 2,
        totalPage - 1,
        totalPage,
      ];
    }

    return [page - 2, page - 1, page, page + 1, page + 2];
  };
  const pages = generatePages();

  const Options = [
    { value: "10", label: "10" },
    { value: "20", label: "20" },
    { value: "50", label: "50" },
  ];

  return (
    <div className="flex justify-between transition-all duration-300 p-6">
      <ReactSelect
        options={Options}
        value={Options.find((o) => o.value === String(limit))}
        onChange={(e) => {
          setLimit(Number(e?.value));
        }}
        menuPlacement="top"
      ></ReactSelect>
      <div className="flex items-center text-sm text-center overflow-hidden">
        <button
          className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-black dark:hover:border cursor-pointer disabled:cursor-not-allowed"
          disabled={page === 1}
          onClick={() => setPage(page > 1 ? page - 1 : 1)}
        >
          <ChevronLeftIcon className="w-5 h-5" />
        </button>
        {totalPage > 5 && page > 3 && (
          <button
            className={cn(
              "w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-md",
              page === 1 &&
                " bg-gray-100 dark:border dark:bg-black dark:border-white  border"
            )}
            onClick={() => setPage(1)}
          >
            1
          </button>
        )}
        {totalPage > 5 && page > 4 && (
          <div className="w-8 h-8 flex items-center justify-center">...</div>
        )}
        {pages.map((p) => (
          <button
            key={p}
            className={`w-8 h-8 flex items-center justify-center cursor-pointer rounded-md dark:hover:bg-black dark:hover:border hover:bg-gray-100 ${
              page === p &&
              "bg-gray-100 dark:border dark:bg-black dark:border-white dark:hover:bg-black dark:hover:border"
            }`}
            onClick={() => setPage(p)}
          >
            {p}
          </button>
        ))}
        {totalPage > 5 && page < totalPage - 3 && (
          <div className="w-8 h-8 flex items-center justify-center">...</div>
        )}
        {totalPage > 5 && page < totalPage - 2 && (
          <button
            className={cn(
              "w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-md dark:hover:bg-black dark:hover:border",
              page === totalPage &&
                "bg-gray-100 dark:border dark:bg-black dark:border-white  dark:hover:bg-black dark:hover:border"
            )}
            onClick={() => setPage(totalPage)}
          >
            {totalPage}
          </button>
        )}
        <button
          className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 cursor-pointer disabled:cursor-not-allowed"
          onClick={() => setPage(page < totalPage ? page + 1 : totalPage)}
          disabled={page === totalPage}
        >
          <ChevronRightIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
