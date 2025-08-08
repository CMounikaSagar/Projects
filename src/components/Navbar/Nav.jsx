import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useCart } from "../Cart/CartContext";
import LoginModal from '../login/LoginModal';

const Nav = ({ isAuthenticated, onLogout, onLogin }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { totalItems } = useCart();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleCartClick = () => {
    if (!isAuthenticated) {
      console.log("Access Token:", localStorage.getItem('access'));
      console.log(isAuthenticated);
      console.log("User is authenticated");
      setShowLoginModal(true);
    } else {
      navigate('/cart');
    }
  };

  const handleLoginSuccess = (access, refresh, id) => {
    setShowLoginModal(false);
    onLogin(access, refresh, id);
  };

  return (
    <div className=" bg-red-50">
      {/* Navbar */}
      <nav className="bg-gray-200 text-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 font-bold text-xl md:text-2xl tracking-tight flex items-center space-x-2">
              <span>🥭</span>
              <span>MangoDelights</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="hover:text-orange-500 transition duration-300">Home</a>
              <a href="#" className="hover:text-orange-500 transition duration-300">Products</a>
              <a href="#" className="hover:text-orange-500 transition duration-300">About</a>
              <a href="#" className="hover:text-orange-500 transition duration-300">Contact</a>
              <a
                href="#"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300 shadow-sm"
              >
                Shop Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md focus:outline-none"
                aria-label="Toggle mobile menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-200 pb-4 px-4 shadow-lg">
            <div className="flex flex-col space-y-3">
              <a href="#" className="block py-2 px-4 rounded hover:bg-gray-300">Home</a>
              <a href="#" className="block py-2 px-4 rounded hover:bg-gray-300">Products</a>
              <a href="#" className="block py-2 px-4 rounded hover:bg-gray-300">About</a>
              <a href="#" className="block py-2 px-4 rounded hover:bg-gray-300">Contact</a>
              <a
                href="#"
                className="mt-2 block text-center py-2 px-4 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition duration-300"
              >
                Shop Now
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>

  );
};

export default Nav;
