// RegisterForm.tsx
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField } from "@/components/ui/text-field";
import { ReactSelect } from "@/components/ui/react-select";
import Button from "@/components/ui/button";
import { axios } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { toast } from "react-toastify";
import Link from "next/link";

// Schema validation with Zod
const registerSchema = z.object({
  name: z.string({
    required_error: "Nama harus diisi",
  }),
  email: z
    .string({
      required_error: "Email harus diisi",
    })
    .email("Format email tidak valid."),
  gender: z.enum(["male", "female"], {
    errorMap: () => ({ message: "Pilih jenis kelamin" }),
  }),
  status: z.enum(["active", "inactive"], {
    errorMap: () => ({ message: "Pilih status" }),
  }),
});

// Type for form data
type RegisterFormData = z.infer<typeof registerSchema>;

const RegisterForm = () => {
  const { control, handleSubmit, resetField } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      gender: "female",
      status: "inactive",
    },
  });
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const { mutate: mutateCreate } = useMutation({
    mutationKey: ["users"],
    mutationFn: async (data: RegisterFormData) => {
      const res = await axios.post("/users", { ...data });

      return res.data;
    },
    onError: (error) => {
      if (isAxiosError<{ field: string; message: string }[]>(error)) {
        toast.error(error.response?.data[0].message);
      }
    },
    onSuccess: () => {
      setIsSubmitted(true);
      resetField("name");
      resetField("email");
      resetField("gender");
      resetField("status");
      toast.success("User created successfully", {});
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    mutateCreate(data);
  };

  return (
    <div className=" w-full px-20">
      <h1 className="text-2xl font-bold mb-4 text-center text-primary-500">
        Form Registrasi
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name Field */}
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              type="text"
              {...field}
              label="Nama"
              placeholder="Masukkan nama Anda"
              error={!!error}
              helperText={error?.message}
            />
          )}
        />

        {/* Email Field */}
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              type="email"
              {...field}
              label="Email"
              placeholder="Masukkan email Anda"
              error={!!error}
              helperText={error?.message}
            />
          )}
        />

        {/* Gender Field */}
        <Controller
          name="gender"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <ReactSelect
              //   value={{ value: field.value, label: field.value }}
              value={[
                { value: "male", label: "Laki-laki" },
                { value: "female", label: "Perempuan" },
              ].find((option) => option.value === field.value)}
              options={[
                { value: "male", label: "Laki-laki" },
                { value: "female", label: "Perempuan" },
              ]}
              label="Jenis Kelamin"
              error={!!error}
              helperText={error?.message}
              onChange={(option) => field.onChange(option?.value)}
            />
          )}
        />

        {/* Status Field */}
        <Controller
          name="status"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <ReactSelect
              value={[
                { value: "active", label: "Aktif" },
                { value: "inactive", label: "Tidak Aktif" },
              ].find((option) => option.value === field.value)}
              options={[
                { value: "active", label: "Aktif" },
                { value: "inactive", label: "Tidak Aktif" },
              ]}
              onChange={(option) => field.onChange(option?.value)}
              label="Status"
              error={!!error}
              helperText={error?.message}
            />
          )}
        />

        {/* Submit Button */}
        <Button type="submit" className="w-full">
          Daftar
        </Button>
      </form>
      {isSubmitted && (
        <div className="py-5">
          <Button
            className="w-full flex justify-center items-center"
            variant={"outline"}
            color={"gray"}
          >
            <Link href={"/fourth"}>Check the result</Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default RegisterForm;
