"use client";
import { useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import api from "../../api/apiUrl";

function SingleProduct() {
  const [singleBookData, setSingleBookData] = useState(null);
  // const [singleBooksData, setSingleBooksData] = useState(singleBookData);

  const [loading, setLoading] = useState(true);

  const params = useSearchParams();
  const product_id = params.get("id");
  console.log(product_id, "productID");

  useEffect(() => {
    if (product_id) {
      fetchBookData();
    }
  }, [product_id]);

  const fetchBookData = async () => {
    try {
      setLoading(true);
      const res = await api.get(`/api/single-product/${product_id}`);
      console.log(res);
      const singleBook = res?.data;
      console.log("singleBook", singleBook);
      setSingleBookData(singleBook);
    } catch (error) {
      console.log("error occured :", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="flex justify-center px-4 py-8 bg-gray-100 min-h-screen">
          <div className="w-full max-w-5xl bg-white shadow-2xl rounded-xl overflow-hidden">
            <div className="bg-green-600 text-white text-center py-4 text-2xl font-bold">
              {singleBookData?.title}
            </div>

            <div className="flex flex-col md:flex-row gap-6 p-6">
              <div className="flex flex-col items-center md:w-1/2 gap-4">
                <img
                  src={singleBookData?.upload_image}
                  alt={singleBookData?.title}
                  className="w-full max-w-xs aspect-[2/3] rounded-md shadow"
                />

                <div className="flex justify-center gap-4">
                  <button className="px-5 cursor-pointer py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-all duration-200">
                    Delete Book
                  </button>
                  <button className="px-5 py-2 cursor-pointer bg-yellow-400 text-white rounded-md hover:bg-yellow-600 transition-all duration-200">
                    Update Book
                  </button>
                </div>
                <div className="text-left">
                  <div>
                    <span className="font-semibold">Author:</span>
                    {singleBookData?.author_name}
                  </div>
                  <div>
                    <span className="font-semibold">Rating:</span> {"⭐".repeat(singleBookData?.rating)}
                   
                  </div>
                  <div>
                    <span className="font-semibold">Price:</span>
                    <del className="text-green-500 mr-2">
                      ₹{singleBookData?.price}
                    </del>
                    <span className="text-green-600 font-bold">
                      ₹{singleBookData?.discounted_price}
                    </span>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2 space-y-3 text-gray-800">
                <div>
                  <span className="font-semibold">Publication:</span>
                  {singleBookData?.publication}
                </div>
                <div>
                  <span className="font-semibold">Published Date:</span>
                  {singleBookData?.date_of_published}
                </div>
                <div>
                  <span className="font-semibold">Description:</span>
                  {singleBookData?.description}
                </div>
                <div>
                  <span className="font-semibold">Summary:</span>{" "}
                  {singleBookData?.summary}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function SingleProductPage() {
  return (
    <Suspense>
      <SingleProduct />
    </Suspense>
  );
}
