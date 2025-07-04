"use client";

import React, { useState } from "react";

function page() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [task, setTask] = useState(false);
  const [show, setShow] = useState(false);
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleAdd = (e) => {
    if (e.code == "Enter") {
      if (!input.trim()) {
        alert("empty task");
      } else {
        setList([...list, { text: input, completed: true }]);
        setInput("");
      }
    }
  };

  const handleDelete = (index) => {
    const deleteList = [...list];
    deleteList.splice(index, 1);
    setList(deleteList);
  };

  // const handleReset = () => {
  //   const resetList = [...list];
  //   resetList.splice(0, resetList.length);
  //   setList(resetList);
  // };

  const handleToggleTask = (index) => {
    const updatedList = [...list];
    updatedList[index].completed = !updatedList[index].completed;
    setList(updatedList);
  };

  return (
    <div>
      <div className="w-[40%]  rounded shadow-2xl mx-auto my-5 p-4">
        <div className="text-center bold text-xl my-3">ToDo List</div>
        <div className="flex justify-between">
          <input
            type="text"
            placeholder="Enter Task"
            className="bg-gray-300 px-2 py-1 rounded"
            value={input}
            onChange={handleInput}
            onKeyDown={handleAdd}
          />

        </div>

        <div className="flex justify-center m-3">
          <button
            className="py-2 px-5 rounded text-white bg-blue-500 text-center"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>

        <div className="my-3">
          <hr />
        </div>
        <div className="">
          {list.map((item, index) => {
            return (
              <>
                <div className="flex justify-between my-2">
                  <div className="flex justify-start">
                    {/* <div className="flex items-center me-2"> */}
                    <input
                      type="checkbox"
                      checked={!item.completed}
                      onChange={() => handleTaskToggle(index)}
                    />
                    {/* </div> */}
                    <div key={index} className="mt-1">
                      {item.completed ? (
                        <div> {item.text}</div>
                      ) : (
                        <div className="line-through"> {item.text}</div>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      className="px-3 py-1 me-2 bg-blue-500 text-white rounded cursor-pointer"
                      onClick={() => handleToggleTask(index)}
                    >
                      {item.completed ? "completed Task" : "incomplete Task"}
                    </button>

                    <button
                      className="px-3 py-1 bg-blue-500 text-white rounded cursor-pointer"
                      onClick={() => handleDelete(index)}
                    >
                      delete
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default page;
