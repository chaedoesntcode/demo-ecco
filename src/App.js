import React, {useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const [activeTab, setActiveTab] = useState("women");

  const handleTabClick = (category) => {
    setActiveTab(category);
  };

  return <div className='overflow-hidden'>
    <BrowserRouter>
      <Header handleTabClick={handleTabClick} activeTab={activeTab}/>
      <Routes>
        <Route path='/' element={<Home activeTab={activeTab}/>} />
        <Route path='/product/:id' element={<ProductDetails />} />
      </Routes>
      <Sidebar />
      <Footer />
    </BrowserRouter>
  </div>;
};

export default App;
