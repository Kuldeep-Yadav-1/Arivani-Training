"use client";
import { useSearchParams } from "next/navigation";
import api from "../../api/apiUrl";
import React, { useEffect, useState } from "react";
import ShowAlert from "../../utils/showAlert";
// import { error } from "console";
// import bookstoreData from "@/utils/bookstoreData";

function page() {
  const [success, setSuccess] = useState();
  const [error, setError] = useState();

  const [loading, setLoading] = useState(false);
  const [updateBookData, setUpdateBookdata] = useState("");
  const [sn, setSn] = useState(0);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState(0);
  const [publication, setPublication] = useState("");
  const [dateOfPublished, setDateOfPublished] = useState("");
  // const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState(0);
  const [language, setLanguage] = useState("English");
  const [available, setAvailable] = useState("In Stock");
  const [discountedPrice, setDiscountedPrice] = useState(0);
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const [summary, setSummary] = useState("");
  const [selFile, setSelFile] = useState("");
  const [validFile, setValidFile] = useState(false);

  const param = useSearchParams();
  const product_id = param.get("id");
  console.log("product_id", product_id);

  useEffect(() => {
    if (product_id) {
      getFetchBookData();
    }
  }, [product_id]);

  const handleUpdateData = async () => {
    if (
      !sn ||
      !title.trim() ||
      !author.trim() ||
      !pages ||
      !publication.trim() ||
      !dateOfPublished.trim() ||
      !price ||
      !available.trim() ||
      !discountedPrice ||
      !language.trim() ||
      !selFile.trim() ||
      !rating ||
      !description.trim() ||
      !summary.trim()
    ) {
      // alert("All field are required");
      setError("All Field are Required")
      return;
    }

    try {
      setLoading(true);
      const res = await api.post(`/api/update-book-data/${product_id}`, {
        serial_no: sn,
        title: title,
        author_name: author,
        total_pages: pages,
        publication: publication,
        date_of_published: dateOfPublished,
        // quantity: quantity,
        price: price,
        discounted_price: discountedPrice,
        upload_image: selFile,
        language: language,
        availablility: available,
        rating: rating,
        description: description,
        summary: summary,
      });
      console.log("res", res);
      console.log("succussfully added", res?.data?.result);
      // alert(res?.data?.result || "succussfully added");
      setSuccess(res?.data?.message || "succussfully Updated Data")
      return;
    } catch (error) {
      // alert(error?.response?.data?.message || "something error occured");
      setError(error?.response?.data?.message || "something error occured")
    } finally {
      setLoading(false);
    }
  };

  const getFetchBookData = async () => {
    try {
      setLoading(true);
      const res = await api.get(`/api/get-book-data/${product_id}`);
      console.log("res", res);
      const updatedBookData = res?.data?.result;
      setSn(res?.data?.result?.serial_no);
      setTitle(res?.data?.result?.title);
      setAuthor(res?.data?.result?.author_name);
      setPages(res?.data?.result?.total_pages);
      setPublication(res?.data?.result?.publication);
      setDateOfPublished(res?.data?.result?.date_of_published);
      setPrice(res?.data?.result?.price);
      setDiscountedPrice(res?.data?.result?.discounted_price);
      setRating(res?.data?.result?.rating);
      setLanguage(res?.data?.result?.language);
      setAvailable(res?.data?.result?.availablility);
      setDescription(res?.data?.result?.description);
      setSummary(res?.data?.result?.summary);
      console.log("updatedBook Data", updatedBookData);
      setUpdateBookdata(updatedBookData);
    } catch (error) {
      console.log(error?.response?.data || "something error occured");
    } finally {
      setLoading(false);
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

  return (
    <div>
      {loading ? (
        "Loading data..."
      ) : (
        <div className="relative min-h-screen flex items-cUpdate justify-center px-4 py-2 ">
          {/* image section */}
          <div
            className="absolute inset-0 bg-cover bg-cUpdate opacity-70"
            style={{
              backgroundImage: "url('../image/addBook.jpeg')",
            }}
          ></div>
          <div className="absolute inset-0 bg-cover bg-cUpdate bg-[#0b7c6b] opacity-20"></div>
          <div className="bg-white bg-opacity-90 shadow-lg z-2 rounded-lg p-5 m-5 mx-2 md:mx-11 lg:mx-21 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
            <h2 className="col-span-full text-2xl font-bold text-[#0b7c6b] text-center ">
              Update Book Data
            </h2>

            <div>
              <label
                htmlFor="sn"
                className="block text-[#0b7c6b] font-semibold mb-1"
              >
                Update Sn:
              </label>
              <input
                type="number"
                id="sn"
                min={1}
                placeholder="Update Serial No"
                className="w-full px-3 py-2 border border-[#0b7c6b] rounded"
                // value={updateBookData?.serial_no}
                value={sn}
                onChange={(e) => setSn(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="title"
                className="block text-[#0b7c6b] font-semibold mb-1"
              >
                Update Title:
              </label>
              <input
                type="text"
                id="title"
                placeholder="Update Title of Book"
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
                Update Author Name:
              </label>
              <input
                type="text"
                id="author"
                placeholder="Update Author of Book"
                className="w-full px-3 py-2 border border-[#0b7c6b] rounded"
                // value={updateBookData?.author_name} its working as a uncontrolled component so make same state for same data
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="totalPages"
                className="block text-[#0b7c6b] font-semibold mb-1"
              >
                Update Total Pages:
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
                Update Publication Name:
              </label>
              <input
                type="text"
                id="publication"
                placeholder="Update Publication of Book"
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
                // type="text"
                type="date"
                id="publicationDate"
                className="w-full px-3 py-2 border border-[#0b7c6b] rounded"
                value={dateOfPublished ? dateOfPublished.slice(0, 10) : ""}
                onChange={(e) => setDateOfPublished(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="price"
                className="block text-[#0b7c6b] font-semibold mb-1"
              >
                Update Price:
              </label>
              <input
                type="number"
                id="price"
                min={0}
                placeholder="Update Price of Book"
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
                Update Discounted Price:
              </label>
              <input
                type="number"
                min={0}
                id="discounted_price"
                placeholder="Update Discounted Price of Book"
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
                Update Upload Front Cover:
              </label>
              <input
                type="file"
                id="FrontCoverImage"
                placeholder="Upload FrontCoverImage"
                className="w-full px-3 py-2 border border-[#0b7c6b] text-[#0b7c6b]/80 rounded"
                // value={updateBookData?.upload_image ? updateBookData?.upload_image : ""}
                onChange={(e) => uploadFile(e)}
              />
            </div>

            <div>
              <label
                htmlFor="rating"
                className="block text-[#0b7c6b] font-semibold mb-1"
              >
                Update Rating (out of 5):
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
                htmlFor="language"
                className="block text-[#0b7c6b] font-semibold mb-1"
              >
                Update Language of Book:
              </label>
              <select
                id="language"
                className="w-full px-3 py-2.5 border border-[#0b7c6b] rounded text-[#0b7c6b]"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value="">Select Language</option>
                <option value="Hindi">Hindi</option>
                <option value="English">English</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="availability"
                className="block text-[#0b7c6b] font-semibold mb-1"
              >
                Update Language of Book:
              </label>
              <select
                id="availability"
                className="w-full px-3 py-2.5 border border-[#0b7c6b] rounded text-[#0b7c6b]"
                value={available}
                onChange={(e) => setAvailable(e.target.value)}
              >
                <option value="">Select</option>
                <option value="In Stock">In Stock</option>
                <option value="Not Available">Not Available</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-[#0b7c6b] font-semibold mb-1"
              >
                Update Description:
              </label>
              <textarea
                id="description"
                rows="2"
                placeholder="Update Description of Book"
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
                Update Summary:
              </label>
              <textarea
                id="summary"
                rows="2"
                placeholder="Update Summary of Book"
                className="w-full px-3 py-2 border border-[#0b7c6b] rounded"
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
              ></textarea>
            </div>

            <div className="col-span-full text-cUpdate mt-4">
              <button
                disabled={loading}
                className="bg-[#0b7c6b] cursor-pointer w-full text-white px-6 py-2 rounded hover:bg-[#095f55] transition duration-300"
                onClick={handleUpdateData}
              >
                {loading ? "Please wait..." : " Update Book Data"}
              </button>
            </div>
          </div>
        </div>
      )}
      <div>
        <ShowAlert
          success={success}
          error={error}
          setSuccess={setSuccess}
          setError={setError}
        />
      </div>
    </div>
  );
}

export default page;
