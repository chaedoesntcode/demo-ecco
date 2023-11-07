import React from 'react';
import Support from '../components/Support';
import Newsletter from '../components/Newsletter';
import Hero from '../components/Hero';
import Filter from '../components/Filter';
import AboutUs from '../components/AboutUs';

const Home = ({activeTab}) => {
   

  return <section className='pt-[100px]'>
    <Hero activeTab={activeTab} />
    <Filter activeTab={activeTab} />
    <AboutUs />
    <Support />
    <Newsletter />
  </section>;
};

export default Home;
