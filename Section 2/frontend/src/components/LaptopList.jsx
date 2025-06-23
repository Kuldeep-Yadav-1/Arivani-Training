import React, { useEffect, useState } from "react";
import laptopData from "./laptopData";
import SearchIcon from "@mui/icons-material/Search";
import FilterListAltIcon from "@mui/icons-material/FilterListAlt";
import Box from "@mui/material/Box";
import { Divider, Modal, Typography } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   boxShadow: 24,
//   p: 4,
// };
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

const LaptopList = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(laptopData);
  // const [data1 ,setData1] = useState(true)
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  // const [refresh ,setRefresh] = useState(laptopData);
  const [search, setSearch] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    let fiteredData = laptopData.filter((item) =>
      item.model.toLowerCase().trim().includes(e.target.value.trim().toLowerCase())
    );
    setData(fiteredData);
    setBrand("");
    setPrice("");
  };

  const handleBrand = (e) => {
    setBrand(e.target.value);
    // let filteredBrand = laptopData.filter(
    //   (item) => item.brand === e.target.value
    // );
    // setData(filteredBrand);
  };

  const handlePrice = (e) => {
    console.log(e.target.value, "selectedprice");
    setPrice(e.target.value);

    // let filteredPrice = laptopData.filter(
    //   (item) => item.price == e.target.value
    // );
    // setData(filteredPrice);
  };

  const handleSearchButton = () => {
    // let filtered
    if (brand && !price) {
      let filtered = laptopData.filter((item) => item.brand === brand);
      setOpen(false);
      setData(filtered);
    }

    if (price && !brand) {
      let filtered = laptopData.filter((item) => item.price <= price);
      setOpen(false);
      setData(filtered);
    }

    if (price && brand) {
      let filtered = laptopData.filter(
        (item) => item.price <= price && item.brand === brand
      );
      setOpen(false);
      setData(filtered);
    }

    if (!price && !brand) {
      setOpen(false);
      setData(laptopData);
    }
    
    setSearch("");
  };

  const handleRefresh = () => {
    setData(laptopData);
    setSearch("");
    setBrand("");
    setPrice("");
  };

  return (
    <>
      <div className="m-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  md:justify-between lg:justify-between">
          <div className="relative my-2">
            <input
              className="border py-2 ps-9 rounded w-90 text-black"
              placeholder="Enter Model name"
              value={search}
              onChange={handleSearch}
            />
            <div className="absolute left-2 top-2">
              <SearchIcon />
            </div>
          </div>
          <div className="flex  md:justify-end lg:justify-end my-2">
            <button
              className="bg-blue-700 px-5 py-2  rounded-lg text-white cursor-pointer"
              onClick={() => setOpen(true)}
            >
              <FilterListAltIcon className="mr-1" />
              Filter By
            </button>
            <button onClick={handleRefresh}>
              <RefreshIcon className="mx-2 cursor-pointer" />
            </button>
          </div>
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
        <Box className="absolute m-5 rounded  left-[0%] top-[30%] md:top-[30%] md:left-[4%] lg:top-[30%] lg:left-[15%] xl:lg:left-[21%]  bg-white p-3">
          <div className="">
            <div className="mb-2">Filter By :</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              <div className="grid grid-cols-1">
                <label>Select Brand</label>
                <select
                  className="w-80 md:w-60 lg:w-60 mt-1 rounded"
                  onChange={handleBrand}
                  value={brand}
                >
                  <option value="">---Select Brand---</option>
                  {brandName.map((item, index) => {
                    return <option value={item.value}>{item.label}</option>;
                  })}
                </select>
              </div>
              <div className="grid grid-cols-1">
                <label>Select Price</label>
                <select
                  className="w-80 md:w-60 lg:w-60 mt-1 rounded"
                  onChange={handlePrice}
                  value={price}
                >
                  <option value="">---Select Price---</option>
                  {priceList.map((item, index) => {
                    return <option value={item.value}>{item.label}</option>;
                  })}
                </select>
              </div>
            </div>
            <div className="my-5">
              <Divider />
            </div>
            <div className="flex justify-end">
              <button
                className="px-5 py-2 bg-blue-500 text-white me-5 rounded cursor-pointer"
                onClick={handleSearchButton}
              >
                Search
              </button>
              <button
                className="px-5 py-2 bg-gray-300 text-black rounded cursor-pointer"
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
};

export default LaptopList;
