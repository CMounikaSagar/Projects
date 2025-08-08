import React from 'react';

const CartItem = ({ item, product, onUpdateQuantity, onRemoveItem }) => {
  return (
    <div className="cart-item">
      <img src={product.image} alt={product.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h3>{product.name}</h3>
        <p>${product.price.toFixed(2)}</p>
      </div>
      <div className="cart-item-quantity">
        <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
      </div>
      <div className="cart-item-subtotal">
        ${(product.price * item.quantity).toFixed(2)}
      </div>
      <div className="cart-item-remove">
        <button onClick={() => onRemoveItem(item.id)}>
          ×
        </button>
      </div>
    </div>
  );
};

export default CartItem;