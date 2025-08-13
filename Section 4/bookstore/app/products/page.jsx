"use client";

import React, { useState, useEffect } from "react";
import api from "../../api/apiUrl";
import { ArrowForwardIos } from "@mui/icons-material";
import Footer from "../../components/Footer";

function Page() {
  const [bookData, setBookData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        const res = await api.get("/api/get-all-book-data");
        const updatedData = res.data.result.map((book) => ({
          ...book,
          quantity: 1,
        }));
        setBookData(updatedData);
      } catch (error) {
        console.error("Error fetching book data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBookData();
  }, []);

  const handleIncrement = (index) => {
    const updatedBooks = [...bookData];
    updatedBooks[index].quantity += 1;
    setBookData(updatedBooks);
  };

  const handleDecrement = (index) => {
    const updatedBooks = [...bookData];
    if (updatedBooks[index].quantity > 1) {
      updatedBooks[index].quantity -= 1;
      setBookData(updatedBooks);
    }
  };

  return (
    <div>
      <div className="mx-6 md:mx-10 lg:mx-12 py-4">
        <div className="flex justify-between text-[#0b7c6b]">
          <p className="text-2xl font-semibold">Product</p>
          <p className="text-lg font-semibold cursor-pointer">
            view all
            <ArrowForwardIos
              style={{ fontSize: "14px", paddingBottom: "2px" }}
            />
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {loading ? (
            <p>Loading books...</p>
          ) : bookData.length > 0 ? (
            bookData.map((book, index) => (
              <div
                key={index}
                className="px-5 pt-5 pb-2 shadow-2xl rounded-[10px]"
              >
                <img
                  src={book.upload_image}
                  alt={book.title}
                  style={{ width: 225, height: 325 }}
                  className="mx-auto rounded mb-2"
                />
                <h2 className="font-semibold">{book.title}</h2>
                <p className="text-sm">{book.author_name}</p>
                <p>
                  <span>{book.rating}⭐</span>
                  <span className="font-semibold text-sm mx-2">
                    {book.language}
                  </span>
                </p>

                <div className="flex justify-between items-center mt-2">
                  <span>
                    <span className="font-bold">
                      ₹{book.discounted_price * book.quantity}
                    </span>
                    <del className="ms-2 font-thin">
                      ₹{book.price * book.quantity}
                    </del>
                  </span>

                  <div className="flex items-center space-x-2">
                    <button
                      className="font-bold text-xl bg-green-500 hover:bg-green-400 text-white px-3 py-1 rounded"
                      onClick={() => handleDecrement(index)}
                    >
                      -
                    </button>
                    <span className="px-3">{book.quantity}</span>
                    <button
                      className="font-bold text-xl bg-green-500 hover:bg-green-400 text-white px-3 py-1 rounded"
                      onClick={() => handleIncrement(index)}
                    >
                      +
                    </button>
                  </div>
                </div>

                <p className="text-sm py-2">{book.description}</p>
              </div>
            ))
          ) : (
            <p>No books found.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
