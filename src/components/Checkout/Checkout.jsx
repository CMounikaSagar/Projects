import { useState } from 'react';
import { useCart } from '../Cart/CartContext';
import { getCurrentUser } from '../../utils/authHelpers';
import { ShoppingCart, Minus, Plus, Truck, MapPin, User, Mail, Phone, Smartphone, Wallet, DollarSign, } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
// import Nav from '../Navbar/Nav';
import Navbar from '../Navbar/Navbar';
import Footer from '../Navbar/Footer';

export default function MangoCheckout({ isAuthenticated, onLogin, onLogout }) {
  const { addToCart, cartItems, removeFromCart, subtotal, tax, } = useCart();
  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phone_number: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    phone: '',
    paymentMethod: ''
  });

  const codCharges = formData.paymentMethod === 'cod' ? 25 : 0;
  const total = subtotal + codCharges + tax;



  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePaymentMethodSelect = (method) => {
    setFormData({ ...formData, paymentMethod: method });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requiredFields = [
      
      
      'address',
      'city',
      'state',
      'zipCode',
      'phone',
      'paymentMethod'
    ];


    const emptyField = requiredFields.find(field => !formData[field].trim());

    if (emptyField) {
      alert(`🚫 Please fill ${emptyField} required fields before placing your order.`);
      return;
    }

    const paymentMethodNames = {
      'gpay': 'Google Pay',
      'phonepe': 'PhonePe',
      'razorpay': 'Razorpay',
      'paypal': 'PayPal',
      'cod': 'Cash on Delivery'
    };
    alert(`🥭 Order placed successfully with ${paymentMethodNames[formData.paymentMethod]}! Your fresh mangoes are on their way!`);
    navigate('/orderplaced')
  };

  const paymentMethods = [
    {
      id: 'gpay',
      name: 'Google Pay',
      icon: '💳',
      bgColor: 'from-blue-400 to-blue-500',
      hoverColor: 'hover:from-blue-500 hover:to-blue-600',
      description: 'Pay with Google Pay'
    },
    {
      id: 'phonepe',
      name: 'PhonePe',
      icon: '📱',
      bgColor: 'from-purple-400 to-purple-500',
      hoverColor: 'hover:from-purple-500 hover:to-purple-600',
      description: 'Pay with PhonePe'
    },
    {
      id: 'razorpay',
      name: 'Razorpay',
      icon: '💰',
      bgColor: 'from-indigo-400 to-indigo-500',
      hoverColor: 'hover:from-indigo-500 hover:to-indigo-600',
      description: 'Credit/Debit Card, UPI, Net Banking'
    },
    {
      id: 'paypal',
      name: 'PayPal',
      icon: '🅿️',
      bgColor: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:from-blue-600 hover:to-blue-700',
      description: 'Pay with PayPal'
    },
    {
      id: 'cod',
      name: 'Cash on Delivery',
      icon: '💵',
      bgColor: 'from-green-400 to-green-500',
      hoverColor: 'hover:from-green-500 hover:to-green-600',
      description: 'Pay when you receive (+₹25 charges)'
    }
  ];

  const user = getCurrentUser();
  console.log(user);


  return (
    <div>
      <Navbar
        isAuthenticated={isAuthenticated}
        onLogin={onLogin}
        onLogout={onLogout} 
        />
      <div className="min-h-screen bg-gradient-to-r from-yellow-50 to-yellow-100">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full mb-4 shadow-lg animate-bounce">
              <span className="text-4xl">🥭</span>
            </div>
            <h1 className="text-4xl font-bold text-orange-600 mb-2 drop-shadow-lg">
              Mango Paradise
            </h1>
            <p className="text-orange-400 text-lg">Fresh tropical mangoes delivered to your door</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Checkout Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Information */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-800">Contact Information</h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail className="inline w-4 h-4 mr-2" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={user.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200 hover:shadow-md"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={user.username}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200 hover:shadow-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200 hover:shadow-md"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone className="inline w-4 h-4 mr-2" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone_number"
                      value={user.phone_number}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200 hover:shadow-md"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full flex items-center justify-center">
                    <Truck className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-800">Shipping Address</h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MapPin className="inline w-4 h-4 mr-2" />
                      Street Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200 hover:shadow-md"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200 hover:shadow-md"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                      <select
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200 hover:shadow-md"
                        required
                      >
                        <option value="">Select State</option>
                        <option value="CA">California</option>
                        <option value="FL">Florida</option>
                        <option value="TX">Texas</option>
                        <option value="NY">New York</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">ZIP Code</label>
                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200 hover:shadow-md"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone className="inline w-4 h-4 mr-2" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200 hover:shadow-md"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full flex items-center justify-center">
                    <Wallet className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-800">Payment Methods</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {paymentMethods.map((method) => (
                    <div
                      key={method.id}
                      onClick={() => handlePaymentMethodSelect(method.id)}
                      className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 hover:shadow-lg transform hover:scale-105 ${formData.paymentMethod === method.id
                        ? 'border-orange-400 bg-orange-50 shadow-lg'
                        : 'border-gray-200 hover:border-gray-300'
                        }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 bg-gradient-to-r ${method.bgColor} rounded-lg flex items-center justify-center text-xl shadow-md ${method.hoverColor} transition-all duration-200`}>
                          {method.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-800">{method.name}</h3>
                          <p className="text-sm text-gray-600">{method.description}</p>
                        </div>
                        <div className={`w-6 h-6 rounded-full border-2 ${formData.paymentMethod === method.id
                          ? 'border-orange-400 bg-orange-400'
                          : 'border-gray-300'
                          } flex items-center justify-center`}>
                          {formData.paymentMethod === method.id && (
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                          )}
                        </div>
                      </div>

                      {formData.paymentMethod === method.id && (
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {formData.paymentMethod && (
                  <div className="mt-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                    <div className="flex items-center gap-2">
                      <span className="text-green-600">✅</span>
                      <span className="text-green-800 font-medium">
                        {paymentMethods.find(m => m.id === formData.paymentMethod)?.name} selected
                      </span>
                    </div>
                    {formData.paymentMethod === 'cod' && (
                      <p className="text-sm text-green-700 mt-1">
                        Additional ₹25 charges will be applied for Cash on Delivery
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 sticky top-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full flex items-center justify-center">
                    <ShoppingCart className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-800">Order Summary</h2>
                </div>


                <div className="p-6 space-y-4">
                  {/* Cart Items */}
                  <div className="space-y-4">
                    {([...cartItems].sort((a, b) => a.product.id - b.product.id)).map((item) => (
                      <div key={item.id} className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                        <img
                          src={item.image}
                          alt={item.product.Product_name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />

                        <div className="flex-1">
                          <h4 className="font-semibold text-orange-800">{item.product.Product_name}</h4>

                          <div className="flex items-center gap-2 mt-1">
                            <button
                              size="sm"
                              variant="outline"
                              className="h-6 w-6 p-0"
                              onClick={() => removeFromCart(item.product.id, 'decrement')}
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="font-medium">{item.quantity}</span>
                            <button
                              size="sm"
                              variant="outline"
                              className="h-6 w-6 p-0"
                              onClick={() => addToCart(item.product.id)}
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                        </div>

                        <div className="text-right">
                          <p className="font-semibold text-orange-800">
                            ${(item.product.Price * item.quantity).toFixed(2)}
                          </p>
                          <button
                            size="sm"
                            variant="ghost"
                            className="text-red-500 hover:text-red-700 p-0 h-auto"
                            onClick={() => removeFromCart(item.product.id, 'remove')}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>


                <div className="space-y-3 border-t border-gray-200 pt-4">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toFixed(2)}</span>
                  </div>

                  {formData.paymentMethod === 'cod' && (
                    <div className="flex justify-between text-gray-600">
                      <span>COD Charges</span>
                      <span>₹{codCharges.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-gray-600">
                    <span>Tax</span>
                    <span>₹{tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold text-gray-800 border-t border-gray-200 pt-3">
                    <span>Total</span>
                    <span>₹{total.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={!formData.paymentMethod}
                  className={`w-full mt-6 font-bold py-4 px-6 rounded-xl transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl ${formData.paymentMethod
                    ? 'bg-gradient-to-r from-orange-400 to-amber-400 text-white hover:from-orange-500 hover:to-amber-500'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                >
                  🥭 Complete Order - ₹{total.toFixed(2)}
                </button>

                <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
                  <span className="text-green-600">🔒</span>
                  <span>Secure checkout • All payment methods supported</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}