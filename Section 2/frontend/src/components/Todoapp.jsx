import { Divider } from "@mui/material";
import React, { useState } from "react";

function Todoapp() {
  const [inputTask, setInputTask] = useState();
  const [todoList, setTodoList] = useState([]);

  const handleInput = (e) => {
    setInputTask(e.target.value);
  };

  const handleAdd = () => {
    if (inputTask.trim()) {
      setTodoList([...todoList, inputTask]);
      setInputTask("");
    }else{
      alert("Empty Task...")
    }
  };

  const handleDelete = (index) => {
    const deleteList = [...todoList];
    deleteList.splice(index, 1);
    setTodoList(deleteList);
  };
  const handleReset = () => {
    const resetList = [...todoList];
    resetList.splice(0, resetList.length);
    setTodoList(resetList);
    setInputTask("");
  };

  return (
    <div className="w-120 mx-auto my-5 p-5 shadow-2xl border rounded">
      <div className="flex justify-between m-4">
        <div>
          <input
            className="bg-gray-200 px-2 rounded"
            placeholder="Enter Task"
            type="text"
            value={inputTask}
            onChange={handleInput}
          />
        </div>
        <div>
          <button
            className="bg-blue-500 text-white p-1 h-10 w-10 rounded"
            onClick={handleAdd}
          >
            +
          </button>
        </div>
      </div>
      <div className="text-center my-2">ToDo App</div>
      <div className="text-center my-4">
        <button
          className="px-5 py-1 bg-gray-200  rounded cursor-pointer"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
      <Divider />

      <div className="flex justify-between">
        <div>
          {todoList.map((item, index) => {
            return (
              <>
                <div className="flex justify-between w-110 py-1" key={index}>
                  <div>{item}</div>
                  <button
                    className="px-5 py-1 bg-blue-500 text-white rounded cursor-pointer"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Todoapp;
