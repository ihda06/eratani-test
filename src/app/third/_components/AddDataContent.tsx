import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/text-field/input";
import Button from "@/components/ui/button";
import { Users } from "../page";
// Sesuaikan path import DialogTitle

// Zod schema untuk validasi
const formSchema = z.object({
  first_name: z.string().nonempty("First Name is required"),
  last_name: z.string().nonempty("Last Name is required"),
  email: z.string().email("Invalid email format").nonempty("Email is required"),
  gender: z.string().nonempty("Gender is required"),
});

// Tipe otomatis dari Zod schema
export type FormInputs = z.infer<typeof formSchema>;

const AddDataContent = ({
  onSubmit,
  data,
}: {
  onSubmit: (data: FormInputs & { id?: number }) => void;
  data?: Users;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(formSchema),
    defaultValues: data,
  });

  const onValid: SubmitHandler<FormInputs> = (data) => {
    onSubmit(data);
    // Tambahkan logika setelah submit (misalnya kirim ke API)
  };

  return (
    <>
      <form onSubmit={handleSubmit(onValid)} className="py-5">
        <div className="flex flex-col gap-3">
          <div>
            <Input placeholder="First Name" {...register("first_name")} />
            {errors.first_name && (
              <span className="text-red-500">{errors.first_name.message}</span>
            )}
          </div>

          <div>
            <Input placeholder="Last Name" {...register("last_name")} />
            {errors.last_name && (
              <span className="text-red-500">{errors.last_name.message}</span>
            )}
          </div>

          <div>
            <Input type="email" placeholder="Email" {...register("email")} />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>

          <div>
            <Input placeholder="Gender" {...register("gender")} />
            {errors.gender && (
              <span className="text-red-500">{errors.gender.message}</span>
            )}
          </div>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </>
  );
};

export default AddDataContent;
