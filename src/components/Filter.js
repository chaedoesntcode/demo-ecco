import React, { useContext } from 'react'
import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product';


const Filter = ({ activeTab }) => {

  const { products } = useContext(ProductContext);
  
  const filteredProducts = activeTab === 'women' ? 
    products.filter(item => item.category === "women's clothing") :
    products.filter(item => item.category === "men's clothing");

  return (
    <div id='products-slider'>
      <Product products={filteredProducts} category={activeTab === 'men' ? "men's clothing" : "women's clothing"} />
    </div>
  )
}

export default Filter