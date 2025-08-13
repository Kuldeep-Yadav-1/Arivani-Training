"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../lib/fontawesome";
import Footer from "../../components/Footer.jsx";

const AboutUs = () => {
  return (
    <div className="bg-white text-[#0b7c6b]">
      <div className="px-6 md:px-10 lg:px-12 py-10">
        {/* Section 1: history*/}
        <div className="flex flex-col-reverse md:flex-row gap-10 mb-20 items-center">
          <div className="flex-1 space-y-6">
            <div>
              <h2 className="text-4xl font-bold mb-2">Our Story</h2>
              <p className="text-[#0b7c6b]/80 leading-relaxed">
                Founded in 2025, our bookstore app was born from a passion for
                stories and the joy of reading. We aim to bring readers and
                writers together through a seamless digital experience.
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-2">Our Vision</h2>
              <p className="text-[#0b7c6b]/80 leading-relaxed">
                To be the go-to online platform where literature thrives and
                readers discover their next favorite book.
              </p>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="./image/aboutUsR.jpg"
              alt="Bookstore"
              className="w-full h-auto rounded-xl shadow-2xl"
            />
          </div>
        </div>

        {/* Section 2: Statistics & data */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 text-center">
          {[
            { label: "Active Users", value: "150K+" },
            { label: "Monthly Products", value: "20K+" },
            { label: "Active Customers", value: "10K+" },
            { label: "Annual Gross Sale", value: " ₹2M+" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#0b7c6b] cursor-pointer text-white p-6 rounded-lg shadow-md hover:scale-105 transition duration-300"
            >
              <h3 className="text-3xl font-bold">{item.value}</h3>
              <p className="text-sm mt-1 font-medium">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Section 3: Author Cards, Quates,Icons */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-4 lg:gap-8 mb-10">
          {[
            {
              name: "A.P.J. Abdul Kalam",
              quote:
                "Books are the mirrors of the soul.A book is the best friend, a mother, the purest and the most devoted one.",
              image: "./image/drKalam1.png",
            },
            {
              name: "Rabindranath Tagore",
              quote:
                "The highest education is that which does not merely give us information but makes our life in harmony with all existence.",
              image: "./image/tagore.png",
            },
            {
              name: "Ruskin Bond",
              quote:
                "Books can be a means of escape, but they are also a way of better understanding our world.",
              image: "./image/bond3.png",
            },
          ].map((author, index) => (
            <div
              key={index}
              className="bg-white text-[#0b7c6b] border border-[#0b7c6b]/30 rounded-lg overflow-hidden shadow-lg flex flex-col h-full"
            >
              <img
                src={author.image}
                alt={author.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 flex-grow">
                <p className="italic mb-3 leading-relaxed">“{author.quote}”</p>
                <p className="text-sm font-semibold text-right">
                  – {author.name}
                </p>
              </div>
              <div className="flex justify-center space-x-4 mb-4">
                {["facebook-f", "twitter", "instagram"].map((icon, i) => (
                  <button
                    key={i}
                    className=" hover:text-green-500 cursor-pointer text-[#0b7c6b] p-2 rounded-full transition"
                  >
                    <FontAwesomeIcon icon={["fab", icon]} className="h-5" />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
