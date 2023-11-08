import React, { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import { AiOutlineShopping } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import UserDropdown from './UserDropdown';

const Header = ({activeTab, handleTabClick}) => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemQty } = useContext(CartContext);

  const [ isActive, setIsActive ] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 30 ? setIsActive(true) : setIsActive(false);
    })
  }, [])

  return (
  <>
  <header>
    <div className=' bg-primary text-white text-center py-1 uppercase text-sm'>Free Returns & Shipping on All Orders</div>
    <div className={`${isActive ? 'border-b shadow-sm border-secondary fixed top-0' : 'absolute'} bg-white transition-all z-40 w-full`}>
      <div className='px-5 md:px-10 h-[100px] flex justify-between items-center'>
          <div className='hidden md:flex gap-4'>
            <Link to='/women' onClick={() => handleTabClick("women")} style={{ fontWeight: activeTab === 'women' ? '700' : 'normal' }} className='hover:bg-secondary p-3 rounded-md transition'>Women</Link>
            <Link to='/men' onClick={() => handleTabClick("men")} style={{ fontWeight: activeTab === 'men' ? '700' : 'normal' }} className='hover:bg-secondary p-3 rounded-md transition'>Men</Link>
          </div>
          <Link  to='/women' onClick={() => handleTabClick("women")} className='h2'>DemoEcco</Link>
        <div className='flex justify-center items-center gap-2 md:gap-4'>
          <div  onClick={() => setIsOpen(!isOpen)} className='relative cursor-pointer hover:bg-secondary p-2 rounded-md transition'>
            <AiOutlineShopping className='text-4xl'/>
            <div className='absolute top-2 right-[2px] text-xs w-[20px] h-[20px] flex justify-center items-center bg-primary text-white rounded-full'>{itemQty}</div>
          </div>
          <div className='cursor-pointer hover:bg-secondary p-2 rounded-md transition'>
            <UserDropdown />
          </div>
        </div>
      </div>
      <div className='flex md:hidden py-2 justify-center gap-4 border-t border-secondary'>
            <Link to='/women' onClick={() => handleTabClick("women")} style={{ fontWeight: activeTab === 'women' ? '700' : 'normal' }}>Women</Link>
            <Link to='/men' onClick={() => handleTabClick("men")} style={{ fontWeight: activeTab === 'men' ? '700' : 'normal' }}>Men</Link>
      </div>
    </div>
  </header>
  </>);
};

export default Header;
