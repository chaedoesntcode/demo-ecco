import React, { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { BsFillHandbagFill } from 'react-icons/bs'

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const [ isActive, setIsActive ] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 30 ? setIsActive(true) : setIsActive(false);
    })
  }, [])

  return (
  <>
  <header className=''>
    <div className=' bg-black text-white text-center py-1 uppercase'>Free Returns & Exchanges on All Orders</div>
    <div className={`${isActive ? 'border-b border-[#cdc2c8] fixed top-0' : 'absolute'} bg-white transition-all z-40 w-full`}>
      <div className='px-10 h-[100px] flex justify-between items-center'>
       <p className='text-3xl'>DemoEcco</p>
        <div  onClick={() => setIsOpen(!isOpen)} className='cursor-pointer'>
        <BsFillHandbagFill className='text-3xl'/>
        </div>
      </div>
    </div>
  </header>
  </>);
};

export default Header;
