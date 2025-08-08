import React from 'react';
import CartItem from './CartItem';
import { mangoData } from './mango'; // To get product details from ID

const Cart = ({ cartItems, onUpdateQuantity, onRemoveItem }) => {
  // Handle empty cart
  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <div className="empty-cart">
          <span className="mango-icon">🥭</span>
          <h2>Your Cart is Feeling a Bit Empty!</h2>
          <p>Why not add some juicy mangos?</p>
        </div>
      </div>
    );
  }

  // Calculate total price
  const total = cartItems.reduce((sum, item) => {
    const product = mangoData.find(p => p.id === item.id);
    return sum + product.price * item.quantity;
  }, 0);

  return (
    <div className="cart-container">
      <h1>Your Juicy Cart 🥭</h1>
      <div className="cart-header">
        <div>Product</div>
        <div>Quantity</div>
        <div>Subtotal</div>
        <div>{/* Empty for remove button alignment */}</div>
      </div>
      <div className="cart-items-list">
        {cartItems.map(item => {
          const product = mangoData.find(p => p.id === item.id);
          return (
            <CartItem
              key={item.id}
              item={item}
              product={product}
              onUpdateQuantity={onUpdateQuantity}
              onRemoveItem={onRemoveItem}
            />
          );
        })}
      </div>
      <div className="cart-summary">
        <h2>Total Ripeness:</h2>
        <span className="total-price">${total.toFixed(2)}</span>
      </div>
      <div className="cart-actions">
        <button className="checkout-button">Proceed to Paradise</button>
      </div>
    </div>
  );
};

export default Cart;