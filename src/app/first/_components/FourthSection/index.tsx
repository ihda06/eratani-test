"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "./style.css";
import Image from "next/image";

import { PaginationOptions } from "swiper/types";
import { Navigation, Pagination } from "swiper/modules";

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

export default function FourthSection() {
  return (
    <div className="lg:px-56 px-20 space-y-16 fourth">
      <h1 className="text-6xl font-bold text-primary-600 text-center leading-relaxed">
        Kata Mereka
      </h1>
      <Swiper
        navigation={true}
        pagination={pagination}
        slidesPerView={1}
        modules={[Pagination, Navigation]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {content.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col justify-center items-center bg-white dark:bg-neutral-800 md:h-[300px] h-[600px]">
              <div className="md:h-[300px] h-[600px] w-4/5 flex md:flex-row flex-col bg-gray-100 dark:bg-gray-700">
                <div className="relative md:h-[300px] h-[600px] md:w-[600px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex items-center justify-center p-16">
                  <div>
                    <div className="flex items-center gap-3">
                      <h2 className="text-3xl font-bold">Warsoni</h2>
                      <span className="w-0.5 bg-gray-300 h-5"></span>
                      <h2 className="">Warsoni</h2>
                    </div>
                    <p className="text-start text-lg">
                      {
                        "Harapan saya Eratani semakin meluas karena petani sangat amat dibantu dengan adanya Eratani. Terima kasih Eratani!"
                      }
                    </p>
                    <div className="mt-10 w-full flex justify-end">
                      <button className="px-3 py-1  bg-secondary-300 dark:text-secondary-800 rounded-lg">
                        Putar Video
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="grid grid-cols-[400px_1fr] px-[100px] bg-slate-300">
                <div className="relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center p-10">
                  <h2 className="text-3xl font-bold">#SelaluAdaUntukPetani</h2>
                  <p className="text-start text-xl">
                    {
                      "Eratani adalah perusahaan startup Agri-tech yang fokus membangun sebuah ekosistem pertanian yang kuat dengan mendigitalisasi proses pertanian dari hulu hingga ke hilir. Eratani berupaya memberikan kemudahan akses kepada petani melalui teknologi yang kami miliki untuk meningkatkan produktivitas dan kesejahteraan ekosistem pertanian."
                    }
                  </p>
                </div>
              </div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

const pagination: PaginationOptions = {
  clickable: true,
  renderBullet: function (index, className) {
    return '<span class="' + className + '">' + "</span>";
  },
};
