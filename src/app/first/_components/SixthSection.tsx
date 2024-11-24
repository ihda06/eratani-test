"use client";
import { TextField } from "@/components/ui/text-field";

import { TextArea } from "@/components/ui/text-field/text-area";
import { FeedbackFormValues, feedbackSchema } from "@/schemas/feedback";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { FaWhatsapp } from "react-icons/fa";

export default function SixthSection() {
  return (
    <div className="lg:px-56 px-20 gap-9 flex flex-col justify-center">
      <h1 className="text-6xl font-bold text-primary-600 text-center leading-relaxed">
        Ingin Menjadi Bagian Kami?
      </h1>
      <h1 className="text-5xl text-center leading-relaxed">
        Bersama kami membangun pertanian Indonesia karena Eratani{" "}
        <span className="bg-secondary-300 p-2">#SelaluAdaUntukPetani</span>
      </h1>
      <div className="flex flex-wrap justify-center">
        <button className="text-lg bg-primary-600 flex p-3 items-center justify-center gap-2 rounded-lg text-white">
          <FaWhatsapp size={20} />
          <span>Hubungi Kami</span>
        </button>
      </div>
      <div className="py-12 flex flex-col lg:flex-row items-center lg:gap-0 gap-7 ">
        <div className="lg:w-7/12 w-full lg:h-full h-[400px] flex justify-center">
          <div className="relative w-[400px] h-[400px]">
            <Image
              src={"/images/maps.png"}
              alt="maps"
              fill
              className="object-contain"
            />
            <div className="w-full flex justify-center absolute bottom-0 pb-9 ">
              <button
                type="submit"
                className="bg-yellow-500 text-white font-semibold py-2 rounded hover:bg-yellow-600 transition duration-300 w-[282px]"
              >
                Lokasi
              </button>
            </div>
          </div>
        </div>
        <div className="lg:w-5/12 w-full">
          <FeedbackForm />
        </div>
      </div>
    </div>
  );
}

const FeedbackForm = () => {
  const { control, handleSubmit } = useForm<FeedbackFormValues>({
    resolver: zodResolver(feedbackSchema),
  });

  const onSubmit: SubmitHandler<FeedbackFormValues> = (data) => {
    console.log("Data yang dikirim:", data);
    // Tambahkan logika pengiriman data di sini (misalnya ke API)
  };

  return (
    <div className="max-w-md mx-auto bg-gray-100 border border-gray-300 p-6 rounded-lg shadow-lg">
      <h2 className="text-center text-xl font-semibold text-gray-800 mb-4">
        Kritik & Saran
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit, (error) => console.log(error))}
        className="flex flex-col space-y-4"
      >
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              type="text"
              {...field}
              placeholder="Nama Lengkap"
              error={!!error}
              helperText={error?.message}
            />
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              type="email"
              {...field}
              placeholder="Email"
              error={!!error}
              helperText={error?.message}
            />
          )}
        />

        <Controller
          name="phone"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              type="text"
              {...field}
              placeholder="Nomor Handphone"
              error={!!error}
              helperText={error?.message}
            />
          )}
        />

        <Controller
          name="message"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextArea
              {...field}
              placeholder="Pesan"
              error={!!error}
              helperText={error?.message}
            />
          )}
        />

        <button
          type="submit"
          className="bg-yellow-500 text-white font-semibold py-2 rounded hover:bg-yellow-600 transition duration-300"
        >
          Kirim Pesan
        </button>
      </form>
    </div>
  );
};
