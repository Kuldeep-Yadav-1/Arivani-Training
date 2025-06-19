import Divider from "@mui/material/Divider";
import React, { useState } from "react";

function Todoapp() {
  const [inputTask, setInputTask] = useState("");
  const [listTodo, setListTodo] = useState([]);
  const handleInput = (e) => {
    setInputTask(e.target.value);
  };

  const handleAdd = () => {
    addList(inputTask);
    setInputTask("");
  };

  const handleDelete = (index) => {
    let newList = [...listTodo];
    newList.splice(index, 1);
    console.log(newList);
    setListTodo([...newList]);
  };

  const addList = (inputTask) => {
    if (inputTask.trim() != "") {
      setListTodo([...listTodo, inputTask]);
    } else {
      alert("Empty Task");
    }
  };

  const handleReset = () => {
   let resetList = [...listTodo]
   resetList.splice(0,resetList.length)
    setInputTask("")
    setListTodo([...resetList])
  };

  return (
    <>
      <div className="w-60 mx-auto border rounded my-5 p-4">
        <div className="flex justify-between ">
          <input
            type="text"
            placeholder="Enter ToDo Task"
            className="me-1 w-40"
            value={inputTask}
            onChange={handleInput}
          />
          <button
            className="bg-blue-500 text-white rounded full w-10 h-10 cursor-pointer"
            // value={add}
            onClick={handleAdd}
          >
            +
          </button>
        </div>
        <div className="text-center  my-3">Todo Task</div>
        <div className="text-center  my-3">
          <button
            className="px-5 py-1 rounded bg-gray-300 cursor-pointer"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
        <div className="w-70">
          <Divider />
        </div>

        <div>
          {listTodo.map((task, index) => (
            <div className="flex justify-between py-1">
              <div key={index} className="">
                {task}
              </div>
              <div>
                <button
                  className="bg-blue-500 text-white rounded w-5 h-5  cursor-pointer text-center"
                  onClick={() => handleDelete(index)}
                >
                  -
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Todoapp;