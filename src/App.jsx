import React from 'react'
import './App.css'
import './index.css'
import ReactDOM from 'react-dom/client';
import Register1 from './components/register/Register1';
import { Router, Route, Routes } from 'react-router-dom'
import Login1 from './components/login/Login1'
import Hero from './components/dashboard/Hero';
import Footer from './components/Navbar/Footer';
import { CartProvider } from './components/Cart/CartContext';
import ProductCategory from './components/Category/ProductCategory';
import Cart from './components/Cart/Cart';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import ProfilePage from './components/profile/ProfilePage';
import Checkout from './components/Checkout/Checkout';
import OrderConfirm from './components/Checkout/OrderConfirm';
import RedirectIfAuth from './utils/RedirectIfAuth';
import ProtectedRoute from './utils/ProtectedRoute';



function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('access');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (access, refresh, id) => {
    console.log("refresh token:", refresh);
    localStorage.setItem('access', access)
    localStorage.setItem('refresh', refresh)
    localStorage.setItem('id', id)
    setIsAuthenticated(true);

  }

  const handleLogout = () => {
    // We can skip the API call for simplicity, but it's good practice.
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    localStorage.removeItem('id');
    setIsAuthenticated(false);
    navigate('/login'); // Or navigate to home page
  };

  return (
    <div className='bg-dark-100'>
      <CartProvider>
        <Routes>
          <Route path="/register" element={<Register1 />} />
          <Route path="/login" element={
            <RedirectIfAuth isAuthenticated={isAuthenticated}>
              <Login1 onLogin={handleLogin} />
            </RedirectIfAuth>
            }
               />
          <Route path="" element={
            // <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Hero
              isAuthenticated={isAuthenticated}
              onLogin={handleLogin}
              onLogout={handleLogout}
            />
            // </ProtectedRoute>
          } />
          <Route path="/categories" element={<ProductCategory
            isAuthenticated={isAuthenticated}
            onLogin={handleLogin}
            onLogout={handleLogout} />} />
          <Route path="/categories/:id" element={<ProductCategory
            isAuthenticated={isAuthenticated}
            onLogin={handleLogin}
            onLogout={handleLogout} />} />
          <Route path="/cart" element={<Cart
            isAuthenticated={isAuthenticated}
            onLogin={handleLogin}
            onLogout={handleLogout} />} />
          <Route path="/checkout" element={<Checkout
            isAuthenticated={isAuthenticated}
            onLogin={handleLogin}
            onLogout={handleLogout} />} />
          <Route path="/profile" element={<ProfilePage
            isAuthenticated={isAuthenticated}
            onLogin={handleLogin}
            onLogout={handleLogout} />} />
          <Route path='/orderconfirm' element={<OrderConfirm />} />
          {/* Add other routes here */}
        </Routes>

      </CartProvider>
    </div>

  )
}

export default App
