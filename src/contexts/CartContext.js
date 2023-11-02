import React, {createContext, useState, useEffect } from 'react';

export const CartContext = createContext()

const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);
  
  const addToCart = (product, id) => {
    const newItem = {...product, quantity: 1}

    // if item is already in cart add one on addToCart
    const cartItem = cart.find((item) => {
      return item.id === id;
    })

    if(cartItem) {
      const newCart = [...cart].map(item => {
        if (item.id === id) {
          return {...item, quantity: cartItem.quantity + 1}
        } else {
          return item;
        }
      })
      setCart(newCart);
    } else {
      setCart([...cart, newItem])
    }
  }

    console.log('cart: ',cart)

  return <CartContext.Provider value={{cart, addToCart}}>
    {children}
  </CartContext.Provider>
};

export default CartProvider;
