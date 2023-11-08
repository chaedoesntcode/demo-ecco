import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

const CartItem = ({item}) => {
  const { removeItem, increaseQty, decreaseQty } = useContext(CartContext);

  const { id, title, image, price, quantity }  = item;

  return <div>
      <div className='px-5 w-full min-h-[150px] flex gap-x-2 items-center border-b border-secondary py-2'>
        <Link to={`/product/${id}`}>
          <img src={image} alt={title} className='max-w-[60px]'/>
        </Link>
        <div className='w-full flex flex-col gap-y-1'>
          <Link to={`/product/${id}`} className='font-semibold'>{title}</Link>
          <div className='flex justify-between'>
            <div className=''>
              <button onClick={() => decreaseQty(id)} className='border h-10 w-10 hover:bg-secondary transition'>-</button>
              <input className='border-t border-b h-10 w-10 text-center' disabled type='number' min='1' value={quantity !== undefined ? quantity : 0} onChange={(e) => {e.target.value = quantity}} style={{ color: '#000', opacity: 0.9, borderRadius: '0' }}/>
              <button onClick={() => increaseQty(id)}  className='hover:bg-secondary transition border h-10 w-10'>+</button>
            </div>
            <div className='flex gap justify-center'>       
                <p className='font-semibold'>${parseFloat(price * quantity).toFixed(2)}</p>
            </div>
          </div>
          <div className=''>
            <span onClick={() => removeItem(id)} className='inline cursor-pointer text-sm border-b border-transparent hover:border-black transition duration-300'>Remove</span>
          </div>
        </div>
      </div>
  </div>;
};

export default CartItem;
