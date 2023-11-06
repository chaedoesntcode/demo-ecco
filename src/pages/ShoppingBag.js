import React, { useEffect, useContext } from 'react'
import CartItem from '../components/CartItem';
import { CartContext } from '../contexts/CartContext';
import AmEx from '..//img/payments/AmEx.png'
import ApplePay from '..//img/payments/ApplePay.png'
import Mastercard from '..//img/payments/Mastercard.png'
import Paypal from '..//img/payments/Paypal.png'
import Visa from '..//img/payments/Visa.png'


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
        <div className='lg:2/4 xl:w-1/4 flex flex-col gap-y-2 py-4'>
          <p className='text-2xl mb-4'>Order Summary</p>
          <div className='flex justify-between'>
            <p>Shipping</p>
            <p>Free</p>
          </div>
          <div className='flex justify-between'>
            <p>Taxes</p>
            <p>Calculated at Checkout</p>
          </div>
          <div className='flex justify-between font-semibold'>
            <p>Order Subtotal</p>
            <p>${subtotal}</p>
          </div>
          <button className=' bg-[#282828] w-full mt-4 py-4 text-white hover:bg-[#282828]/70 transition uppercase'>Checkout</button>
          <div className='flex justify-center gap-2'>
            <img src={AmEx} className='h-[30px] rounded-md' />
            <img src={ApplePay} className='h-[30px] rounded-md' />
            <img src={Mastercard} className='h-[30px] rounded-md' />
            <img src={Paypal} className='h-[30px] rounded-md' />
            <img src={Visa} className='h-[30px] rounded-md' />
          </div>
        
        </div>
      </div>
    

    </section>
  )
}

export default ShoppingBag