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
    const nextSection = document.getElementById('products-slider'); // Replace 'next-section' with the actual ID of the next section
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return <section>
    <div className='bg-[#f5f5f5] bg-center bg-cover  flex flex-col justify-end text-white p-2' style={{ ...divStyle, height: 'calc(100vh - 128px)' }}>
      <h2 className='text-4xl uppercase'>Unveiling Timeless Elegance</h2>
      <Link to={`/${activeTab}`} className='underline' onClick={scrollToNextSection}>Shop Now</Link>
    </div>
    
  </section>;
};

export default Hero;
