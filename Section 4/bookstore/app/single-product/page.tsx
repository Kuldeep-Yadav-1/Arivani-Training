"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import api from "../../api/apiUrl";

function SingleProduct() {
  const [singleBookData, setSingleBookData] = useState(null);
  const [loading, setLoading] = useState(true);

  const params = useSearchParams();
  const productId = params.get("id");

  useEffect(() => {
    const fetchBookData = async () => {
      if (!productId) return;

      try {
        const response = await api.get(`/api/single-product/${productId}`);
        setSingleBookData(response.data); // Use response.data.result if API returns that structure
      } catch (err) {
        console.error("Error fetching book:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBookData();
  }, [productId]);

  // Loading state
  if (loading) {
    return <div className="text-center mt-10 text-xl">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">{singleBookData.title}</h1>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <img
            src={singleBookData.upload_image}
            alt={singleBookData.title}
            className="w-100 h-auto rounded shadow-md "
          />

          <p>
            <strong>Rating:</strong> {"⭐".repeat(singleBookData.rating)}
          </p>
          <p>
            <strong>Price:</strong>
            <span className="line-through">₹{singleBookData.price}</span>
            <span className="text-green-600 font-bold">
              ₹{singleBookData.discounted_price}
            </span>
          </p>
          <p>
            <strong>Author:</strong> {singleBookData.author_name}
          </p>
          <p>
            <strong>Publication:</strong> {singleBookData.publication}
          </p>
          <p>
            <strong>Published:</strong>
            {new Date(singleBookData.date_of_published).toDateString()}
          </p>
          <p>
            <strong>Pages:</strong> {singleBookData.total_pages}
          </p>
          <p>
            <strong>Language:</strong> {singleBookData.language}
          </p>
          <p>
            <strong>Availability:</strong> {singleBookData.availablility}
          </p>
        </div>

        <div className="space-y-2">
          <p className="mt-4">
            <strong>Description:</strong> {singleBookData.description}
          </p>
          <p className="mt-2">
            <strong>Summary:</strong> {singleBookData.summary}
          </p>
        </div>
      </div>
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
