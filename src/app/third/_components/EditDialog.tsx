import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PencilIcon } from "lucide-react";
import { useState } from "react";
import AddDataContent, { FormInputs } from "./AddDataContent";
import { Users } from "../page";

export default function EditDialog({
  handleEdit,
  original,
}: {
  handleEdit: (data: FormInputs & { id?: number }) => void;
  original: Users;
}) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  return (
    <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
      <DialogTrigger>
        <PencilIcon className="size-3 cursor-pointer" />
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Edit Data</DialogTitle>
        {/* walawe */}
        <AddDataContent
          onSubmit={(val) => {
            handleEdit(val);
            setIsEditOpen(false);
          }}
          data={original}
        />
      </DialogContent>
    </Dialog>
  );
}
