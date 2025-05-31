import React from 'react'
import { useNavigate } from 'react-router-dom';

const Practice = () => {
    const navigate = useNavigate();
  return (
    <div className=''>
      <h1 className='text-center text-4xl font-bold'>Practice</h1>
      <button onClick={() => navigate("/")} className='bg-blue-500 text-white px-5 py-2 rounded-lg'>Home</button>
    </div>
  )
}

export default Practice
