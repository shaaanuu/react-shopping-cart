import { useState } from "react";

export function useCart() {
  const [cartProducts, setCartProducts] = useState([]);

  function addToCart(product) {
    console.log("Adding to cart:", product);
    setCartProducts((prevCart) => [...prevCart, product]);
  }

  function removeFromCart(product) {
    console.log("Removing from cart:", product);
    const index = cartProducts.findIndex((item) => item === product);
    if (index !== -1) {
      const updatedCart = [...cartProducts];
      updatedCart.splice(index, 1);
      setCartProducts(updatedCart);
    }
  }

  return { cartProducts, addToCart, removeFromCart };
}
