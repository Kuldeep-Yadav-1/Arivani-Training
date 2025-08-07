"use client";
import React, { useState } from "react";
import bookstoreData from "../utils/bookstoreData.js";
import Footer from "./Footer.jsx";
import { ArrowForwardIos } from "@mui/icons-material";
import { useRouter } from "next/navigation.js";

function Product() {
  const router = useRouter();
  const [data, setData] = useState(bookstoreData);
  return (
    <div>
      <div className="mx-6 md:mx-10 lg:mx-12">
        <div className="flex justify-between text-[#0b7c6b]">
          <p className="text-2xl font-semi-bold">Product</p>
          <p className="text-lg font-semi-bold cursor-pointer">
            view all{" "}
            <ArrowForwardIos
              style={{ fontSize: "14px", paddingBottom: "2px" }}
            />{" "}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5">
          {data.map((item, index) => {
            return (
              <div key={index} className="p-5 rounded shadow-2xl">
                {/* <div>{item.id}</div> */}
                <div>
                  <img
                    src={item.main_url}
                    alt={item.title}
                    className="w-50 h-70 mx-auto rounded-[15px]"
                  />
                </div>
                <div className="font-sans font-medium lg:text-sm mt-2 mb-1">
                  {item.title}
                </div>
                <div className="flex justify-between">
                  <div className="text-lg font-mono mt-2 lg:text-sm text-semibold">
                    {"₹ "}
                    {item.price}
                  </div>
                  <button
                    className="px-5 rounded pt-2 pb-1 bg-[#0b7c6b] hover:bg-green-500 lg:text-sm text-white cursor-pointer"
                    onClick={() => router.push("/cart")}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Product;
