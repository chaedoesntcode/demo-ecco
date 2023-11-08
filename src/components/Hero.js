import React from 'react';
import WomanImg from '../img/woman_hero.jpg';
import ManImg from '../img/man_hero.jpg';
import { Link } from 'react-router-dom';

const Hero = ({ activeTab }) => {
  const heroImages = {
    women: WomanImg,
    men: ManImg,
  }

  const img = heroImages[activeTab];

  const divStyle = {
    backgroundImage: `url(${img})`,
  };

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('products-slider');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return <section>
    <div className='bg-[#f5f5f5] bg-center bg-cover flex justify-start items-end px-5 lg:px-10 h-[calc(100svh-128px)]' style={divStyle}>
        <div className='flex flex-col text-white justify-center w-full py-5 xl:w-2/3'>
            <h2 className='h2'>Unveiling Timeless Elegance</h2>
            <Link to={`/${activeTab}`} className='underline text-lg' onClick={scrollToNextSection}>Shop Now</Link>
        </div>  
    </div>
  </section>;
};

export default Hero;
