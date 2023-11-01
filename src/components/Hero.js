import React from 'react';
import WomanImg from '../img/woman_hero.jpg';
import { Link } from 'react-router-dom';

const Hero = () => {
  return <section>
    <div className='bg-[#f5f5f5] bg-hero bg-center bg-cover scale-90 flex flex-col justify-end text-white p-2' style={{ height: 'calc(100vh - 132px)' }}>
      <h2 className='text-3xl uppercase'>Unveiling Timeless Elegance</h2>
      <Link to='/' className='underline'>Shop Now</Link>
    </div>
    
  </section>;
};

export default Hero;
