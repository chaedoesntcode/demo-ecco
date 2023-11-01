import React, {useContext, useState} from 'react'
import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product';


const Filter = () => {

  const [activeTab, setActiveTab] = useState("women");
  const { products } = useContext(ProductContext);

  const handleTabClick = (category) => {
    setActiveTab(category);
  };
  
  const filteredProducts = activeTab === 'women' ? 
    products.filter(item => item.category === "women's clothing") :
    products.filter(item => item.category === "men's clothing");

  return (
    <div>
      <div className="flex justify-center gap-4 pt-10">
        <button onClick={() => handleTabClick("women")} className='uppercase' style={{ fontWeight: activeTab === 'women' ? '500' : 'normal' }}>
          Women
        </button>
        <button onClick={() => handleTabClick("men")} className='uppercase' style={{ fontWeight: activeTab === 'men' ? '500' : 'normal' }}>
          Men
        </button>
      </div>
      <Product products={filteredProducts} category={activeTab === 'men' ? "men's clothing" : "women's clothing"} />
    </div>
  )
}

export default Filter