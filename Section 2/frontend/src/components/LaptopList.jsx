import React, { useEffect, useState } from "react";
import laptopData from "./laptopData";
import SearchIcon from '@mui/icons-material/Search';

const LaptopList = () => {
  const [data, setData] = useState(laptopData);
  // const [search ,setSearch] = useState("")

  const handleSearch = (e) =>{
    // let search = (e.target.value).toLowerCase()
    let fiteredData = laptopData.filter((item)=> item.model.toLowerCase().includes(e.target.value.toLowerCase()))
    setData(fiteredData)
  }

  return (
    <div className="m-5">
      <div className="relative">
        <input className="border py-2 ps-9 rounded w-90" placeholder="Enter Model name"
        // value={search}
         onChange={handleSearch}/>
        <div className="absolute left-2 top-2"><SearchIcon/> </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {data.map((data, index) => {
          return (
            <div className="grid">
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
  );
};

export default LaptopList;
