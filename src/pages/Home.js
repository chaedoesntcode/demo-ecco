import React, { useContext } from 'react';
import Support from '../components/Support';
import Newsletter from '../components/Newsletter';
import Hero from '../components/Hero';
import Filter from '../components/Filter';

const Home = () => {
  

  return <section className='pt-[100px]'>
    <Hero />
    <div className=''>
      <Filter />
      <Support />
      <div className='block md:hidden'>
      <Newsletter />
      </div>
    </div>
  </section>;
};

export default Home;
