import React from 'react'

const Newsletter = () => {
  return (
    <div className='bg-secondary mt-10 w-full px-10 py-20 text-center'>
        <p className='uppercase text-2xl'>Get 15% off your first order</p>
        <p className='text-gray-700'>Stay updated with the latest trends, exclusive offers, and exciting news</p>
        <div className='mt-4 w-full md:w-3/4 lg:w-2/4 mx-auto flex items-center justify-center'>
            <input type='email' placeholder='Enter email' className='px-2 md:w-[75%] rounded-l-md border border-primary h-[45px]'/>
            <button className='bg-primary text-white h-[45px] px-4 rounded-r-md  uppercase'>Sign Up</button>
        </div>
        
    </div>
  )
}

export default Newsletter