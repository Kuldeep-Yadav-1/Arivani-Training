import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MyHome = () => {
  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // const handleInput = (e) => {
  //   console.log(e.target.value);
  //   setInput(e.target.value);
  // }

  const handleSubmit = () => {
    alert(input);
    setInput("");
    setSubmitted(true);
  };

  const navigate = useNavigate();
  return (
    <div className="bg-image px-10">
      <h1 className="text-center text-4xl font-bold">Home</h1>
      {/* <button onClick={() => navigate("/practice")} className='bg-blue-500 text-white px-5 py-2 rounded-lg'>Practice</button> */}

      <input
        className="border bg-white w-full p-1 mt-5"
        type="text"
        placeholder="Enter text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 px-5 py-2 rounded-lg text-white mt-3"
      >
        Submit
      </button>

      <div>
        {submitted ? (
          <>
            <p>{input}</p>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default MyHome;
