"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [MainTask, setMainTask] = useState([])
  const submitHandler=(e)=>{
    e.preventDefault()
    setMainTask([...MainTask,{title,desc}])
    settitle("")
    setdesc("")
    console.log(MainTask)
  }

  let renderTask=<h2>No Task Available</h2>

  return (
    <>
    <h1 className='p-5 text-3xl bg-black text-white font-bold text-center'>My TODO List</h1>
    <form onSubmit={submitHandler}>
      <input type='text'className='text-2xl border-zinc-800 border-4 m-5 px-4 py-2' placeholder='Enter Task Here' value={title} onChange={(e)=>{settitle(e.target.value)}} />
      <input type='text'className='text-2xl border-zinc-800 border-4 m-5 px-4 py-2' placeholder='Enter Description Here' value={desc} onChange={(e)=>{setdesc(e.target.value)}} />
      <button className='bg-black text-white px-4 py-2 text-2xl font-bold rounded m-5'>Add Task</button>
    </form>
    <hr />
    <div className='p-8 bg-red-100'>
      <ul>
        {renderTask}
      </ul>
    </div>
    </>
  )
}

export default page