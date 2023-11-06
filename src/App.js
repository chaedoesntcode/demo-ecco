import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import ShoppingBag from './pages/ShoppingBag';

const App = () => {
  const [activeTab, setActiveTab] = useState("women");

  const handleTabClick = (category) => {
    setActiveTab(category);
  };

  console.log(window.location.pathname)

  return <div className='overflow-hidden'>
    <BrowserRouter>
      <Header handleTabClick={handleTabClick} activeTab={activeTab} />

      <Routes>
        <Route  path={`/${activeTab}`} element={<Home activeTab={activeTab}/>} />
        <Route exact path='/product/:id' element={<ProductDetails />} />
        <Route exact setActiveTab={null} path='/shopping-bag' element={<ShoppingBag setActiveTab={setActiveTab}/>} />
      </Routes>
      <Sidebar />
      <Footer />
    </BrowserRouter>
  </div>;
};

export default App;
