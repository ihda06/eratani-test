"use client";

import Image from "next/image";
import RegisterForm from "./_components/register-form";

export default function ThirdPage() {
  return (
    <div className="flex h-screen bg-primary-500">
      <div className="md:flex flex-col hidden justify-center text-5xl font-bold text-primary-500 items-center w-7/12">
        <div className="w-1/2 h-auto">
          <Image
            src="/images/logo-white.png"
            alt="logo"
            width={500}
            height={500}
          ></Image>
        </div>
        <h3 className="text-white font-bold text-3xl">#SelaluAdaUntukPetani</h3>
      </div>
      <div className="flex justify-between items-center md:w-5/12 w-screen h-screen bg-white">
        <RegisterForm />
      </div>
    </div>
  );
}
