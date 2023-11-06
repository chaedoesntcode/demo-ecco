import React, {createContext, useState, useEffect } from 'react';

export const CartContext = createContext()

const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);
  const [itemQty, setItemQty] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  
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

  const removeItem = (id) => {
    const newCart = cart.filter(item => {
      return item.id !== id
    })
    setCart(newCart);
  }

  const increaseQty = (id) => {
    const item = cart.find(item => item.id === id);
    addToCart(item, id)
  }

  const decreaseQty = (id) => {
    const item = cart.find(item => { return item.id === id });
    
    if(item) {
      const newCart = cart.map(item => {
        if(item.id === id) {
          return {...item, quantity: item.quantity - 1}
        } else {
          return item;
        }

      });
      setCart(newCart);
    } 
      if(item.quantity < 2) {
        removeItem(id)
      }
    
}

  useEffect(() => {
    if(cart) {
      const totalItems = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.quantity;
      }, 0)
      setItemQty(totalItems);
    }
  }, [cart])

  useEffect(() => {
    if(cart) {
      const subtotal = cart.reduce((accumulator, currentItem) => {
        const itemTotal = currentItem.quantity * currentItem.price;
        return accumulator + itemTotal
      }, 0)
      setSubtotal(parseFloat(subtotal).toFixed(2));
    }
  }, [cart])

  return <CartContext.Provider value={{cart, addToCart, removeItem, increaseQty, decreaseQty, itemQty, subtotal}}>
    {children}
  </CartContext.Provider>
};

export default CartProvider;
