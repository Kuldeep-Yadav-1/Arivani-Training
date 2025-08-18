"use client";
import React, { useState } from "react";
import bookstoreData from "../utils/bookstoreData.js";

// import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useRouter } from "next/navigation";
import Footer from "./Footer.jsx";

function HomeSection() {
  const router = useRouter();
  const [data, setData] = useState(bookstoreData);
  const handleDiscounttwinty = () => {
    router.push("/products");
    const filtered = bookstoreData.filter((item) => {
      return item.discounted_price <= item.price * 0.8;
    });
    setData(filtered);
    console.log(filtered);

    // console.log(bookstoreData);
  };

  const handleFourtyFive = () => {
    router.push("/products");
    const filtered = bookstoreData.filter((item) => {
      return item.discounted_price <= item.price * 0.55;
    });
    setData(filtered);
    console.log(filtered);
    // console.log(bookstoreData);
  };
  const handleShopTwoHundred = () => {
    router.push("/products");
    const filtered = bookstoreData.filter((item) => {
      return item.discounted_price <= item.price * 0.55;
    });
    setData(filtered);
    console.log(filtered);
    // console.log(bookstoreData);
  };
  return (
    <div>
      {/* ----------------hero section-------------- */}
      <div className="px-6 md:px-10 lg:px-12 bg-[#0b7c6b] ">
        <div className="w-full flex flex-col-reverse md:flex-row lg:flex-row justify-between items-center">
          <div className="text-center md:text-left  py-5   md:py-auto">
            <div className="text-white md:py-auto">
              <li className="list-none font-semibol text-lg md:text-lg lg:text-xl p-1 lg:p-2">
                Special Offer
              </li>
              <div className="p-1 lg:p-2">
                <li className="list-none font-bold text-xl md:text-xl lg:text-3xl">
                  There is nothing
                </li>
                <li className="list-none font-bold text-xl md:text-xl lg:text-3xl">
                  better than to read.
                </li>
              </div>
              <li className="list-none lg:font-semibold p-1 lg:p-2">
                Find the perfect gift for Every One list On Your List.
              </li>
            </div>
            <button
              className="px-5 py-2 rounded-full bg-white text-[#0b7c6b] font-bold m-2 cursor-pointer"
              onClick={() => router.push("/products")}
            >
              Shop Now <ArrowForwardIosIcon style={{ fontSize: "15px" }} />
            </button>
          </div>
          <img
            src="/image/bg_right_.png"
            alt=""
            className="px-auto w-[100%] md:w-[65%] lg:w-[50%]"
          />
        </div>
      </div>
      <div className="mx-6 md:mx-10 lg:mx-12">
        {/* ----------------Carosel start-------------- */}
        <div className="">
          <div className="mt-10 mb-5">
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              // spaceBetween={20}
              breakpoints={{
                320: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1280: {
                  slidesPerView: 5,
                  spaceBetween: 40,
                },
              }}
              // className=""
              // navigation
              pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <div className="rounded py-2 flex">
                {data
                  .filter((item) => item.id >= 1 && item.id <= 10)
                  .map((item, index) => {
                    return (
                      <SwiperSlide>
                        <div key={index} className="rounded mb-10">
                          <div>
                            <img
                              src={item.main_url}
                              alt={item.title}
                              className="h-65 w-50 rounded-[15px] shadow-2xl"
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
              </div>
            </Swiper>
          </div>
        </div>
        {/* ----------------discount section-------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
          <div className="flex  bg-[#090979] rounded-[20px]">
            <div className="w-[70%] text-white py-5 px-5">
              <li className="list-none text-base font-bold uppercase">
                Summer Sale
              </li>
              <li className="list-none text-3xl font-bold py-1">
                Sales 20% Off
              </li>
              <button
                className="px-5 py-2 rounded-full bg-white my-2 py-1 text-black text-xs md:text-sm font-semibold cursor-pointer uppercase"
                onClick={handleDiscounttwinty}
              >
                Shop Now
                <ArrowForwardIosIcon
                  style={{
                    fontSize: "13px",
                    fontWeight: "bold",
                    marginBottom: "4px",
                  }}
                />
              </button>
            </div>
            <img
              src="image/discount455.png"
              alt=""
              className="w-[40%] p-5 rounded"
            />
          </div>
          <div className="flex bg-[#CCC] rounded-[20px] bg-gradient-to-tr">
            <div className="w-[70%] text-black py-5 px-5">
              <li className="list-none text-base font-semibold uppercase">
                Novel every day!
              </li>
              <li className="list-none text-3xl font-bold py-1">
                Sales 45% Off
              </li>
              <button
                className="px-5 py-2 rounded-full bg-white my-2 py-1 text-black text-xs md:text-sm font-semibold cursor-pointer uppercase"
                onClick={handleFourtyFive}
              >
                Shop Now
                <ArrowForwardIosIcon
                  style={{
                    fontSize: "13px",
                    fontWeight: "bold",
                    marginBottom: "4px",
                  }}
                />
              </button>
            </div>
            <img
              src="image/discount300.png"
              alt=""
              className="w-[40%] p-5 rounded"
            />
          </div>
        </div>
        {/* ----------------Top vendor section-------------- */}
        <div className="my-10">
          <div className="flex justify-between w-full py-1">
            <p className="text-lg font-semibold">Top selling vendor</p>
            <a href="" className="text-base ">
              view all products
              <ArrowForwardIosIcon style={{ fontSize: "12px" }} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="shadow-2xl p-2 rounded-[15px]">
              <div className="rounded grid grid-cols-2 gap-2">
                {data
                  .filter((item) => item.publication == "Prabhat Prakashan")
                  .map((item, index) => {
                    return (
                      <div key={index} className="rounded">
                        <div>
                          <img
                            src={item.main_url}
                            alt={item.title}
                            className="h-35 w-50 rounded-[15px] shadow-2xl"
                          />
                        </div>
                      </div>
                    );
                  })}
              </div>
              <h3 className="text-center font-mono font-bold mt-2">
                Prabhat Prakasan
              </h3>
            </div>
            <div className="shadow-2xl p-2 rounded-[15px]">
              <div className="rounded grid grid-cols-2 gap-2">
                {data
                  .filter((item) => item.publication == "Pratham Books")
                  .map((item, index) => {
                    return (
                      <div key={index} className="rounded">
                        <div>
                          <img
                            src={item.main_url}
                            alt={item.title}
                            className="h-35 w-50 rounded-[15px] shadow-2xl"
                          />
                        </div>
                      </div>
                    );
                  })}
              </div>
              <h3 className="text-center font-mono font-bold mt-2">
                Pratham Books
              </h3>
            </div>
            <div className="shadow-2xl p-2 rounded-[15px]">
              <div className="rounded grid grid-cols-2 gap-2">
                {data
                  .filter((item) => item.publication == "Geeta Press Gorakhpur")
                  .map((item, index) => {
                    return (
                      <div key={index} className="rounded">
                        <div>
                          <img
                            src={item.main_url}
                            alt={item.title}
                            className="h-35 w-50 rounded-[15px] shadow-2xl"
                          />
                        </div>
                      </div>
                    );
                  })}
              </div>
              <h3 className="text-center font-mono font-bold mt-2">
                Geeta Press Gorakhpur
              </h3>
            </div>
            <div className="shadow-2xl p-2 rounded-[15px]">
              <div className="rounded grid grid-cols-2 gap-2">
                {data
                  .filter((item) => item.publication == "Pustak Mahal")
                  .map((item, index) => {
                    return (
                      <div key={index} className="rounded">
                        <div>
                          <img
                            src={item.main_url}
                            alt={item.title}
                            className="h-35 w-50 rounded-[15px] shadow-2xl"
                          />
                        </div>
                      </div>
                    );
                  })}
              </div>
              <h3 className="text-center font-mono font-bold mt-2">
                Pustak Mahal
              </h3>
            </div>
          </div>
        </div>

        {/* ------------------section-5- discounted section---------------- */}

        <div className="w-full my-10 bg-[#0b7c6b] grid grid-cols-1 md:grid-cols-2 gap-5 rounded-[20px]">
          <img src="/image/discounted_background_1.png" alt="" className="" />
          <div className="text-white py-10 my-auto mx-auto">
            <li className="list-none text-sm md:font-medium uppercase font-mono">
              Our Biggest Sale
            </li>
            <li className="list-none text-xl md:text-2xl lg:text-3xl font-bold font-sans">
              Only in ₹200 Best Books
            </li>
            <li className="list-none text-sm font-mono">
              Available only for this month
            </li>
            <button
              className="px-5 py-2 bg-white text-[#0b7c6b] rounded-full cursor-pointer mt-2 uppercase font-semibold"
              onClick={handleShopTwoHundred}
            >
              Shop Now
              <ArrowForwardIosIcon
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  marginBottom: "4px",
                }}
              />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomeSection;
