"use client";

import { useQuery } from "@tanstack/react-query";

import { createColumnHelper } from "@tanstack/react-table";

import { useMemo, useState } from "react";
import { axios } from "@/lib/axios";
import { AxiosResponse } from "axios";
import CustomTable from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { formatCapitalize } from "../utils/formatter";
import Pagination from "@/components/ui/pagination";
import { Input } from "@/components/ui/text-field/input";
import { useDebounceValue } from "usehooks-ts";

const columnHelper = createColumnHelper<User>();
export default function ThirdPage() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  //   const [keyword, setKeyword] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useDebounceValue("", 500);

  const { data, isLoading } = useQuery<AxiosResponse<User[]>>({
    queryKey: ["users", page, limit, debouncedSearch],
    queryFn: async () => {
      return await axios.get("/users", {
        params: {
          page: page || 1,
          per_page: limit || 10,
          name: debouncedSearch || "",
        },
      });
    },
  });

  const count = useMemo(() => {
    return data?.headers["x-pagination-pages"];
  }, [data]);

  const columns = useMemo(
    () => [
      columnHelper.accessor("name", {
        cell: (info) => {
          return info.getValue();
          //   return formatCapitalize(info.getValue());
        },
        header: () => "Name",
      }),
      columnHelper.accessor("email", {
        cell: (info) => info.getValue(),
        header: () => "Email",
      }),
      columnHelper.accessor("gender", {
        cell: (info) => {
          return (
            <Badge
              variant={info.getValue() === "male" ? "default" : "secondary"}
            >
              {formatCapitalize(info.getValue() ?? "")}
            </Badge>
          );
        },
        header: () => "Gender",
      }),
      columnHelper.accessor("status", {
        cell: (info) => {
          return <Badge>{formatCapitalize(info.getValue() ?? "")}</Badge>;
        },
        header: () => "Status",
      }),
    ],
    []
  );

  return (
    <div className="flex flex-col p-20 gap-3">
      <div className="flex justify-center text-5xl font-bold text-primary-500 items-center">
        Get users
      </div>
      <div className="flex justify-between items-center">
        <Input
          onChange={(e) => setDebouncedSearch(e.target.value)}
          className="w-72"
          placeholder="Search by name..."
        />
      </div>
      <div className="rounded-lg border border-gray-200 shadow-sm">
        <CustomTable loading={isLoading} data={data?.data} columns={columns} />
        <Pagination
          page={page}
          setPage={setPage}
          limit={limit}
          setLimit={setLimit}
          totalPage={count}
        />
      </div>
    </div>
  );
}
