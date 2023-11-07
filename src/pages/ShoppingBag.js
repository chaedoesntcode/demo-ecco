import React, { useEffect, useContext } from 'react'
import CartItem from '../components/CartItem';
import { CartContext } from '../contexts/CartContext';
import Checkout from '../components/Checkout';



const ShoppingBag = ({setActiveTab}) => {
  useEffect(() => {
    setActiveTab(null);
  }, [setActiveTab]);

  const { cart, subtotal, itemQty } = useContext(CartContext)

  return (
    <section className='py-[100px]  px-10'>
      <h2 className='text-3xl font-semibold border-b border-black py-2'>Your Shopping Bag ({itemQty})</h2>
      <div className='h-full flex flex-col lg:flex-row  gap-x-5 gap-y-5 '>
        <div className='lg:2/4 xl:w-3/4 '>
          {cart.map(item => {
            return <CartItem item={item} key={item.id}/>
          })}
        </div>

        <Checkout />
      </div>
    

    </section>
  )
}

export default ShoppingBag