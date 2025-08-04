"use client";
import React, { useState } from "react";
import bookstoreData from "../utils/bookstoreData.js";
import Footer from "./Footer.jsx";

function Product() {
  const [data, setData] = useState(bookstoreData);
  return (
    <div>
      <div className="mx-6 md:mx-10 md:mx-12 ">
        <p className="text-2xl font-semi-bold">Product</p>
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
                <div className="font-sans font-medium mt-2 mb-1">
                  {item.title}
                </div>
                <div className="flex justify-between">
                  <div className="text-lg font-mono mt-2 text-semibold">
                    {"₹ "}
                    {item.price}
                  </div>
                  <button className="px-5 rounded  py-1 bg-green-500 hover:bg-green-600 text-white cursor-pointer">
                    Add To Card
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
