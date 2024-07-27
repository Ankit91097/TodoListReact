"use client";

import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [MainTask, setMainTask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...MainTask, { title, desc }]);
    settitle("");
    setdesc("");
    console.log(MainTask);
  };
  const DeleteHandler=(i)=>{
    let copyTask=[...MainTask]
    copyTask.splice(i,1)
    setMainTask(copyTask)
  }
  let renderTask = <h2>No Task Available</h2>;
    if (MainTask.length > 0) {
      renderTask = MainTask.map((elem, idx) => {
        return (
          <li key={idx} className="flex items-center justify-between mb-2">
            <div className="flex items-center justify-between w-2/3">
              <h5 className="text-2xl font-bold">{elem.title}</h5>
              <h6 className="text-xl font-semibold">{elem.desc}</h6>
            </div>
            <button onClick={()=>{DeleteHandler(idx)}} className="px-4 py-2 bg-slate-600 rounded text-white font-bold">Delete</button>
          </li>
        );
      });
    }

  return (
    <>
      <h1 className="p-5 text-3xl bg-black text-white font-bold text-center">
        My TODO List
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-5 px-4 py-2"
          placeholder="Enter Task Here"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-5 px-4 py-2"
          placeholder="Enter Description Here"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />
        <button className="bg-black text-white px-4 py-2 text-2xl font-bold rounded m-5">
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-5 bg-red-100">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
