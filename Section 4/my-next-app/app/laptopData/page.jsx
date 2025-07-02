"use client";
import React from "react";
import laptopData from "./laptopData";
import { useState } from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SearchIcon from "@mui/icons-material/Search";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const brandName = [
  {
    label: "Hp",
    value: "Hp",
  },
  {
    label: "Apple",
    value: "Apple",
  },
  {
    label: "Dell",
    value: "Dell",
  },
  {
    label: "Asus",
    value: "Asus",
  },
  {
    label: "Acer",
    value: "Acer",
  },
  {
    label: "Lenovo",
    value: "Lenovo",
  },
  {
    label: "Samsung",
    value: "Samsung",
  },
];

const priceList = [
  {
    label: "<= 30000",
    value: 30000,
  },
  {
    label: "<= 50000",
    value: 50000,
  },
  {
    label: "<= 60000",
    value: 60000,
  },
  {
    label: "<= 70000",
    value: 70000,
  },
  {
    label: "<= 80000",
    value: 80000,
  },
  {
    label: "<= 90000",
    value: 90000,
  },
  {
    label: "<= 100000",
    value: 100000,
  },
];

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

function page() {
  const [data, setData] = useState(laptopData);
  const [modelName, setModelName] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleModel = (e) => {
    setModelName(e.target.value);
    const searchTerm = e.target.value.trim().toLowerCase();
    const filteredModel = laptopData.filter((item) => {
      return item.model.toLowerCase().trim().includes(searchTerm);
    });
    setData(filteredModel);
    setBrand("");
    setPrice("")
  };

  const handleBrand = (e) => {
    setBrand(e.target.value);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleSearch = () => {
    if (brand && !price) {
      const filtered = laptopData.filter((item) => {
        return item.brand === brand;
      });
      setData(filtered);
    }

    if (!brand && price) {
      const filtered = laptopData.filter((item) => {
        return item.price <= price;
      });
      setData(filtered);
    }

    if (brand && price) {
      const filtered = laptopData.filter((item) => {
        return item.price <= price && item.brand === brand;
      });
      setData(filtered);
    }

    if (!brand && !price) {
      setData(laptopData);
    }
    setOpen(false);
    setModelName("")
  };
  return (
    <>
      <div className="mx-5 my-2">
        <div className="flex justify-between">
          <div className="relative">
            <input
              placeholder="Enter model of laptop"
              className="py-1 px-10 bg-gray-200"
              value={modelName}
              onChange={handleModel}
            />
            <div className="absolute  top-1 left-2 ">
              <SearchIcon />
            </div>
          </div>

          <button
            className="px-5 py-1 rounded bg-blue-500 text-white cursor-pointer"
            onClick={handleOpen}
          >
            <FilterAltIcon /> Filter By
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {data.map((data, index) => {
            return (
              <div key={index} className="grid">
                <div className="shadow-2xl rounded mt-4">
                  <div className="p-3 m-2">
                    <img
                      src={data.image}
                      className="mx-auto "
                      style={{ height: 200, width: 275 }}
                    />
                  </div>
                  <div className="text-xl ms-3 text-gray-700 font-medium">
                    {data.brand}
                  </div>
                  <div className="text-base ms-3 text-gray-700 font-thin">
                    {data.model}
                  </div>
                  <div className="text-xl ms-3 mb-2 text-gray-800 font-bold">
                    {"₹ "}
                    {data.price}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="rounded">
          <div>
            <div>Filter By</div>
            <div className="my-4 grid grid-cols-2 gap-4">
              <select
                className="bg-gray-200 rounded px-4 py-2"
                value={brand}
                onChange={handleBrand}
              >
                <option value="">---Select Brand---</option>
                {brandName.map((item,index) => {
                  return <option value={item.value} key={index}>{item.label}</option>;
                })}
              </select>
              <select
                className="bg-gray-200 rounded px-4 py-2"
                value={price}
                onChange={handlePrice}
              >
                <option value="">---Select Price---</option>
                {priceList.map((item,index) => {
                  return <option key={index} value={item.value}>{item.label}</option>;
                })}
              </select>
            </div>
            <div>
              <Divider />
            </div> 
            <div className="mt-4 flex justify-end">
              <button
                className="bg-blue-500 text-white px-5 py-1 rounded me-2 cursor-pointer"
                onClick={handleSearch}
              >
                Search
              </button>
              <button
                className="bg-gray-200 px-5 py-1 rounded cursor-pointer"
                onClick={handleClose}
              >
                Close
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default page;
