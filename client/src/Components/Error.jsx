import React from 'react'

const Error = ({message,status}) => {
  return (
    <div className='w-screen h-screen flex justify-center items-center text-6xl text-black font-bold flex-col gap-4'>
      <div>
        {status}
      </div>
      <div>
        {message}
      </div>
    </div>
  )
}

export default Error
