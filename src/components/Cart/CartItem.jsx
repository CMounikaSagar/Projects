import React from 'react';
import { useCart } from './CartContext';
import { TrashIcon } from '@heroicons/react/24/outline'; // Optional: for a nice icon

// To use heroicons: npm install @heroicons/react
export function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center py-6 border-b border-gray-200 gap-4">
      {/* Product Image */}
      <img src={item.image} alt={item.product.Product_name} className="w-24 h-24 object-cover rounded-lg" />

      {/* Product Details */}
      <div className="flex-grow">
        <h3 className="text-lg font-semibold text-gray-800">{item.Product_name}</h3>
        <p className="text-gray-500">${item.product.Price.toFixed(2)}</p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => removeFromCart(item.product.id)}
          className="w-8 h-8 flex items-center justify-center text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
        >
          -
        </button>
        <span className="font-medium text-lg">{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="w-8 h-8 flex items-center justify-center text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
        >
          +
        </button>
      </div>

      {/* Total Price */}
      <div className="w-24 text-right">
        <p className="text-lg font-semibold text-gray-800">${(item.product.Price * item.quantity).toFixed(2)}</p>
      </div>

      {/* Remove Button */}
      <button onClick={() => {
        console.log("Button clicked for item:", item);
        console.log("ID being passed to removeFromCart:", item.product.id);
        removeFromCart(item.product.id)}} className="text-gray-400 hover:text-red-500 transition-colors">
        <TrashIcon className="w-6 h-6" />
      </button>
    </div>
  );
}