"use client";

import Button from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import CustomTable from "@/components/ui/table";
import { Input } from "@/components/ui/text-field/input";
import { DataSample } from "@/const/DataSample";

import { createColumnHelper } from "@tanstack/react-table";
import { Trash2Icon } from "lucide-react";
import { useCallback, useMemo, useState } from "react";
import AddDataContent, { FormInputs } from "./_components/AddDataContent";
import EditDialog from "./_components/EditDialog";

export interface Users {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
}

const columnHelper = createColumnHelper<Users>();
export default function ThirdPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<Users[]>(DataSample);
  const [selected, setSelected] = useState<{ value: string; label: string }[]>(
    []
  );
  const handleSubmit = useCallback(
    (newData: FormInputs) => {
      const newrecord: Users = { ...newData, id: data.length + 1 };
      setData([...data, newrecord]);
      setIsOpen(false);
    },
    [data]
  );

  const handleEdit = useCallback(
    (edit: FormInputs, id: number) => {
      const edited = { ...edit, id };
      setData(data.map((item) => (item.id === id ? edited : item)));
    },
    [data]
  );

  const handleDelete = useCallback(
    (id: number) => {
      setData(data.filter((item) => item.id !== id));
    },
    [data]
  );

  const columns = useMemo(
    () => [
      columnHelper.accessor("first_name", {
        cell: (info) => info.getValue(),
        header: () => "First Name",
      }),
      columnHelper.accessor("last_name", {
        cell: (info) => info.getValue(),
        header: () => "Last Name",
      }),
      columnHelper.accessor("email", {
        cell: (info) => info.getValue(),
        header: () => "Email",
      }),
      columnHelper.accessor("gender", {
        cell: (info) => info.getValue(),
        header: () => "Gender",
      }),
      columnHelper.display({
        id: "actions",
        size: 60,
        cell: ({ row: { original } }) => (
          <div className="flex  gap-3">
            <Dialog>
              <DialogTrigger>
                <Trash2Icon className="size-3 text-red-500 cursor-pointer " />
              </DialogTrigger>
              <DialogContent>
                <DialogTitle>Delete Data</DialogTitle>
                <p>Are you sure you want to delete this data?</p>
                <Button
                  onClick={() => {
                    handleDelete(original.id);
                  }}
                >
                  Delete
                </Button>
              </DialogContent>
            </Dialog>
            <EditDialog
              handleEdit={(val) => {
                handleEdit(val, original.id);
              }}
              original={original}
            />
          </div>
        ),
        header: () => "Actions",
        enableSorting: false,
        enableHiding: false,
      }),
    ],
    [handleDelete, handleEdit]
  );

  const SearchData = useMemo(() => {
    return data.filter((item) =>
      selected.some((v) => v.value === item.id.toString())
    );
  }, [data, selected]);

  return (
    <div className="flex flex-col p-20 gap-9">
      <div className="flex justify-between items-center">
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button>+ Add Data</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Add Data</DialogTitle>
            <AddDataContent onSubmit={handleSubmit} />
          </DialogContent>
        </Dialog>
      </div>
      <div className="rounded-lg border border-gray-200 shadow-sm">
        <CustomTable
          data={SearchData.length > 0 ? SearchData : data}
          columns={columns}
        />
      </div>
    </div>
  );
}
