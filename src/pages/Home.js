import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product';

const Home = () => {
  const { products } = useContext(ProductContext);

  const mensProducts = products.filter(item => {
    return item.category === "men's clothing"
  }); 

  const womensProducts = products.filter( item => {
    return item.category === "women's clothing"
  });

  return <section>
    <div className='container mx-auto bg-gray-300'>
      <Product products={products} category={"men's clothing"} heading={"Men's"} />
    </div>
  </section>;
};

export default Home;
