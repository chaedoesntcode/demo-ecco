import React from 'react'
import { BsBag, BsQuestionCircle, BsChat } from 'react-icons/bs'

const Support = () => {
  return (
    <div className='mt-10 grid grid-cols-1 px-5 md:grid-cols-3  md:gap-4'>
        <div className='p-10 hover:cursor-pointer hover:bg-[#f2f2f2] rounded-md transition text-center flex flex-col items-center'>
            <BsBag className='text-4xl mb-3'/>
            <h3 className='font-semibold'>HOW TO SHOP</h3>
            <p className='text-gray-700'>Guide to shopping and placing orders</p>
        </div>
        <div className='p-10 hover:cursor-pointer hover:bg-[#f2f2f2] rounded-md transition  text-center flex flex-col items-center'>
            <BsQuestionCircle className='text-4xl mb-3'/>
            <h3 className='font-semibold'>FAQS</h3>
            <p className='text-gray-700'>Answering your questions</p>
        </div>
        <div className='p-10 hover:cursor-pointer hover:bg-[#f2f2f2] rounded-md transition  text-center flex flex-col items-center'>
            <BsChat className='text-4xl mb-3'/>
            <h3 className='font-semibold'>NEED HELP?</h3>
            <p className='text-gray-700'>24/7 customer assistance</p>
        </div>
    </div>
  )
}

export default Support