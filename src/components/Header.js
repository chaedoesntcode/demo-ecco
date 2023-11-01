import React, { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { AiOutlineShopping, AiOutlineGlobal } from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Header = ({activeTab, handleTabClick}) => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const [ isActive, setIsActive ] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 30 ? setIsActive(true) : setIsActive(false);
    })
  }, [])

  return (
  <>
  <header className='text-[#282828]'>
    <div className=' bg-[#282828] text-white text-center py-1 uppercase text-sm'>Free Returns & Exchanges on All Orders</div>
    <div className={`${isActive ? 'border-b shadow-sm border-[#f2f2f2] fixed top-0' : 'absolute'} bg-white transition-all z-40 w-full`}>
      <div className='px-5 md:px-10 h-[100px] flex justify-between items-center'>
        
          <div className='hidden md:flex gap-4'>
            <Link onClick={() => handleTabClick("women")} style={{ fontWeight: activeTab === 'women' ? '700' : 'normal' }} className='hover:bg-[#f2f2f2] p-3 rounded-md transition'>Women</Link>
            <Link onClick={() => handleTabClick("men")} style={{ fontWeight: activeTab === 'men' ? '700' : 'normal' }} className='hover:bg-[#f2f2f2] p-3 rounded-md transition'>Men</Link>
          </div>
          <p className='text-3xl font-bold'>DemoEcco</p>
        
        

        {/* bag and language change */}
        <div className='flex justify-center items-center md:gap-4'>
          <div  onClick={() => setIsOpen(!isOpen)} className='cursor-pointer hover:bg-[#f2f2f2] p-2 rounded-md transition'>
            <AiOutlineShopping className='text-3xl'/>
          </div>
          <div className='cursor-pointer hover:bg-[#f2f2f2] p-2 rounded-md transition'>
           <AiOutlineGlobal className='text-3xl '/>
          </div>
        </div>
      </div>
      <div className='flex md:hidden py-2 justify-center gap-4 border-t border-[#f2f2f2]'>
            <Link onClick={() => handleTabClick("women")} style={{ fontWeight: activeTab === 'women' ? '700' : 'normal' }}>Women</Link>
            <Link onClick={() => handleTabClick("men")} style={{ fontWeight: activeTab === 'men' ? '700' : 'normal' }}>Men</Link>
      </div>
    </div>
  </header>
  </>);
};

export default Header;
