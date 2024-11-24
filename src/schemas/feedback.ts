import { z } from "zod";

export const feedbackSchema = z.object({
    name: z.string({required_error: "Nama lengkap wajib diisi."}),
    email: z
      .string({required_error: "Email wajib diisi."})
      .email("Format email tidak valid."),
    phone: z
      .string({required_error: "Nomor handphone wajib diisi."})
      .regex(/^\\d{10,15}$/, "Nomor handphone tidak valid."),
    message: z.string({required_error: "Pesan wajib diisi."}),
  });
  
  export type FeedbackFormValues = z.infer<typeof feedbackSchema>;