import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Product = ({ products, category, heading }) => {
  const filteredProducts = products.filter(item => item.category === category);
  console.log(filteredProducts)
  return (
  <>
  <h2 className='font-bold text-lg uppercase text-center'>{heading}</h2>
  <div className='mt-4'>
    <Swiper navigation={true} modules={[Navigation]} slidesPerView={3} spaceBetween={30}>
    {filteredProducts.map(product => (
      <SwiperSlide key={product.id}>
        <div className=' h-[300px] text-left' key={product.id}>
          <div className='h-[200px] mb-2 py-4 bg-red bg-white  flex justify-center items-center'>
            <img src={product.image} className='object-fit h-full'/>
          </div>
          <p className='font-semibold'>{product.title}</p>
          <p>${product.price}</p>
        </div>
      </SwiperSlide>
    ))}
    </Swiper>
  </div>
  </>
  );
};

export default Product;
