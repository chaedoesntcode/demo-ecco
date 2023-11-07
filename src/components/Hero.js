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
    <div className='bg-[#f5f5f5] bg-center bg-cover flex justify-start items-end px-5 lg:px-10' style={{ ...divStyle, height: 'calc(100vh - 128px)' }}>
        <div className='flex flex-col gap-y-2 text-white justify-centerw-full py-5 xl:w-2/3'>
            <h2 className='text-3xl font-semibold uppercase'>Unveiling Timeless Elegance</h2>
            <Link to={`/${activeTab}`} className='underline' onClick={scrollToNextSection}>Shop Now</Link>
        </div>  
    </div>
  </section>;
};

export default Hero;
