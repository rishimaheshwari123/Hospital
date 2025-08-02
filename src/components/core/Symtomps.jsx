"use client";
import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import sy1 from "@/assets/sy1.webp";
import sy2 from "@/assets/sy2.webp";
import sy3 from "@/assets/sy3.webp";
import sy4 from "@/assets/sy4.webp";
import sy5 from "@/assets/sy5.webp";
import sy6 from "@/assets/sy6.webp";
import sy7 from "@/assets/sy7.webp";
import Hypertension from "@/assets/Hypertension.jpg";
import Atrial from "@/assets/Atrial.jpg";
import CoronaryArteryDisease from "@/assets/CoronaryArteryDisease.jpg";
import CongestiveHeartFailure from "@/assets/CongestiveHeartFailure.jpg";
import Syncope from "@/assets/Syncope.jpg";
import Cardiomyopathy from "@/assets/Cardiomyopathy.jpg";
import Amyloidosis from "@/assets/Amyloidosis.jpg";
import tachycardia from "@/assets/tachycardia.png";
import bradycardia from "@/assets/bradycardia.png";
import Image from "next/image";

const work = [
  { id: 1, image: sy1, teg: "Non-Healing Wounds" },
  { id: 2, image: sy2, teg: "Ulcers" },
  { id: 3, image: sy3, teg: "Shortness of Breath" },
  { id: 4, image: sy4, teg: "Fatigue" },
  { id: 5, image: sy5, teg: "Heart Palpitations" },
  { id: 6, image: sy6, teg: "Skin Discoloration" },
  { id: 7, image: sy7, teg: "Purple Streaks on Legs" },
  { id: 8, image: Hypertension, teg: "Hypertension" },
  { id: 9, image: Atrial, teg: "Atrial Fibrillation" },
  { id: 10, image: CoronaryArteryDisease, teg: "Coronary Artery Disease" },
  { id: 188, image: CongestiveHeartFailure, teg: "Congestive Heart Failure" },
  { id: 11, image: Syncope, teg: "Syncope" },
  { id: 12, image: Cardiomyopathy, teg: "Cardiomyopathy" },
  { id: 13, image: Amyloidosis, teg: "Amyloidosis" },
  { id: 14, image: tachycardia, teg: "Tachycardia" },
  { id: 15, image: bradycardia, teg: "Bradycardia" },
];

const Symtomps = () => {
  return (
    <div className="py-28 bg-[#f0fffe]">
      <div className="text-center">
        <p className="uppercase text-xl text-[#00a0aa] font-bold">
          Conditions we treat:
        </p>
        <br />
        <p className="text-4xl lg:text-5xl font-bold lg:leading-tight">
          Expertise in the <br />
          <span className=" inline-block">Following Symptoms</span>
        </p>
      </div>
      <br />
      <div className="max-w-7xl mx-auto px-5">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          autoplay={{ delay: 2000 }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 5, spaceBetween: 40 },
          }}
        >
          {work.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col items-center p-5 mt-8 bg-white rounded-xl shadow-md">
                <Image
                  src={item.image}
                  alt={item.teg}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <p className="mt-3 text-center font-semibold">{item.teg}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Symtomps;
