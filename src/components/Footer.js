import React from 'react';
import { Link } from 'react-router-dom';
import {BsFacebook, BsInstagram, BsPinterest} from 'react-icons/bs'

const Footer = () => {
  return <footer className=' bg-[#282828] text-white'>
    <div className='w-full flex flex-col justify-center text-center items-center gap-y-4 lg:flex-row md:justify-between py-10 px-5'>
      <p className='text-sm'><Link to='/women'>Privacy Policy</Link> | Terms & Conditions   © All Rights Reserved 2023 DemoEcco.</p>
      <div className='flex gap-x-4'>
          <a href='https://www.facebook.com' target='_blank'>
            <BsFacebook className='cursor-pointer'/>
          </a>
          <a href='https://www.instagram.com' target='_blank'>
            <BsInstagram className='cursor-pointer'/>
          </a>
          <a href='https://www.pinterest.com' target='_blank'>
            <BsPinterest className='cursor-pointer'/>
          </a>     
      </div>
    </div>
    <div className='bg-black py-2 text-center text-sm'><p>design & development by <a href='https://www.chae.dev/' target='_blank'>www.chae.dev</a></p></div>
  </footer>;
};

export default Footer;
