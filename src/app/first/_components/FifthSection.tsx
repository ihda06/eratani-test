import Image from "next/image";

import React from "react";

export default function FifthSection() {
  return (
    <div className="lg:px-56 px-20 gap-9 flex flex-col justify-center">
      <h1 className="text-6xl text-primary-600 text-center font-bold leading-relaxed">
        Mitra Kami
      </h1>

      <div className="grid grid-cols-3 gap-3 w-full">
        <div className="relative aspect-square w-full h-full">
          <Image
            src={"/images/BULOG.png"}
            alt="mitra"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative aspect-square w-full h-full">
          <Image
            src={"/images/PI-Pangan.png"}
            alt="mitra"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative aspect-square w-full h-full">
          <Image
            src={"/images/MDBT.png"}
            alt="mitra"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
