import React, { useContext } from 'react';
import Support from '../components/Support';
import Newsletter from '../components/Newsletter';
import Hero from '../components/Hero';
import Filter from '../components/Filter';

const Home = ({activeTab}) => {
   

  return <section className='pt-[100px]'>
    <Hero activeTab={activeTab} />
    <Filter activeTab={activeTab} />
    <Support />
    {/* <Filter activeTab={activeTab} /> */}

    {/* <div className=''>
      <Filter />
      
      <div className='block md:hidden'>
      <Newsletter />
      </div>
    </div> */}
  </section>;
};

export default Home;
