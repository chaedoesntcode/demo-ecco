import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

const Product = ({ products, category, heading }) => {
  const {addToCart} = useContext(CartContext);

  const filteredProducts = products.filter(item => item.category === category);
  console.log(filteredProducts)
  return (
  <div className='mt-10 px-5'>
    <h2 className='font-bold text-lg uppercase text-center'>{heading}</h2>
    <div className='mt-4'>
    <Swiper navigation={true} modules={[Navigation]} slidesPerView={1} spaceBetween={30} breakpoints={{
          768: {
            slidesPerView: 3 
          }
        }}>
    {filteredProducts.map(product => (
      <SwiperSlide key={product.id}>
        <div className='group min-h-[300px] text-center relative' key={product.id}>
          <div className='h-[200px] mb-2 py-4 bg-red bg-white  flex justify-center items-center'>
            <img src={product.image} className='object-fit h-full group-hover:scale-110 transition duration-200'/>
          </div>
          
          <p className='font-semibold'>{product.title}</p>
          <p>${product.price}</p>
          <div className='pt-2 flex flex-col gap-2 items-center justify-start md:opacity-0 md:group-hover:opacity-100 transition duration-200'>
            <button onClick={() => addToCart(product, product.id)} className='bg-[#282828] rounded-md w-full py-4 text-white hover:bg-black/70 transition uppercase'>Add to Cart</button>
            <Link to={`/product/${product.id}`} className='underline'>View Details</Link>
          </div>
        </div>
      </SwiperSlide>
    ))}
    </Swiper>
    </div>
  </div>
  );
};

export default Product;
