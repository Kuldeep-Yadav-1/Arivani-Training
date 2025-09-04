"use client";
import css from "styled-jsx/css";
import React, { useState, useEffect } from "react";
import api from "../../api/apiUrl";
import { ArrowForwardIos } from "@mui/icons-material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SearchIcon from "@mui/icons-material/Search";
import Footer from "../../components/Footer";
import { useRouter } from "next/navigation";

import { Pagination } from "flowbite-react";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const discountedPriceList = [
  {
    label: "<= 50",
    value: 50,
  },
  {
    label: "<= 100",
    value: 100,
  },

  {
    label: "<= 200",
    value: 200,
  },

  {
    label: "<= 300",
    value: 300,
  },

  {
    label: "<= 400",
    value: 400,
  },
  {
    label: "<= 550",
    value: 550,
  },
  {
    label: "<= 600",
    value: 600,
  },
  {
    label: "<= 700",
    value: 700,
  },
  {
    label: "<= 800",
    value: 800,
  },
  {
    label: "<= 900",
    value: 900,
  },
  {
    label: "<= 1000",
    value: 1000,
  },
];

const PublicationList = [
  {
    label: "Pratham Books",
    value: "Pratham Books",
  },
  {
    label: "Prabhat Publication",
    value: "Prabhat Publication",
  },
  {
    label: "Diamond Books",
    value: "Diamond Books",
  },
  {
    label: "Geeta Press",
    value: "Geeta Press",
  },
  {
    label: "Arihant Publications",
    value: "Arihant Publications",
  },
  {
    label: "Dreamland Publications",
    value: "Dreamland Publications",
  },
];

function Page() {
  const [bookData, setBookData] = useState([]);
  const [bookDataSearch, setBookDataSearch] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [discountedPrice, setDiscountedPrice] = useState("");
  const [publication, setPublication] = useState("");
  // const [searchButton, setSearchButton] = useState();
  const [searchTitle, setSearchTitle] = useState("");

  // const [currentPage, setCurrentPage] = useState(1);
  // const onPageChange = (page) => setCurrentPage(page);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onPageChange = (page) => {
    console.log(page, "current page");
    setPage(page);
  };

  const router = useRouter();

  const handleBookData = (e) => {
    console.log(e.target.value);
    // setSearchTitle(e.target.value)
    const filteredBookData = bookDataSearch.filter((item) =>
      item.title
        .toLowerCase()
        .trim()
        .includes(e.target.value.trim().toLowerCase())
    );
    setBookData(filteredBookData);
    setDiscountedPrice("");
    setPublication("");
  };

  // if (totalCount) {
  //   for (const i = 0; i <= totalCount; i++) {
  //     if (page) {

  //     }
  //   }
  // }

  const handleSearch = (e) => {
    setTotalCount("");
    // setTotalPages("")
    if (publication && !discountedPrice) {
      const filtered = bookData.filter(
        (item) => item.publication == publication
      );
      setBookData(filtered);
    }

    if (discountedPrice && !publication) {
      const filtered = bookData.filter(
        (item) => item.discounted_price <= discountedPrice
      );
      setBookData(filtered);
    }
    if (discountedPrice && publication) {
      const filtered = bookData.filter(
        (item) =>
          item.discounted_price <= discountedPrice &&
          item.publication == publication
      );
      setBookData(filtered);
    }
    setOpen(false);
    setPublication("");
    setDiscountedPrice("");
    // setSearchButton("")
    setSearchTitle("");
  };

  useEffect(() => {
    if (page) {
      fetchBookData();
    }
  }, [page]);

  const fetchBookData = async () => {
    try {
      setLoading(true);
      const res = await api.get(`/api/get-all-book-data/${page}`);
      setTotalCount(res?.data?.total);
      setTotalPages(Math.ceil(res?.data?.total / 6));
      const updatedData = res.data.result.map((book) => ({
        ...book,
        quantity: 1,
      }));
      setBookData(updatedData);
      setBookDataSearch(updatedData);
    } catch (error) {
      console.error("Error fetching book data:", error);
    } finally {
      setLoading(false);
    }
  };

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

  const handleChangePublication = (e) => {
    console.log(e.target.value);
    setPublication(e.target.value);
  };

  const handleChangeDiscount = (e) => {
    console.log(e.target.value);
    setDiscountedPrice(e.target.value);
  };

  console.log(totalCount, "totalCount");
  console.log(totalPages, "totalPages");

  return (
    <div>
      <div className="mx-6 md:mx-10 lg:mx-12 py-4">
        <div className="flex justify-between text-[#0b7c6b]">
          <div className="relative">
            <input
              type="text"
              placeholder="Enter Name Of Book....."
              className="px-9 py-2 border border-[#0b7c6b] rounded text-[#0b7c6b]"
              value={searchTitle}
              onChange={(e) => {
                setSearchTitle(e.target.value);
                // if we not write this line then state is not set due to this Search title is not visible b/c "" is pass as a initial value
                handleBookData(e);
                // this is used for invoking purpose use this function
              }}
            />
            <SearchIcon className="absolute top-2.5 left-2" />
          </div>
          <button className="text-bold rounded px-4 py-1 bg-[#0b7c6b] text-white">
            Total Books :<span className=""> {totalCount}</span>
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {loading ? (
            <div className="flex flex-col items-center justify-center col-span-full py-12">
              <div className="relative w-30 h-30">
                <div className="book-flip-box absolute w-full h-full bg-[#0b7c6b] rounded-sm shadow-lg origin-left"></div>
              </div>
              <p className="mt-4 text-[#0b7c6b] font-semibold">
                Loading your books...
              </p>
            </div>
          ) : bookData.length > 0 ? (
            bookData.map((book, index) => (
              <div
                key={index}
                className="px-5 pt-5 pb-2 shadow-2xl rounded-[10px] cursor-pointer"
                onClick={() => router.push(`/single-product?id=${book?._id}`)}
              >
                <img
                  src={book.upload_image}
                  alt={book.title}
                  style={{ width: 225, height: 325 }}
                  className="mx-auto rounded mb-2 cursor-pointer"
                />
                <h2 className="font-semibold">{book.title}</h2>
                <p className="text-sm">{book.author_name}</p>

                <div className="flex justify-between items-center">
                  <span>
                    <span className="font-bold">
                      ₹{book.discounted_price * book.quantity}
                    </span>
                    <del className="ms-2 font-thin">
                      ₹{book.price * book.quantity}
                    </del>
                  </span>

                  {/* <div className="flex items-center space-x-1">
                    <button
                      className="font-bold text-xl px-3 cursor-pointer"
                      onClick={() => handleDecrement(index)}
                    >
                      -
                    </button>
                    <span className="px-3 font-semibold">{book.quantity}</span>
                    <button
                      className="font-bold text-xl px-3 cursor-pointer"
                      onClick={() => handleIncrement(index)}
                    >
                      +
                    </button>
                  </div> */}
                </div>

                <div className="flex justify-between mb-2">
                  <div>
                    <span>{"⭐".repeat(book.rating)}</span>
                    <span className="font-semibold text-sm mx-2">
                      {book.language}
                    </span>
                  </div>
                  {/* <button className=" bg-green-500 hover:bg-green-400 text-white px-3 py-1 rounded cursor-pointer">
                    Add To Cart
                  </button> */}
                </div>
                {/* <p className="text-sm py-2">{book.description}</p> */}
              </div>
            ))
          ) : (
            <p className="mt-4 text-[#0b7c6b] font-semibold">No Book Found</p>
          )}
        </div>

        <div></div>

        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style} className="rounded-2xl">
              <p className="py-4">Search By</p>
              <div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label htmlFor="">Publication :</label>
                    <select
                      name=""
                      id=""
                      className="border p-1 rounded"
                      value={publication}
                      onChange={handleChangePublication}
                    >
                      <option value="">--Select Publication--</option>
                      {PublicationList.map((item, index) => (
                        <option key={index} value={item.value}>
                          {item.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="">Discounted Price :</label>
                    <select
                      name=""
                      id=""
                      className="p-1 rounded border"
                      value={discountedPrice}
                      onChange={handleChangeDiscount}
                    >
                      <option value="">--select price--</option>
                      {discountedPriceList.map((item, index) => (
                        <option key={index} value={item.value}>
                          {item.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex justify-end mt-4">
                  <button
                    // value={searchButton}
                    className="py-1 px-4 mx-2 cursor-pointer text-white bg-green-400 hover:bg-green-500 me-2 rounded"
                    onClick={handleSearch}
                  >
                    Search
                  </button>
                  <button
                    className="p-1 px-4 mx-2 cursor-pointer text-white bg-blue-400 hover:bg-blue-500 rounded"
                    onClick={handleClose}
                  >
                    Close
                  </button>
                </div>
              </div>
            </Box>
          </Modal>
        </div>

        <div className="flex overflow-x-auto sm:justify-center">
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Page;
