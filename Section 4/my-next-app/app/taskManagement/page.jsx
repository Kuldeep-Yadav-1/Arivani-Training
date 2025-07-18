"use client";
import React, { useState } from "react";

function page() {
  const [inputTask, setInputTask] = useState("");
  const [list, setList] = useState([]);

  const handleInput = (e) => {
    setInputTask(e.target.value);
  };
  const handleAdd = (e) => {
    if (e.code == "Enter") {
      setList([...list, {text:inputTask, completed:true}]);
      setInputTask("");
    }
  };

  const handleDelete = (index) =>{
    const deleteList = [...list];
    deleteList.splice(index,1);
    setList(deleteList);
  }
  const handletoggle = (index)=>{
    const updatedList = [...list];
    updatedList[index].completed = !updatedList[index].completed;
    setList(updatedList) ;
  }

  return (
    <div className="m-5  p-5">
      <h2 className="text-center text-bold text-2xl">Task Management App</h2>
      <div className="mx-5 mt-5 p-5 bg-gray-300">
        <input
          value={inputTask}
          onChange={handleInput}
          onKeyDown={handleAdd}
          className="bg-white w-full px-5 py-1 rounded"
          type="text"
          placeholder="Enter Your Task ..."
        />
        {list.map((item, index) => {
          return (
            <div key={index} className="my-2 p-2 bg-white w-full rounded">
              <li className="list-none">
                <input type="checkbox" name="" id="" className="me-1 mt-2" checked={!item.completed} onChange={()=>handletoggle(index)}/>
                {item.completed ?<div className=""> {item.text} </div>:<div className="line-through"> {item.text} </div>}
              </li>
              <li className="list-none mt-1">
                <button className="px-5 py-1 bg-green-600 text-white rounded me-2 cursor-pointer" onClick={()=>handletoggle(index)}>{item.completed ? <li>Mark as Complete</li> :<li>InComplete</li>}</button>
                <button className="px-5 py-1 bg-red-600 text-white rounded cursor-pointer" onClick={()=>handleDelete(index)}>Delete</button>
              </li>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default page;
