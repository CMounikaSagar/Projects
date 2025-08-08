import { createContext, useContext, useEffect, useState } from 'react';

import apiClient from '../../api/apiClient'; // Your axios instance

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cartTotal, setCartTotal] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [toast, setToast] = useState('');
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);

  // ✅ Fetch cart from backend
  const fetchCartItems = async () => {
    try {
      setIsLoading(true);
      const res = await apiClient.get('');
      const items = res.data.cart_items;
      setCartItems(items);
      setCartTotal(res.data.total_price);
      setSubtotal(res.data.subtotal);
      setTax(res.data.tax);
      setTotal(res.data.total);
      setTotalItems(items.reduce((sum, item) => sum + item.quantity, 0));
    } catch (err) {
      console.error("Failed to fetch cart:", err);
    } finally {
      setIsLoading(false);
    }
  };

  // ✅ Add to cart
  const addToCart = async (productId) => {
    try {
      const response = await apiClient.post('', { product_id: productId });
      console.log(response);
      setToast(`${response.data.product.Product_name} successfully added to cart`);
      await fetchCartItems(); // Refresh cart
    } catch (err) {
      console.error("Add failed:", err);
    }
  };

  // ✅ Remove/decrement item from cart
  const removeFromCart = async (productId, action = 'remove') => {
    try {
      await apiClient.delete('', {
        data: { product_id: productId, action }
      });
      await fetchCartItems(); // ❗ This is what was missing
    } catch (err) {
      console.error("Remove failed:", err);
    }
  };

  // ✅ Load cart on first render
  useEffect(() => {
    fetchCartItems();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartTotal,
        totalItems,
        isLoading,
        subtotal,
        tax,
        total,
        addToCart,
        toast,
        setToast,
        removeFromCart,
        fetchCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
