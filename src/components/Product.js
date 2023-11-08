import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import StarRating from './StarRating';

const Product = ({ products, category }) => {
  const filteredProducts = products.filter(item => item.category === category);
  console.log(filteredProducts)
  return (
  <div className='py-5 px-5'>
    <div>
    <Swiper navigation={true} modules={[Navigation]} slidesPerView={1} spaceBetween={30} breakpoints={{
          768: {
            slidesPerView: 3 
          }
        }}>
    {filteredProducts.map(product => (
      <SwiperSlide key={product.id}>
        <div className='group min-h-[300px] relative' key={product.id}>
        <Link to={`/product/${product.id}`} className=''>
          <div className='h-[200px] mb-2 py-4 bg-red bg-white flex justify-center items-center'>
            <img src={product.image} alt={product.title} className='object-fit h-full group-hover:scale-110 transition duration-200'/>
          </div>
          <div className='w-3/4 mx-auto'>
            <p className='font-semibold'>{product.title}</p>
            <p>${product.price.toFixed(2)}</p>
            <StarRating rating={product.rating.rate} count={product.rating.count} />
          </div>
          </Link>
        </div>
      </SwiperSlide>
    ))}
    </Swiper>
    </div>
  </div>
  );
};

export default Product;
