"use client";
import Footer from "@/components/Footer";
import React, { useState } from "react";

const page = () => {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);

  // console.log(text, "text -->");

  const handleAddTask = (e) => {
    if (e.code == "Enter") {
      setTasks([{ task: text}, ...tasks]);
      setText("");
    }
  };

  console.log(tasks, "--> tasks");

  return (
    <div className="p-10">
      <input
        value={text}
        type="text"
        className="border"
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleAddTask}
      />
      {tasks.length > 0 ? (
        <>
          <ul>
            {tasks.map((item, index) => {
              return <li key={index}>
                {item?.task}
              </li>;
            })}
          </ul>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default page;
