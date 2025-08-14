"use client";
import validateName from "../../utils/validateName";
import validateNumber from "../../utils/validateNumber";

import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import ShowAlert from "../../utils/showAlert";
import { DateTime } from "luxon";
import api from "../../api/apiUrl";
import UseAppContext from "../../components/useContext"; 
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

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
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [language, setLanguage] = useState("English");
  const [available, setAvailable] = useState("In Stock");
  const [discountedPrice, setDiscountedPrice] = useState("");
  // const [uploadImage, setUploadImage] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [selFile, setSelFile] = useState("");
  const [validFile, setValidFile] = useState(false);
  const inputFile = useRef(null);

  const [userData, setUserData] = useState(null);
  const {
    loggedIn,
    setLoggedIn,
    logout,
    currentUser,
    setCurrentUser,
    loadingData,
    setLoadingData,
  } = UseAppContext();

  const router = useRouter();

  useEffect(() => {
    if(currentUser == null){
      setError("Please login to continue");
      router.push("/signin");
    }
  }, [currentUser])

  const handleBookData = async () => {
    if (
      !sn.trim() ||
      !title.trim() ||
      !author.trim() ||
      !pages.trim() ||
      !publication.trim() ||
      !dateOfPublished.trim() ||
      !quantity.trim() ||
      !price.trim() ||
      !discountedPrice.trim() ||
      !language.trim() ||
      !available.trim() ||
      !rating.trim() ||
      !description.trim() ||
      !summary.trim()
    ) {
      //return alert("All Field are required");
      return setError("All fields are required.");
    }

    if (!validateNumber(sn)) {
      // return alert("Serial No must be non zero numbers");
      return setError("Serial No must be non zero number.");
    }

    if (!validateName(title)) {
      // return alert("title must be character");
      return setError("Title must be character");
    }

    if (!validateName(author)) {
      // return alert("author name must be character");
      return setError("Author name must be character");
    }

    if (!validateNumber(pages)) {
      // return alert("Pages must be non zero number");
      return setError("Pages must be non zero number");
    }
    if (!validateNumber(quantity)) {
      // return alert("Pages must be non zero number");
      return setError("Quantity must be non zero number");
    }

    const today = new Date();
    const selectedDate = new Date(dateOfPublished);
    if (selectedDate > today) {
      // return alert("Date of publication cannot be in the future.");
      return setError("Date of publication cannot be in the future.");
    }

    if (!validateNumber(price)) {
      // return alert("price must be non zero number");
      return setError("Price must be non zero number.");
    }

    if (!validateNumber(discountedPrice)) {
      // return alert("Discounted price must be non zero number");
      return setError("Discounted price must be non zero number");
    }

    if (discountedPrice >= price) {
      // return alert("Discounted price should be less than the original price.");
      return setError(
        "Discounted price should be less than the original price."
      );
    }

    const parceRating = parseFloat(rating);
    if (isNaN(parceRating) || parceRating < 0 || parceRating > 5) {
      return setError("Rating must be a no between 0 to 5.");
    }

    try {
      setLoading(true);
      const res = await api.post(`/api/addbook`, {
        serial_no: sn,
        title: title,
        author_name: author,
        total_pages: pages,
        publication: publication,
        date_of_published: DateTime.fromFormat(
          dateOfPublished,
          "yyyy-MM-dd"
        ).toISO(),
        quantity: quantity,
        price: price,
        discounted_price: discountedPrice,
        upload_image: selFile,
        language: language,
        availablility: available,
        rating: rating,
        description: description,
        summary: summary,
      });

      console.log(res);
      console.log(res.data);
      setSuccess("Book added successfully.");
      setSn("");
      setTitle("");
      setAuthor("");
      setPages("");
      setPublication("");
      setDateOfPublished("");
      setQuantity("");
      setPrice("");
      setDiscountedPrice("");
      setLanguage("");
      setAvailable("");
      setRating("");
      setDescription("");
      setSummary("");
      setLoading(false);
      setSelFile("");
      if (inputFile.current) {
        inputFile.current.value = null;
      }
      return;
      // return res?.data?.message;
    } catch (error) {
      // console.log(error, "error");
      // alert(error?.responce?.data?.message || error);
      setError(
        error?.responce?.data?.message ||
          "Something  went wrong.. Please try again"
      );
      setLoading(false);
      return;
    }
  };

  const validateImage = (filename) => {
    console.log(filename, "file name in validate");
    const allowedExt = ["png", "jpeg", "jpg", "gif", "webp"];

    // Get the extension of the uploaded file
    const ext = filename.split(".");
    const extension = ext[1];

    //Check if the uploaded file is allowed
    return allowedExt.includes(extension);
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const uploadFile = async (e) => {
    if (!e.target.files) return;

    let file = e.target.files[0];
    console.log(file?.name, "file.name ?");
    if (!file?.name) {
      setSelFile(null);
      return;
    }

    console.log(file.name, " user file");
    const isFileValid = validateImage(file.name);
    console.log(isFileValid, "validation result");

    if (isFileValid) {
      let converted = await convertToBase64(file);
      if (typeof converted === "string") {
        console.log(converted, "base 64 string");
        setSelFile(converted); // Set the base64 string
      }
    } else {
      setSelFile("none");
    }

    setValidFile(isFileValid);
    console.log(isFileValid, "final validation result");
  };

  // const handleChangeDate = (e) => {
  //   console.log(e, "normal date");
  //   let newDate = DateTime.fromFormat(e, "yyyy-MM-dd").toISO();
  //   console.log(newDate, "new Date");
  // };

  return (
    <>
      <div>
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

            {/* <div>
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
          </div> */}

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

            {/* <div>
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
              onChange={(e) => {
                setDateOfPublished(e.target.value);
              }}
            />
          </div> */}

            {/* <div>
              <label
                htmlFor="quantity"
                className="block text-[#0b7c6b] font-semibold mb-1"
              >
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                min={0}
                placeholder="Enter Quantity of Book"
                className="w-full px-3 py-2 border border-[#0b7c6b] rounded"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div> */}

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

            {/* <div>
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
            </div> */}

            <div>
              <label
                htmlFor="FrontCoverImage"
                className="block text-[#0b7c6b] font-semibold mb-1"
              >
                Upload Front Cover:
              </label>
              <input
                type="file"
                // accept="image/*"
                ref={inputFile}
                id="FrontCoverImage"
                placeholder="Upload FrontCoverImage"
                className="w-full px-3 py-2 border border-[#0b7c6b] text-[#0b7c6b]/80 rounded"
                // value={selFile}
                onChange={(e) => uploadFile(e)}
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

            {/* <div>
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
                  <option
                    key={index}
                    value={item.value}
                  >
                    {item.label}
                  </option>
                );
              })}
            </select>
          </div> */}

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

            {/* <div>
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
            </div> */}

            {/* <div>
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
            </div> */}

            <div className="col-span-full text-center mt-4">
              <button
                disabled={loading}
                className="bg-[#0b7c6b] cursor-pointer w-full text-white px-6 py-2 rounded hover:bg-[#095f55] transition duration-300"
                onClick={handleBookData}
              >
                {loading ? "Please wait..." : " Add Book to Database"}
              </button>
            </div>
          </div>
        </div>
        <div>
          {/* this used for showing message after successfull or error else not show messagge but data is push*/}
          <ShowAlert
            success={success}
            error={error}
            setSuccess={setSuccess}
            setError={setError}
          />
        </div>
      </div>
    </>
  );
}

export default Page;
