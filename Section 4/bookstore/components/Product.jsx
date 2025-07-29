"use client";
import React, { useState } from "react";
import bookstoreData from "../utils/bookstoreData.js";
import Footer from "./Footer.jsx";

function Product() {
  const [data, setData] = useState(bookstoreData);
  return (
    <div>
      <div className="mx-10 p-5">
        <p className="text-2xl font-bold">Product</p>
        <div className="grid grid-cols-4 gap-5 my-5">
          {data.map((item, index) => {
            return (
              <div key={index} className="p-5 rounded shadow-2xl">
                {/* <div>{item.id}</div> */}
                <div>
                  <img
                    src={item.main_url}
                    alt={item.title}
                    className="w-50 h-75 mx-auto rounded-[15px]"
                  />
                </div>
                <div className="text-lg font-sans font-medium mt-2">
                  {item.title}
                </div>
                <div className="flex justify-between">
                  <div className="text-lg font-mono mt-2 text-semibold">
                    {"₹ "}
                    {item.price}
                  </div>
                  <button className="px-5 rounded  py-1 bg-blue-500 text-white">
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
