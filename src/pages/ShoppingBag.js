import React, { useEffect, useContext } from 'react'
import CartItem from '../components/CartItem';
import { CartContext } from '../contexts/CartContext';
import Checkout from '../components/Checkout';



const ShoppingBag = ({setActiveTab}) => {
  useEffect(() => {
    setActiveTab(null);
  }, [setActiveTab]);

  const { cart, itemQty } = useContext(CartContext)

  return (
    <section className='pt-[141px] pb-[100px] md:pt-[100px] px-10'>
      <h2 className='mt-2 text-2xl lg:text-3xl font-semibold  py-2'>Your Shopping Bag ({itemQty})</h2>
      <div className='h-full flex flex-col lg:flex-row  gap-x-5 gap-y-10'>
        <div className='w-full lg:w-3/4'>
          {cart.length === 0 && (
          <div className='text-center h-[200px] w-full flex justify-center items-center'>
            <p>Your shopping bag is empty.</p>
          </div>
          )}
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