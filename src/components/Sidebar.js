import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsXLg } from 'react-icons/bs'

import CartItem from '../components/CartItem'
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext)
  const { cart, itemQty, subtotal } = useContext(CartContext)

  return <div className={`${isOpen ? 'bg-black/20 w-full h-full z-50' : 'bg-transparent'} top-0 fixed transition-all duration-300`}>
    <div className={`${isOpen ? 'right-0' : '-right-full'} top-0 z-40  transition-all duration-300 w-full h-full md:w-[40vw] xl:w-[30vw] flex flex-col justify-between bg-white fixed`}>
      <div className='h-screen flex justify-between flex-col'>
        <div onClick={handleClose} className='px-5 cursor-pointer py-6 flex justify-between'>
          <p className='text-2xl'>Shopping Bag</p>
          <BsXLg className='text-1xl right-4'/>
        </div>
        <div className='cart h-full'>
          {cart.map(item => {
            return <CartItem item={item} key={item.id}/>
          })}
        </div>
        <div className='border-t border-black w-full py-5 px-5'>
          <div className='flex justify-between mb-3'>
          <Link to={'/shopping-bag'} onClick={handleClose}>View bag ({itemQty})</Link>
          <p className='font-semibold'>Subtotal: ${subtotal}</p>
          </div>
          <button className='bg-[#282828] w-full py-4 text-white hover:bg-[#282828]/70 transition uppercase'>Checkout</button>
        </div>
      </div>
    </div>
  </div>;
};

export default Sidebar;
