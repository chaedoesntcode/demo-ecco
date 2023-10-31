import React from 'react'

const Newsletter = () => {
  return (
    <div className='bg-[#f8f8f8] w-full px-5 py-10 text-center'>
        <p className='uppercase text-2xl'>Get 15% off your first order</p>
        <p className='text-gray-700'>Stay updated with the latest trends, exclusive offers, and exciting news</p>
        <div className='mt-4'>
            <input type='email' className='px-2 w-[75%] border border-black/80 h-[45px]'/>
            <button className='bg-black text-white h-[45px] px-4'>Sign Up</button>
        </div>
        
    </div>
  )
}

export default Newsletter