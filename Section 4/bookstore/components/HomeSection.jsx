"use client";

import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function HomeSection() {
  return (
    <div>
      {/* ----------------hero section-------------- */}
      <div className="px-20 bg-[#0b7c6b]">
        <div className="w-full flex justify-around items-center">
          <div className="">
            <div className="text-white">
              <li className="list-none font-semibold text-xl p-2">
                Special Offer
              </li>
              <div className="p-2">
                <li className="list-none font-bold text-4xl">
                  There is nothing
                </li>
                <li className="list-none font-bold text-4xl">
                  better than to read.
                </li>
              </div>
              <li className="list-none font-semibold p-2">
                Find the perfect gift for Every One list On Your List.
              </li>
            </div>
            <button className="px-5 py-2 rounded-full bg-white text-[#0b7c6b] font-bold m-2 cursor-pointer">
              Shop Now <ArrowForwardIosIcon style={{ fontSize: "15px" }} />
            </button>
          </div>
          <img src="/image/bg_right_.png" alt="" className="h-100" />
        </div>
      </div>
      <div className="mx-25">
        {/* ----------------Carosel start-------------- */}
        <div className="">
          <div className="mt-10 mb-5">
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={20}
              slidesPerView={5}
              // navigation
              pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                <div className=" rounded py-2 mb-10 px-3">
                  <img
                    src="/image/book1.jpeg"
                    alt=""
                    className="h-65 rounded"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" rounded py-2 my-1 px-3">
                  <img
                    src="/image/book2.jpeg"
                    alt=""
                    className="h-65 rounded"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" rounded py-2 my-1 px-3">
                  <img
                    src="/image/book3.jpeg"
                    alt=""
                    className="h-65 rounded"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" rounded py-2 my-1 px-3">
                  <img
                    src="/image/book4.jpeg"
                    alt=""
                    className="h-65 rounded"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" rounded py-2 my-1 px-3">
                  <img
                    src="/image/book5.jpeg"
                    alt=""
                    className="h-65 rounded"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" rounded py-2 my-1 px-3">
                  <img
                    src="/image/book6.1.jpeg"
                    alt=""
                    className="h-65 rounded"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" rounded py-2 my-1 px-3">
                  <img
                    src="/image/book7.jpeg"
                    alt=""
                    className="h-65 rounded"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" rounded py-2 my-1 px-3">
                  <img
                    src="/image/book8.jpeg"
                    alt=""
                    className="h-65 rounded"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        {/* ----------------discount section-------------- */}
        <div className="grid grid-cols-2 gap-5 px-3">
          <div className="flex  bg-[#090979] rounded-[20px]" style={{ }}>
            <div className="w-[70%] text-white py-5 px-5">
              <li className="list-none text-base font-bold uppercase">Summer Sale</li>
              <li className="list-none text-3xl font-bold py-1">
                Sales 55% Off
              </li>
              <button className="px-5 py-2 rounded-full bg-white my-2 py-1 text-black text-sm font-semibold cursor-pointer uppercase">
                Shop Now <ArrowForwardIosIcon style={{ fontSize: "13px",fontWeight:"bold" ,marginBottom:"4px" }}/>
              </button>
            </div>
            <img src="image/discount455.png" alt="" className="w-[40%] p-5 rounded"/>
          </div>
          <div className="flex bg-[#CCC] rounded-[20px] bg-gradient-to-tr" style={{ }}>
            <div className="w-[70%] text-black py-5 px-5">
              <li className="list-none text-base font-semibold uppercase">Novel every day!</li>
              <li className="list-none text-3xl font-bold py-1">
                Sales 45% Off
              </li>
              <button className="px-5 py-2 rounded-full bg-white my-2 py-1 text-black text-sm font-semibold cursor-pointer uppercase">
                Shop Now <ArrowForwardIosIcon style={{ fontSize: "13px",fontWeight:"bold" ,marginBottom:"4px" }}/>
              </button>
            </div>
            <img src="image/discount300.png" alt="" className="w-[40%] p-5 rounded"/>
          </div>
        </div>
        {/* ----------------Top vendor section-------------- */}
        <div>
          <div className="">
            <h3>Top selling vendor</h3>
            <a href="">view all products</a>
          </div>
       
          <div className="grid grid-cols-4 gap-5">
            <div className="shdow-2xl border rounded p-2">
              <div className="bg-red-100 grid grid-cols-2 gap-1">
                <div className="bg-black rounded py-2 my-1 px-3">
                  <img
                    src="/image/book1.jpeg"
                    alt=""
                    className="h-64 mx-auto rounded"
                  />
                </div>
                <div>
                  <div className="bg-black rounded py-2 my-1 px-3">
                    <img
                      src="/image/book2.jpeg"
                      alt=""
                      className="h-30 mx-auto rounded"
                    />
                  </div>
                  <div className="bg-black rounded py-2 my-1 px-3">
                    <img
                      src="/image/book3.jpeg"
                      alt=""
                      className="h-30 mx-auto rounded"
                    />
                  </div>
                </div>
              </div>
              <h3 className="text-center font-mono font-bold">
                Prabhat Prakasan
              </h3>
            </div>

          </div>
      
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
