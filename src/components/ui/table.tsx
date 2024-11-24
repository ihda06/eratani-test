"use client";

import { useMemo } from "react";
import {
  flexRender,
  getCoreRowModel,
  TableOptions,
  useReactTable,
} from "@tanstack/react-table";
import Skeleton from "./skeleton";
import cn from "@/app/utils/clsx";
import Show from "../utils/Show";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface CustomTableProps<T extends { id: any }>
  extends Omit<TableOptions<T>, "data" | "getCoreRowModel"> {
  data: T[] | undefined;
  scrollable?: boolean;
  loading?: boolean;
  classNames?: {
    wrapper?: string;
    table?: string;
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function CustomTable<T extends { id: any }>({
  data: dataProp,
  loading,
  columns,
  enableRowSelection = false,
  scrollable = true,
  classNames,
  ...tableOptions
}: CustomTableProps<T>) {
  const memoizedData = useMemo(
    () => dataProp || Array(10).fill({}),
    [dataProp]
  );

  const tableColumns = useMemo(
    () =>
      loading
        ? columns.map((column) => ({
            ...column,
            cell: () => <Skeleton />,
          }))
        : columns,
    [loading, columns]
  );

  const table = useReactTable({
    data: memoizedData,
    columns: tableColumns,
    getCoreRowModel: getCoreRowModel(),
    enableRowSelection,
    getRowId: (row) => row.id,
    ...tableOptions,
  });

  return (
    <div
      className={cn(
        scrollable && "overflow-scroll",
        classNames?.wrapper,
        "w-full grow basis-0"
      )}
    >
      <table className={cn("w-full table-fixed", classNames?.table)}>
        <thead
          className={"sticky top-0 z-10 border-y border-y-gray-200 bg-gray-50"}
        >
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className={
                    "px-5 py-3 text-left text-sm font-medium uppercase tracking-wide text-gray-500 "
                  }
                  style={{
                    width: header.getSize(),
                  }}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody
          className={"divide-y divide-gray-200 border-b border-b-gray-200"}
        >
          <Show
            when={table.getRowModel().rows.length > 0}
            fallback={
              <tr>
                <td colSpan={table.getAllColumns().length} className={"p-0"}>
                  <div className="flex h-[159px] items-center justify-center">
                    <h1 className={"text-lg text-gray-500 "}>
                      No results found
                    </h1>
                  </div>
                </td>
              </tr>
            }
          >
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className={cn(
                  row.getIsSelected() && "bg-gray-50",
                  "hover:bg-gray-50 dark:hover:bg-neutral-600"
                )}
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className={cn(
                      "truncate px-5 py-3 text-sm text-gray-700 dark:text-white 2xl:text-base",
                      cell.column.id === "action" && "text-center"
                    )}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </Show>
        </tbody>
      </table>
    </div>
  );
}
