import React from 'react'
import loader from './Images/loading1.gif'
const Loader = () => {
  return (
    <div className='w-[100%] h-screen flex justify-center items-center'>
      <img src={loader} alt="" />
    </div>
  )
}

export default Loader
