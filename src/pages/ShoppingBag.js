import React, { useEffect, useContext } from 'react'
import CartItem from '../components/CartItem';
import { CartContext } from '../contexts/CartContext';


const ShoppingBag = ({setActiveTab}) => {
  useEffect(() => {
    // Set the activeTab to null when the Shopping Bag route is accessed
    setActiveTab(null);
  }, [setActiveTab]);

  const { cart } = useContext(CartContext)


  return (
    <div className='pt-[100px] bg-orange-200'>
      <h2>Shopping Bag</h2>
      <div className='h-full'>
          {cart.map(item => {
            return <CartItem item={item} key={item.id}/>
          })}
        </div>
    </div>
  )
}

export default ShoppingBag