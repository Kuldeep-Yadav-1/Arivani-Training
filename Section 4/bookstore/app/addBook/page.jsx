"use client";
import validateName from "../../utils/validateName";
import validateNumber from "../../utils/validateNumber";
import axios from "axios";
import React, { useState } from "react";

const Language = [
  {
    label: "English",
    value: "English",
  },
  {
    label: "Hindi",
    value: "Hindi",
  },
];

const availabilityList = [
  {
    label: "In Stock",
    value: "In Stock",
  },
  {
    label: "not Available",
    value: "not Available",
  },
];

function Page() {
  const [sn, setSn] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState("");
  const [publication, setPublication] = useState("");
  const [dateOfPublished, setDateOfPublished] = useState("");
  const [price, setPrice] = useState("");
  const [language, setLanguage] = useState("");
  const [available, setAvailable] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState("");
  const [uploadImage, setUploadImage] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleBookData = async () => {
    if (
      !sn.trim() ||
      !title.trim() ||
      !author.trim() ||
      !pages.trim() ||
      !publication.trim() ||
      !dateOfPublished.trim() ||
      !price.trim() ||
      !discountedPrice.trim() ||
      !language.trim() ||
      !available.trim() ||
      !rating.trim() ||
      !description.trim() ||
      !summary.trim()
    ) {
      return alert("All Field are required");
    }

    if (
      !validateNumber(sn) ||
      !validateNumber(price) ||
      !validateNumber(discountedPrice) ||
      !validateNumber(pages)
    ) {
      return alert(
        "sn , pages, price,  discounted price must be non zero numbers"
      );
    }

    if (!validateName(author)) {
      return alert("author name must be character");
    }

    try {
      // const payload = {
      //   serial_no: sn,
      //   title: title,
      //   author_name: author,
      //   total_pages: pages,
      //   publication: publication,
      //   date_of_published: dateOfPublished,
      //   price: price,
      //   discounted_price: discountedPrice,
      //   upload_image: "abc",
      //   language: language,
      //   availablility: available,
      //   rating: rating,
      //   description: description,
      //   summary: summary,
      // };
      // console.log(payload, "payload");

      setLoading(true);
      const res = await axios.post(`http://localhost:9000/api/addbook`, {
        serial_no: sn,
        title: title,
        author_name: author,
        total_pages: pages,
        publication: publication,
        date_of_published: dateOfPublished,
        price: price,
        discounted_price: discountedPrice,
        upload_image: "abc",
        language: language,
        availablility: available,
        rating: rating,
        description: description,
        summary: summary,
      });

      console.log(res);
      console.log(res.data);
      setSn("");
      setTitle("");
      setAuthor("");
      setPages("");
      setPublication("");
      setDateOfPublished("");
      setPrice("");
      setDiscountedPrice("");
      setLanguage("");
      setAvailable("");
      setRating("");
      setDescription("");
      setSummary("");

      setLoading(false);
      // return res?.data?.message;
    } catch (error) {
      console.log(error, "error");
      alert(error?.responce?.data?.message || error);
      setLoading(false);
    }
  };
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
            value={sn}
            onChange={(e) => setSn(e.target.value)}
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
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
            value={pages}
            onChange={(e) => setPages(e.target.value)}
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
            value={publication}
            onChange={(e) => setPublication(e.target.value)}
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
            value={dateOfPublished}
            onChange={(e) => setDateOfPublished(e.target.value)}
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
            min={0}
            placeholder="Enter Price of Book"
            className="w-full px-3 py-2 border border-[#0b7c6b] rounded"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="discounted_price"
            className="block text-[#0b7c6b] font-semibold mb-1"
          >
            Discounted Price:
          </label>
          <input
            type="number"
            min={0}
            id="discounted_price"
            placeholder="Enter Discounted Price of Book"
            className="w-full px-3 py-2 border border-[#0b7c6b] rounded"
            value={discountedPrice}
            onChange={(e) => setDiscountedPrice(e.target.value)}
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
            value={uploadImage}
            onChange={(e) => setUploadImage(e.target.value)}
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
            value={language}
            className="w-full px-3 py-2 border border-[#0b7c6b] rounded text-[#0b7c6b]"
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="">Select Language</option>
            {Language.map((item, index) => {
              return (
                <option key={index} value={item.value}>
                  {item.label}
                </option>
              );
            })}
          </select>
        </div>

        <div>
          <label
            htmlFor="Availability"
            className="block text-[#0b7c6b] font-semibold mb-1"
          >
            Availability:
          </label>
          <select
            id="Availability"
            className="w-full px-3 py-2 border border-[#0b7c6b] rounded text-[#0b7c6b]"
            value={available}
            onChange={(e) => setAvailable(e.target.value)}
          >
            <option value="">select availability</option>
            {availabilityList.map((item, index) => {
              return (
                <option key={index} value={item.value}>
                  {item.label}
                </option>
              );
            })}
          </select>
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
            value={rating}
            onChange={(e) => setRating(e.target.value)}
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
            id="description"
            rows="2"
            placeholder="Enter Description of Book"
            className="w-full px-3 py-2 border border-[#0b7c6b] rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
            id="summary"
            rows="2"
            placeholder="Enter Summary of Book"
            className="w-full px-3 py-2 border border-[#0b7c6b] rounded"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          ></textarea>
        </div>

        <div className="col-span-full text-center mt-4">
          <button
            className="bg-[#0b7c6b] cursor-pointer w-full text-white px-6 py-2 rounded hover:bg-[#095f55] transition duration-300"
            onClick={handleBookData}
          >
            {loading ? "Please wait..." : " Add Book to Database"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;
