"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "./style.css";
import Image from "next/image";

import { PaginationOptions } from "swiper/types";
import { Pagination } from "swiper/modules";

const content = [
  {
    title: "Slide 1",
    image: "https://swiperjs.com/demos/images/nature-1.jpg",
  },
  {
    title: "Slide 2",
    image: "https://swiperjs.com/demos/images/nature-2.jpg",
  },
  {
    title: "Slide 3",
    image: "https://swiperjs.com/demos/images/nature-2.jpg",
  },
  {
    title: "Slide 4",
    image: "https://swiperjs.com/demos/images/nature-2.jpg",
  },
];

export default function ImageCarousel() {
  return (
    <Swiper
      pagination={pagination}
      slidesPerView={1}
      modules={[Pagination]}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="relative first"
    >
      {content.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="relative md:h-[calc(100svh-80px)] h-svh flex justify-center items-center px-[100px]">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
            />
            <div className="text-white text-center z-40 block px-30">
              <h2 className="text-3xl font-bold">#SelaluAdaUntukPetani</h2>
              <p className="text-center text-xl">
                {
                  "Eratani adalah perusahaan startup Agri-tech yang fokus membangun sebuah ekosistem pertanian yang kuat dengan mendigitalisasi proses pertanian dari hulu hingga ke hilir. Eratani berupaya memberikan kemudahan akses kepada petani melalui teknologi yang kami miliki untuk meningkatkan produktivitas dan kesejahteraan ekosistem pertanian."
                }
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

const pagination: PaginationOptions = {
  clickable: true,
  renderBullet: function (index, className) {
    return '<span class="' + className + '">' + "</span>";
  },
};
