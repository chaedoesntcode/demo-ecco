import React from 'react';

const Product = ({ products, category, heading }) => {
  const filteredProducts = products.filter(item => item.category === category);
  console.log(filteredProducts)
  return (
  <>
  <h2>{heading}</h2>
  <div className='grid md:grid-cols-3 lg:grid-cols-5 gap-6'>
    {filteredProducts.map(product => (
      <div className='w-full h-[300px] bg-orange-200 mb-4' key={product.id}>
      <img src={product.image} />
      <p>{product.title}</p>
      <p>{product.price}</p>
    </div>
    ))}
  </div>
  </>
  );
};

export default Product;
