import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CheckCircle, Package } from 'lucide-react';

const OrderConfirmationPage = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showCelebration, setShowCelebration] = useState(false);

  useEffect(() => {
    if (orderId) {
      fetchOrderData(parseInt(orderId));
    } else {
      setTimeout(() => navigate('/'), 2000);
    }
  }, [orderId, navigate]);

  useEffect(() => {
    if (order) {
      setShowCelebration(true);
      const timer = setTimeout(() => setShowCelebration(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [order]);

  const fetchOrderData = async (orderIdNum) => {
    try {
      setLoading(true);
      // Mock data - replace with actual API call
      const mockOrder = {
        ID: orderIdNum,
        order_number: `ORD-${10000 + orderIdNum}`,
        status: 'confirmed',
        total: 125.99,
        subtotal: 99.99,
        tax: 10.50,
        shipping: 15.50,
        CreateTime: new Date().toISOString(),
        estimated_delivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
        tracking_number: `TRK-${Math.floor(Math.random() * 1000000)}`,
        shipping_address: '123 Main St, Anytown, USA',
        notes: 'Handle with care'
      };
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      setOrder(mockOrder);
    } catch (error) {
      console.error('Error fetching order data:', error);
      setTimeout(() => navigate('/'), 3000);
    } finally {
      setLoading(false);
    }
  };

  const handleDone = () => {
    navigate('/orders');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-red-50 to-orange-50 flex items-center justify-center">
        <div className="text-center">
          <Package className="h-12 w-12 mx-auto mb-4 text-red-500 animate-spin" />
          <p className="text-red-600">Loading your order confirmation...</p>
        </div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-red-50 to-orange-50 flex items-center justify-center">
        <div className="text-center">
          <Package className="h-16 w-16 mx-auto mb-4 text-gray-400" />
          <h2 className="text-2xl font-bold text-gray-600 mb-2">Order Not Found</h2>
          <p className="text-gray-500 mb-6">We couldn't find the order you're looking for.</p>
          <button 
            onClick={() => navigate('/')} 
            className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-6 py-2 rounded-full font-medium transition-colors"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-red-50 to-orange-50 relative overflow-hidden">
      {/* Celebration Effects */}
      {showCelebration && (
        <div className="fixed inset-0 pointer-events-none z-10">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                backgroundColor: ['#f87171', '#fb7185', '#fb923c'][Math.floor(Math.random() * 3)],
                borderRadius: '50%',
                animationDuration: `${Math.random() * 3 + 2}s`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      )}
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 opacity-20">
        <div className="w-8 h-8 bg-red-400 rounded-full"></div>
      </div>
      <div className="absolute top-20 right-20 opacity-20">
        <div className="w-6 h-6 bg-pink-400 rounded-full"></div>
      </div>
      <div className="absolute bottom-20 left-20 opacity-20">
        <div className="w-4 h-4 bg-orange-400 rounded-full"></div>
      </div>
      
      <div className="relative z-20 min-h-screen flex items-center justify-center p-4">
        <div className="max-w-4xl w-full">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left side - Browser mockup with confirmation */}
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-lg shadow-2xl p-1 animate-slideInUp">
                {/* Browser header */}
                <div className="flex items-center gap-2 p-3 bg-gray-100 rounded-t-lg">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <div className="flex-1 bg-white rounded ml-4 h-6"></div>
                </div>
                
                {/* Browser content */}
                <div className="bg-white rounded-b-lg border-0 shadow-none">
                  <div className="p-8 text-center space-y-6">
                    {/* Success Icon */}
                    <div className="flex justify-center">
                      <div className="bg-red-100 p-4 rounded-full">
                        <CheckCircle className="h-12 w-12 text-red-500" />
                      </div>
                    </div>
                    
                    {/* Main message */}
                    <div className="space-y-2">
                      <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                        Your Order is Confirmed!
                      </h1>
                      <p className="text-gray-600">
                        Thanks For Your Order
                      </p>
                    </div>
                    
                    {/* Order details */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 mb-1">Order Number</p>
                      <p className="font-mono font-bold text-gray-800">#{order.order_number}</p>
                    </div>
                    
                    {/* DONE button */}
                    <button
                      onClick={handleDone}
                      className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 px-8 py-3 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                    >
                      DONE
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - Mango Character */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative">
                {/* Mango character */}
                <div className="relative w-48 h-48">
                  <div className="absolute inset-0 bg-yellow-400 rounded-full animate-bounce"></div>
                  <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-yellow-500 rounded-full"></div>
                  <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-yellow-500 rounded-full"></div>
                  <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-yellow-600 rounded-full"></div>
                </div>
                
                {/* Speech bubble */}
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl px-4 py-2 shadow-lg animate-bounce">
                  <p className="text-orange-600 font-medium whitespace-nowrap">
                    Sweet success! 🥭✨
                  </p>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                    <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-white"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="mt-12 max-w-md mx-auto">
            <div className="bg-white/80 backdrop-blur-sm border border-red-200 shadow-lg rounded-lg overflow-hidden">
              <div className="p-6 space-y-4">
                <h3 className="font-bold text-gray-800 text-center">Order Summary</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${order.subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">${order.shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-medium">${order.tax.toFixed(2)}</span>
                  </div>
                  <hr className="border-gray-200" />
                  <div className="flex justify-between font-bold text-lg text-red-600">
                    <span>Total</span>
                    <span>${order.total.toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="pt-4 space-y-2">
                  <button
                    onClick={() => navigate('/orders')}
                    className="w-full border border-red-200 hover:border-red-400 hover:bg-red-50 text-gray-700 py-2 px-4 rounded-lg transition-colors"
                  >
                    View All Orders
                  </button>
                  <button
                    onClick={() => navigate('/')}
                    className="w-full text-gray-600 hover:text-gray-800 py-2 px-4 rounded-lg transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add global styles for animations */}
      <style jsx global>{`
        @keyframes slideInUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-slideInUp {
          animation: slideInUp 0.5s ease-out;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default OrderConfirmationPage;