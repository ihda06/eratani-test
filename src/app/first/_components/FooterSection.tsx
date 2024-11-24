"use client";

import React from "react";
import { BiGlobe } from "react-icons/bi";
import {
  BsInstagram,
  BsLinkedin,
  BsTiktok,
  BsWhatsapp,
  BsYoutube,
} from "react-icons/bs";

const FooterSection = () => {
  return (
    <footer className="bg-primary-500 text-white py-10 px-10">
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="">
          <h2 className="text-xl font-bold mb-4">Eratani</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {/* Kiri: Informasi Perusahaan */}
            <div className="mb-6 md:mb-0">
              <p>
                Jl. Casablanca Raya Kav 88, Kel. Menteng Dalam, Kec. Tebet,
                Gedung Pakuwon Tower Lt 26 Unit J, Jakarta Selatan, DKI Jakarta
                12870, Indonesia
              </p>
              <p className="mt-4">Email : info.eratani@eratani.co.id</p>
              <p>Telepon : +62 811 952 2577</p>
            </div>

            {/* Kanan: Menu */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Menu</h3>
              <ul>
                <li className="mb-2 hover:underline cursor-pointer">
                  Tim Kami
                </li>
                <li className="mb-2 hover:underline cursor-pointer">
                  Mitra Eratani
                </li>
                <li className="mb-2 hover:underline cursor-pointer">
                  Tips & Berita Pertanian
                </li>
                <li className="hover:underline cursor-pointer">Karir</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex py-10 justify-center h-4/5 items-center gap-6">
            <BiGlobe size={30} />
            <h3 className="text-2xl underline underline-offset-4 decoration-secondary-500">
              IN
            </h3>
            <h3 className="text-2xl">EN</h3>
          </div>
          <div className="flex gap-5 h-1/5">
            <BsTiktok size={20} />
            <BsInstagram size={20} />
            <BsLinkedin size={20} />
            <BsYoutube size={20} />
            <BsWhatsapp size={20} />
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="mt-10 text-center text-sm">
        Copyright © 2021 by PT Eratani Teknologi Nusantara
      </div>
    </footer>
  );
};

export default FooterSection;
