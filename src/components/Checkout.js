import React, { useContext } from 'react'
import AmEx from '../img/payments/AmEx.png'
import ApplePay from '../img/payments/ApplePay.png'
import Mastercard from '../img/payments/Mastercard.png'
import Paypal from '../img/payments/Paypal.png'
import Visa from '../img/payments/Visa.png'
import Affirm from '../img/payments/Affirm.svg'
import Klarna from '../img/payments/Klarna.svg'
import { CartContext } from '../contexts/CartContext'
import CheckoutButton from './CheckoutButton'

const Checkout = () => {
  const { subtotal } = useContext(CartContext);

  return (
    <>
    <div className='lg:2/4 xl:w-1/4 flex flex-col gap-y-2 py-4'>
        <p className='h3'>Order Summary</p>
        <div className='flex justify-between text-sm'>
            <p>Shipping</p>
            <p>Free</p>
        </div>
        <div className='flex justify-between text-sm'>
            <p>Taxes</p>
            <p>Calculated at Checkout</p>
        </div>
        <div className='flex justify-between font-semibold'>
            <p>Order Subtotal</p>
            <p>${subtotal}</p>
        </div>
        <CheckoutButton />
        <div className='flex flex-col text-center'>
            <p className='text-sm text-black/60'>Accepted payment methods</p>
            <div className='flex justify-center gap-2'>
                <img src={AmEx} alt='American Express logo' className='h-[25px] rounded-md' />
                <img src={ApplePay} alt='Apple Pay logo' className='h-[25px] rounded-md' />
                <img src={Mastercard} alt='Mastercard logo' className='h-[25px] rounded-md' />
                <img src={Paypal} alt='Paypal logo' className='h-[25px] rounded-md' />
                <img src={Visa} alt='Visa logo' className='h-[25px] rounded-md' />
                <img src={Affirm} alt='Affirm logo' className='h-[25px] w-[25px] rounded-md' />
                <img src={Klarna} alt='Klarna logo' className='h-[25px] rounded-md' />
            </div>
        </div>
    </div>
    </>
  )
}

export default Checkout