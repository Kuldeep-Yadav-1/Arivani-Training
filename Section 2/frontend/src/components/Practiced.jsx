import React, { useState } from "react";
import PracticeData from "../utils/PracticeData";

function Practiced() {
  const [data, setdata] = useState(PracticeData);
  const [inputPrice, setInputPrice] = useState();

  const handleSearch = (e) => {
    setInputPrice(e.target.value);
  };

  const handlePrice = () => {
    if (inputPrice) {
      const filteredPrice = PracticeData.filter(
        (item) => item.price == inputPrice.trim()
      );
      setdata(filteredPrice);
    }
  };

  return (
    <div className="m-5">
      <div className="flex justify-between my-4">
        <input
          type="text"
          placeholder="Enter price"
          value={inputPrice}
          onChange={handleSearch}
        />
        <button
          className="px-5 py-1 bg-blue-500 text-white"
          onClick={handlePrice}
        >
          search
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {data.map((item) => (
          <div className="">
            <div className="p-5 border shadow-2xl rounded">
              <div>
                <img
                  src={item.image}
                  style={{ width: 200, height: 200 }}
                  className="py-2"
                />
              </div>
              <div>{item.title}</div>
              <div>
                {"$ "}
                {item.price}
              </div>
              <div>{item.category}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Practiced;
