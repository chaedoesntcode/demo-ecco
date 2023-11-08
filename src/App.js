import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import ShoppingBag from './pages/ShoppingBag';
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/BackToTop';

const App = () => {
  const [activeTab, setActiveTab] = useState("women");

  const handleTabClick = (category) => {
    setActiveTab(category);
  };

  console.log(window.location.pathname)

  return <div className='overflow-hidden'>
    <BrowserRouter>
      <ScrollToTop />
      <Header handleTabClick={handleTabClick} activeTab={activeTab} />
      <Routes>
        <Route  path='/' element={<Home activeTab={"women"}/>} />
        <Route  path='/:activeTab' element={<Home activeTab={activeTab}/>} />
        <Route exact path='/product/:id' element={<ProductDetails />} />
        <Route exact setActiveTab={null} path='/shopping-bag' element={<ShoppingBag setActiveTab={setActiveTab}/>} />
      </Routes>
      <Sidebar />
      <BackToTop />
      <Footer />
    </BrowserRouter>
  </div>;
};

export default App;
