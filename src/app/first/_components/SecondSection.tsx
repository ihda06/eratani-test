import Capital from "@/components/icons/capital";
import Diagram from "@/components/icons/diagram";
import Efficiency from "@/components/icons/efficiancy";
import Grass from "@/components/icons/grass";
import People from "@/components/icons/people";

import React from "react";

export default function SecondSection() {
  return (
    <div className="lg:px-56 px-20 px-20 flex flex-col justify-center">
      <h1 className="text-6xl font-bold text-primary-600 text-center leading-relaxed">
        Menuju Ekosistem yang Lebih Kuat Bersama Eratani
      </h1>
      <div className="flex flex-col gap-36">
        <div className="grid grid-cols-[1fr_1fr]">
          <Box
            title="500+"
            description="Petani Binaan"
            icon={<People className="size-36" />}
          />
          <Box
            title="> Rp 5 Miliar"
            description="Pendanaan yang telah tersalurkan"
            icon={<Capital className="size-36" />}
          />
        </div>
        <div className="grid grid-cols-[1fr_1fr_1fr]">
          <Box
            title="> 15%"
            description="Peningkatan pendapatan"
            icon={<Diagram className="size-36" />}
          />
          <Box
            title="750 Ha +"
            description="Luas wilayah binaan"
            icon={<Grass className="size-36" />}
          />
          <Box
            title="> 20%"
            description="Peningkatan produktivitas"
            icon={<Efficiency className="size-36" />}
          />
        </div>
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
    <div className="flex flex-col items-center justify-center gap-20">
      {icon}
      <div className="text-center ">
        <h4 className="text-primary-600 font-bold text-4xl">{title}</h4>
        <p className="text-secondary-500">{description}</p>
      </div>
    </div>
  );
}
