import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsXLg } from 'react-icons/bs'
import { FiTrash2 } from 'react-icons/fi'

import CartItem from '../components/CartItem'
import { SidebarContext } from '../contexts/SidebarContext';

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext)
  return <div className={`${isOpen ? 'bg-black/20 w-full h-full z-50' : 'bg-transparent'} top-0 fixed transition-all duration-300`}>
    <div className={`${isOpen ? 'right-0' : '-right-full'} top-0 z-40  transition-all duration-300 w-full h-full md:w-[35vw] xl:w-[25vw] flex flex-col justify-between bg-red-200 fixed px-3 md:px-5`}>
      <div>
        <div onClick={handleClose} className='cursor-pointer py-6 flex justify-between'>
          <p>Shopping Bag</p>
          <BsXLg className='text-1xl right-4'/>
        </div>

        {/* footer */}
        <div className='border-t border-black bottom-0'>
          <div className='flex justify-between'>
          <p className='underline'>View bag (1)</p>
          <p>Subtotal: $150</p>
          </div>
          <button className='bg-black/80 w-full py-4 text-white hover:bg-black/70 transition uppercase'>Checkout</button>
        </div>
      </div>
    </div>
  </div>;
};

export default Sidebar;
