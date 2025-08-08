import React, {  useEffect } from 'react';
import { useCart } from './CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { Plus, Minus, Trash2, ShoppingCart, Heart, Star } from 'lucide-react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Navbar/Footer';

const Cart = ({ isAuthenticated, onLogin, onLogout }) => {
  const {addToCart, cartItems,  totalItems,removeFromCart, isLoading, subtotal, tax, total } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const handleBeforeUnload = () => {
      console.log("Page is reloading...");
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

    if (isLoading) {
      return <div className="text-center py-10">Loading your cart...</div>;
    }
  
    if (!isLoading && totalItems === 0) {
      return (
        <div className="max-w-4xl mx-auto my-12 text-center bg-white p-16 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold text-gray-800">Your Cart is Empty</h2>
          <p className="text-gray-500 mt-2 mb-6">Looks like you haven't added any delicious mangoes yet.</p>
          <Link 
            to="/products" 
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold py-3 px-8 rounded-xl transition-transform duration-300 hover:-translate-y-1"
          >
            Start Shopping
          </Link>
        </div>
      );
    }


  return (
  <>
  <Navbar
        isAuthenticated={isAuthenticated}
        onLogin={onLogin}
        onLogout={onLogout} 
        />
    <div className=" bg-gradient-to-r from-yellow-50 to-yellow-100">
      {/* Header */}
      <div className="text-white p-6 ">
        <div className="max-w-6xl mx-auto">
          <div className="flex text-orange-500 items-center gap-3 mb-2">
            <ShoppingCart className="w-8 h-8" />
            <h1 className="text-3xl text-orange-500 font-bold">Your Mango Cart</h1>
            <span className="text-2xl">🥭</span>
          </div>
          <p className="text-orange-400">Fresh, premium mangoes delivered to your doorstep</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-6 border-2 border-orange-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <span className="text-3xl">🛒</span>
                Cart Items ({cartItems.length})
              </h2>

              {cartItems.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🥭</div>
                  <p className="text-gray-500 text-lg">Your cart is empty</p>
                  <button type='button' className="mt-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-yellow-600 transition-all duration-300">
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {([...cartItems].sort((a, b) => a.product.id - b.product.id)).map((item) => (
                    
                    <div key={item.id} className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-6 border border-orange-200 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center gap-6">
                        {/* Mango Image */}
                        <div className="bg-gradient-to-br from-orange-300 to-yellow-300 rounded-xl p-4 w-20 h-20 flex items-center justify-center text-4xl shadow-lg">
                          <img src={item.product.image} alt={`${item.product.Product_name}`} className="rounded-xl object-cover w-full h-full" />
                        </div>

                        {/* Item Details */}
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="text-xl font-bold text-gray-800">{item.product.Product_name}</h3>
                              <p className="text-orange-600 font-medium">{item.variety}</p>
                              <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                                
                                <span>{item.weight}</span>
                                
                              </div>
                            </div>
                            <button
                              onClick={() => removeFromCart(item.product.id, 'remove')}
                              type='button'
                              className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-full transition-all"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>

                          <div className="flex items-center justify-between mt-4">
                            {/* Price */}
                            <div className="flex items-center gap-2">
                              <span className="text-2xl font-bold text-green-600">${item.product.Price}</span>
                              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                              </span>
                            </div>

                            {/* Quantity Controls */}
                            <div className="flex items-center gap-3 bg-white rounded-full p-1 shadow-md">
                              <button
                                type='button'
                                onClick={() => removeFromCart(item.product.id, 'decrement')
                                }
                                className="w-8 h-8 rounded-full bg-orange-100 hover:bg-orange-200 flex items-center justify-center text-orange-600 transition-colors"
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="w-8 text-center font-semibold">{item.quantity}</span>
                              <button
                                type='button'
                                onClick={() => addToCart(item.product.id)}
                                className="w-8 h-8 rounded-full bg-orange-100 hover:bg-orange-200 flex items-center justify-center text-orange-600 transition-colors"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-6 border-2 border-orange-100 sticky top-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <span className="text-3xl">📋</span>
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>SubTotal</span>
                  <span>${subtotal}</span>
                </div>
                <div className="flex justify-between text-green-600">
                  <span>Tax</span>
                  <span>+${tax}</span>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between text-xl font-bold text-gray-800">
                    <span>Total</span>
                    <span className='text-dark'>${total}</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold py-4 px-6 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                type='button'
                onClick={()=>navigate('/checkout')}>
                Proceed to Checkout 🥭
              </button>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-green-500">✓</span>
                  <span>Fresh mangoes, hand-picked</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-green-500">✓</span>
                  <span>Fast delivery in 2-3 days</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-green-500">✓</span>
                  <span>100% quality guarantee</span>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </>
  );
};

export default Cart;