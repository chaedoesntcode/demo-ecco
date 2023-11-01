import React, { useState } from 'react'
import Hero from './Hero'
import Header from './Header'
import Filter from './Filter'

const StorePage = () => {
  const [activeTab, setActiveTab] = useState("men");

  const handleTabClick = (category) => {
    setActiveTab(category);
  };

  return (
    <div>
      <Header activeTab={activeTab} handleTabClick={handleTabClick}/>
      <Hero activeTab={activeTab} />
      <Filter activeTab={activeTab} />
    </div>
  )
}

export default StorePage