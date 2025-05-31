import React from 'react'
import { useNavigate } from 'react-router-dom';

const MyHome = () => {
    const navigate = useNavigate();
  return (
    <div className='bg-image'>
      <h1 className='text-center text-4xl font-bold'>Home</h1>
      <button onClick={() => navigate("/practice")} className='bg-blue-500 text-white px-5 py-2 rounded-lg'>Practice</button>
    </div>
  )
}

export default MyHome;
