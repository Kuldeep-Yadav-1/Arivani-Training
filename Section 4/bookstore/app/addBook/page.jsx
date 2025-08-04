"use client";
import React from "react";

function Page() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-2 ">
      {/* image section */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{
          backgroundImage: "url('../image/addBook.jpeg')",
        }}
      ></div>
      <div className="absolute inset-0 bg-cover bg-center bg-[#0b7c6b] opacity-20"></div>
      <div className="bg-white bg-opacity-90 shadow-lg z-2 rounded-lg p-5 m-5 mx-2 md:mx-11 lg:mx-21 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
        <h2 className="col-span-full text-2xl font-bold text-[#0b7c6b] text-center ">
          Add New Book
        </h2>

        <div>
          <label
            htmlFor="sn"
            className="block text-[#0b7c6b] font-semibold mb-1"
          >
            Serial Number:
          </label>
          <input
            type="number"
            id="sn"
            min="1"
            placeholder="Enter Serial No"
            className="w-full px-3 py-2 border border-[#0b7c6b] rounded focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="title"
            className="block text-[#0b7c6b] font-semibold mb-1"
          >
            Title:
          </label>
          <input
            type="text"
            id="title"
            placeholder="Enter Title of Book"
            className="w-full px-3 py-2 border border-[#0b7c6b] rounded"
          />
        </div>

        <div>
          <label
            htmlFor="author"
            className="block text-[#0b7c6b] font-semibold mb-1"
          >
            Author Name:
          </label>
          <input
            type="text"
            id="author"
            placeholder="Enter Author of Book"
            className="w-full px-3 py-2 border border-[#0b7c6b] rounded"
          />
        </div>

        <div>
          <label
            htmlFor="price"
            className="block text-[#0b7c6b] font-semibold mb-1"
          >
            Price:
          </label>
          <input
            type="number"
            id="price"
            placeholder="Enter Price of Book"
            className="w-full px-3 py-2 border border-[#0b7c6b] rounded"
          />
        </div>

        <div>
          <label
            htmlFor="FrontCoverImage"
            className="block text-[#0b7c6b] font-semibold mb-1"
          >
            Upload Front Cover:
          </label>
          <input
            type="file"
            accept="image/*"
            id="FrontCoverImage"
            placeholder="Upload FrontCoverImage"
            className="w-full px-3 py-2 border border-[#0b7c6b] text-[#0b7c6b]/80 rounded"
          />
        </div>

        <div>
          <label
            htmlFor="publication"
            className="block text-[#0b7c6b] font-semibold mb-1"
          >
            Publication Name:
          </label>
          <input
            type="text"
            id="publication"
            placeholder="Enter Publication of Book"
            className="w-full px-3 py-2 border border-[#0b7c6b] rounded"
          />
        </div>

        <div>
          <label
            htmlFor="language"
            className="block text-[#0b7c6b] font-semibold mb-1"
          >
            Language of Book:
          </label>
          <select
            id="language"
            className="w-full px-3 py-2 border border-[#0b7c6b] rounded text-[#0b7c6b]"
          >
            <option value="">Select Language</option>
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="totalPages"
            className="block text-[#0b7c6b] font-semibold mb-1"
          >
            Total Pages:
          </label>
          <input
            type="number"
            id="totalPages"
            min={0}
            placeholder="No of Pages"
            className="w-full px-3 py-2 border border-[#0b7c6b] rounded"
          />
        </div>

        <div>
          <label
            htmlFor="publicationDate"
            className="block text-[#0b7c6b] font-semibold mb-1"
          >
            Date of Publication:
          </label>
          <input
            type="date"
            id="publicationDate"
            className="w-full px-3 py-2 border border-[#0b7c6b] rounded"
          />
        </div>

        <div>
          <label
            htmlFor="rating"
            className="block text-[#0b7c6b] font-semibold mb-1"
          >
            Rating (out of 5):
          </label>
          <input
            type="number"
            id="rating"
            min="0"
            max="5"
            step="0.1"
            placeholder="Rating Out Of 5"
            className="w-full px-3 py-2 border border-[#0b7c6b] rounded"
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-[#0b7c6b] font-semibold mb-1"
          >
            Description:
          </label>
          <textarea
            name=""
            id="description"
            rows="2"
            placeholder="Enter Description of Book"
            className="w-full px-3 py-2 border border-[#0b7c6b] rounded"
          ></textarea>
        </div>

        <div>
          <label
            htmlFor="summary"
            className="block text-[#0b7c6b] font-semibold mb-1"
          >
            Summary:
          </label>
          <textarea
            name=""
            id="summary"
            rows="2"
            placeholder="Enter Summary of Book"
            className="w-full px-3 py-2 border border-[#0b7c6b] rounded"
          ></textarea>
        </div>

        <div className="col-span-full text-center mt-4">
          <button className="bg-[#0b7c6b] cursor-pointer w-full text-white px-6 py-2 rounded hover:bg-[#095f55] transition duration-300">
            Add Book to Database
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;
