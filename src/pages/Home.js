import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product';
import Support from '../components/Support';

const Home = () => {
  const { products } = useContext(ProductContext);

  const mensProducts = products.filter(item => {
    return item.category === "men's clothing"
  }); 

  const womensProducts = products.filter( item => {
    return item.category === "women's clothing"
  });

  return <section>
    <div className='container mx-auto p-10'>
      <Product products={products} category={"men's clothing"} heading={"Shop Men's"} />
      <Product products={products} category={"women's clothing"} heading={"Shop Women's"} />
      <Support />
    </div>
  </section>;
};

export default Home;
