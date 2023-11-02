import React from 'react'

const Newsletter = () => {
  return (
    <div className='bg-[#f2f2f2] w-full px-10 py-20 text-center'>
        <p className='uppercase text-2xl'>Get 15% off your first order</p>
        <p className='text-gray-700'>Stay updated with the latest trends, exclusive offers, and exciting news</p>
        <div className='mt-4 md:w-3/4 lg:w-2/4 mx-auto'>
            <input type='email' placeholder='Enter email' className='px-2 md:w-[75%] rounded-l-md border border-black/80 h-[45px]'/>
            <button className='bg-[#282828] text-white h-[45px] px-4 rounded-r-md uppercase'>Sign Up</button>
        </div>
        
    </div>
  )
}

export default Newsletter