import React,{ useContext }  from 'react';
import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';
import { SidebarContext } from '../contexts/SidebarContext';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const {id} = useParams();
  const {products} = useContext(ProductContext);
  const {addToCart} = useContext(CartContext);
  const { triggerOpen } = useContext(SidebarContext)


  const product = products.find(item => {
    return item.id === parseInt(id);
  })

  const handleAddToCart = (product, productId) => {
    addToCart(product, productId);
    triggerOpen();
  }

  return <div className='pt-[141px] md:pt-[100px]'>
    <div className='flex flex-col items-center justify-center gap-x-10 gap-y-2 md:flex-row px-4 py-10 h-full md:h-[90vh]'>
        <div className='md:hidden'>
          <p className='font-semibold'>{product.title}</p>
          <p>${product.price}</p>
        </div>
        <div className=''>
            <img src={product.image} className='object-fit max-w-[300px] lg:max-w-[250px]'/>
        </div>
        <div className='md:w-1/3'>
          <div className='hidden md:flex flex-col'>
            <p>reviews</p>
            <p className='font-semibold'>{product.title}</p>
            <p>${product.price}</p>
          </div>
          <p className='text-sm mt-3'>{product.description}</p>
          <button onClick={() => handleAddToCart(product, product.id)} className='bg-[#282828] mt-4 w-full py-4 text-white hover:bg-black/70 transition uppercase'>Add to Cart</button>
        </div>
    </div>
  </div>;
};

export default ProductDetails;
