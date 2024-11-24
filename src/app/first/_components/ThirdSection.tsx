import Capital from "@/components/icons/capital";

import People from "@/components/icons/people";

import React from "react";

export default function ThirdSection() {
  return (
    <div className="lg:px-56 px-20 gap-9 flex flex-col justify-center">
      <h1 className="text-6xl font-bold text-primary-600 text-center leading-relaxed">
        Peduli Petani Bersama EraTani
      </h1>

      <div className="flex flex-col gap-20 bg-gray-100 dark:bg-gray-700 py-10 items-start justify-center px-12 lg:px-32 h-full">
        <Box
          title="Pembiayaan"
          description="Eratani menyalurkan dukungan dan edukasi finansial berbasis teknologi bagi para petani yang mengalami kesulitan permodalan untuk meningkatkan produktivitas pertanian."
          icon={<People className="size-24" />}
        />
        <Box
          title="Manajemen Rantai Pasok"
          description="Eratani memfasilitasi akses kebutuhan petani melalui mitra penyedia sarana kebutuhan di bidang pertanian secara transparan dan terstandarisasi."
          icon={<Capital className="size-24" />}
        />
        <Box
          title="Distribusi & Penjualan"
          description="Eratani memfasilitasi petani untuk menjual dan mendistribusikan hasil panen secara langsung dan mudah dengan harga yang terstandarisasi."
          icon={<Capital className="size-24" />}
        />
      </div>
    </div>
  );
}

function Box({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="grid grid-cols-[100px_1fr] gap-20 w-full">
      <div className="flex justify-center items-center">{icon}</div>
      <div className="text-start flex flex-col gap-3">
        <h4 className="text-primary-600 font-bold text-4xl">{title}</h4>
        <p className="">{description}</p>
      </div>
    </div>
  );
}
