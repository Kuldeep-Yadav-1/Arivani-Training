"use client";

import React from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function HeroSection() {
  return (
    <div className="">

      {/* --------------- Section -1 hero section----------------- */}

      <div className="relative font-sans">
        <img
          src="/image/hero_third.jpg"
          className="h-128 w-[100%]  bg-blend-multiply"
          alt="Bookstore Logo"
        />
        <div className="absolute top-[18%] left-[10%]">
          <div className=" rounded p-5">
            <div className="pt-5 text-black">
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
            <button className="px-5 py-2 rounded-full bg-black text-white m-2 cursor-pointer">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      <div className="mx-20">
        {/* ------------------section -2- carosel section---------------- */}
        <div className="mt-10 mb-5">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={5}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <div className="bg-black rounded py-2 my-1 px-3">
                <img
                  src="/image/book1.jpeg"
                  alt=""
                  className="h-65 mx-auto rounded"
                />
                <h3 className="text-center pt-1 text-white text-bold font-mono">
                  <i>To The Bright Edge</i>
                </h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-black rounded py-2 my-1 px-3">
                <img
                  src="/image/book2.jpeg"
                  alt=""
                  className="h-65 mx-auto rounded"
                />
                <h3 className="text-center pt-1 text-white text-bold font-mono">
                  <i>To The Bright Edge</i>
                </h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-black rounded py-2 my-1 px-3">
                <img
                  src="/image/book3.jpeg"
                  alt=""
                  className="h-65 mx-auto rounded"
                />
                <h3 className="text-center pt-1 text-white text-bold font-mono">
                  <i>To The Bright Edge</i>
                </h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-black rounded py-2 my-1 px-3">
                <img
                  src="/image/book4.jpeg"
                  alt=""
                  className="h-65 mx-auto rounded"
                />
                <h3 className="text-center pt-1 text-white text-bold font-mono">
                  <i>To The Bright Edge</i>
                </h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-black rounded py-2 my-1 px-3">
                <img
                  src="/image/book5.jpeg"
                  alt=""
                  className="h-65 mx-auto rounded"
                />
                <h3 className="text-center pt-1 text-white text-bold font-mono">
                  <i>To The Bright Edge</i>
                </h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-black rounded py-2 my-1 px-3">
                <img
                  src="/image/book6.1.jpeg"
                  alt=""
                  className="h-65 mx-auto rounded"
                />
                <h3 className="text-center pt-1 text-white text-bold font-mono">
                  <i>To The Bright Edge</i>
                </h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-black rounded py-2 my-1 px-3">
                <img
                  src="/image/book7.jpeg"
                  alt=""
                  className="h-65 mx-auto rounded"
                />
                <h3 className="text-center pt-1 text-white text-bold font-mono">
                  <i>To The Bright Edge</i>
                </h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-black rounded py-2 my-1 px-3">
                <img
                  src="/image/book8.jpeg"
                  alt=""
                  className="h-65 mx-auto rounded"
                />
                <h3 className="text-center pt-1 text-white text-bold font-mono">
                  <i>To The Bright Edge</i>
                </h3>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* <div className="w-full flex top-[55%] relative my-10">
        <button className="h-10 w-10 cursor-pointer rounded-full bg-black text-bold text-2xl text-white absolute top-[45%] left-[3%]">
          &lt;
        </button>
        <div className="mx-auto">
          <div className="grid grid-cols-5 gap-5 py-5">
            <div className="bg-black rounded py-2 my-1 px-3">
              <img
                src="/image/book1.jpeg"
                alt=""
                className="h-65 mx-auto rounded"
              />
              <h3 className="text-center pt-1 text-white text-bold font-mono">
                <i>Lossing The Plot</i>
              </h3>
            </div>
            <div className="bg-black rounded py-2 my-1 px-3">
              <img
                src="/image/book2.jpeg"
                alt=""
                className="h-65 mx-auto rounded"
              />
              <h3 className="text-center pt-1 text-white text-bold font-mono">
                <i>Best Novels</i>
              </h3>
            </div>
            <div className="bg-black rounded py-2 my-1 px-3">
              <img
                src="/image/book3.jpeg"
                alt=""
                className="h-65 mx-auto rounded"
              />
              <h3 className="text-center pt-1 text-white text-bold font-mono">
                <i>Sherlock Holems</i>
              </h3>
            </div>
            <div className="bg-black rounded py-2 my-1 px-3">
              <img
                src="/image/book4.jpeg"
                alt=""
                className="h-65 mx-auto rounded"
              />
              <h3 className="text-center pt-1 text-white text-bold font-mono">
                <i>Targted Love</i>
              </h3>
            </div>
            <div className="bg-black rounded py-2 my-1 px-3">
              <img
                src="/image/book5.jpeg"
                alt=""
                className="h-65 mx-auto rounded"
              />
              <h3 className="text-center pt-1 text-white text-bold font-mono">
                <i>To The Bright Edge</i>
              </h3>
            </div>
          </div>
        </div>
        <button className="h-10 w-10 rounded-full bg-black text-bold text-2xl text-white absolute top-[45%] right-[3%] cursor-pointer">
          &gt;
        </button>
      </div> */}

        {/* ------------------section-3- discounted section---------------- */}

        <div className="grid grid-cols-2 gap-10 py-4 my-5">
          <div className="bg-black text-white w-[95%] h-70 grid grid-cols-2 p-4 rounded relative ms-auto">
            <div className="pt-6 px-5">
              <li className="list-none text-xl font-bold ">Summer Sale</li>
              <li className="list-none text-3xl font-bold py-1">
                Sales 55% Off
              </li>
              <button className="px-5 py-1 rounded-full bg-white my-2 py-1 text-black cursor-pointer">
                Shop Now
              </button>
            </div>
            <img
              src="image/discount455.png"
              className="w-[35%] absolute top-4 right-3 "
            />
          </div>
          <div className="bg-gray-200 text-white  w-[95%] h-70 grid grid-cols-2 p-4 rounded relative me-auto">
            <div className="pt-6 px-5">
              <li className="list-none text-black text-xl font-bold ">
                Daily Sale
              </li>
              <li className="list-none text-black text-3xl font-bold py-1">
                Sales 35% Off
              </li>
              <button className="px-5 py-1 rounded-full bg-black py-1 my-2 cursor-pointer">
                Shop Now
              </button>
            </div>
            <img
              src="image/discount300.png"
              className="w-[35%] absolute top-5 right-3"
            />
          </div>
        </div>

        {/* ------------------section-4- Top selling vendor---------------- */}

        <div className="px-26">
          <div className="grid grid-cols-4 gap-5 ">
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

        {/* ------------------section-5- discounted section---------------- */}

        {/* <div className="w-full p-5 relative my-5">
        <img
          src="/image/discounted_background.jpg"
          alt=""
          className="h-85 w-[85%] mx-auto opacity-50"
        />
        <div className="absolute top-[25%] right-[16%] text-white">
          <li className="list-none text-xm font-medium uppercase font-mono">
            Our Biggest Sale
          </li>
          <li className="list-none text-3xl font-bold font-sans">
            Only in ₹200 Best Books
          </li>
          <li className="list-none text-xm font-mono">
            Available only for this month
          </li>
          <button className="px-5 py-2 bg-black text-white rounded-full cursor-pointer mt-2">
            Shop Now
          </button>
        </div>
      </div> */}

        {/* ------------------section-4- Top selling vendor---------------- */}

        {/* <div className="px-26">
        <div className="grid grid-cols-2 gap-2">
          <div className="h-20 bg-red-200 grid grid-cols-2 gap-4">
            <div className="grid grid-cols-1 gap-2">
              <div className="flex justify-end items-center p-1 shadow-2xl">
                <img src="/image/book1.jpeg" alt="" className="h-30 w-[40%]"/>
                <div className="mx-2 text-xm py-5 w-[40%]">
                  <li className="list-none font-bold font-mono">prabha pub.</li>
                  <li className="list-none">jp gupta</li>
                  <li className="list-none">⭐⭐⭐</li>
                </div>
              </div>
              <div className="flex justify-end items-center p-1 shadow-2xl">
                <img src="/image/book1.jpeg" alt="" className="h-30 w-[40%]"/>
                <div className="mx-2 text-xm py-5 w-[40%]">
                  <li className="list-none font-bold font-mono">prabha pub.</li>
                  <li className="list-none">jp gupta</li>
                  <li className="list-none">⭐⭐⭐</li>
                </div>
              </div>
              <div className="flex justify-end items-center p-1 shadow-2xl">
                <img src="/image/book1.jpeg" alt="" className="h-30 w-[40%]"/>
                <div className="mx-2 text-xm py-5 w-[40%]">
                  <li className="list-none font-bold font-mono">prabha pub.</li>
                  <li className="list-none">jp gupta</li>
                  <li className="list-none">⭐⭐⭐</li>
                </div>
              </div>
              <div className="flex justify-end items-center p-1 shadow-2xl">
                <img src="/image/book1.jpeg" alt="" className="h-30 w-[20%]"/>
                <div className="mx-2 text-xm py-5 w-[40%]">
                  <li className="list-none font-bold">prabha pub.</li>
                  <li className="list-none">jp gupta</li>
                  <li className="list-none">⭐⭐⭐</li>
                </div>
              </div>
            </div>
            <div>
              <img src="/image/book5.jpeg" alt="" className="h-100" />
              <li className="list-none">prabha prakashan</li>
              <li className="list-none">jp gupta</li>
            </div>
          </div>

          <div className="h-20 bg-blue-500 grid grid-cols-2 gap-2">
            <div className="grid grid-cols-1">
              <div className="grid grid-cols-2 gap-1">
                <img src="/image/book6.1.jpeg" alt="" className="h-30" />
                <div>
                  <li className="list-none">prabha prakashan</li>
                  <li className="list-none">jp gupta</li>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-1">
                <img src="/image/book7.jpeg" alt="" className="h-30" />
                <div>
                  <li className="list-none">prabha prakashan</li>
                  <li className="list-none">jp gupta</li>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-1">
                <img src="/image/book8.jpeg" alt="" className="h-30" />
                <div>
                  <li className="list-none">prabha prakashan</li>
                  <li className="list-none">jp gupta</li>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-1">
                <img src="/image/book11.jpeg" alt="" className="h-30" />
                <div>
                  <li className="list-none">prabha prakashan</li>
                  <li className="list-none">jp gupta</li>
                </div>
              </div>
            </div>
            <div>
              <img src="/image/book10.jpeg" alt="" className="h-90" />
              <li className="list-none">prabha prakashan</li>
              <li className="list-none">jp gupta</li>
            </div>
          </div>
        </div>
      </div> */}
      </div>
    </div>
  );
}

export default HeroSection;
