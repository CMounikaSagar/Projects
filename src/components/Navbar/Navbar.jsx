import React, { useState } from 'react';
import { useCart } from "../Cart/CartContext";
import { Menu, X, Search, User, ShoppingCart, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import LoginModal from '../login/LoginModal';


const  Navbar =  ({ isAuthenticated, onLogout, onLogin }) => {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const { totalItems } = useCart();
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const navigate = useNavigate();
    

    const menuItems = [
        { name: 'Home', href: '/' },
        { name: 'store', href: '/categories' },
        // { name: 'cart', href: '#about' },
        // { name: 'Contact', href: '#contact' }
    ];

   
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            console.log('Searching for:', searchQuery);
            navigate(`/search?q=${searchQuery.trim()}`); // Example of programmatic navigation
            setSearchQuery('');
        
        }
    };

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

    const getNavLinkClasses = ({ isActive }) => {
        const baseClasses = "px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200";
        if (isActive) {
            return `${baseClasses} bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md`;
        }
        return `${baseClasses} text-gray-700 hover:text-orange-600`;
    };

    const getMobileNavLinkClasses = ({ isActive }) => {
        const baseClasses = "block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 hover:bg-gradient-to-r hover:from-orange-100 hover:to-amber-100 hover:text-orange-700 transform hover:translate-x-2";
        if(isActive) {
            return `${baseClasses} bg-gradient-to-r from-orange-500 to-amber-500 text-white`;
        }
        return `${baseClasses} text-gray-700`;
    };

    return (
        <>
            <div>
                {/* Navbar */}
                <nav className="bg-white/95 backdrop-blur-sm shadow-lg border-b border-orange-100 sticky top-0 z-50">
                    <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-16">

                            {/* Logo - Left Corner */}
                            <div className="flex items-center">
                                <div className="flex items-center gap-3">
                                    {/* Mango Icon */}
                                    <div className="relative">
                                        <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 via-orange-400 to-red-500 rounded-full transform rotate-12 shadow-md">
                                            <div className="absolute -top-1 right-1 w-2 h-3 bg-green-500 rounded-full transform -rotate-12"></div>
                                        </div>
                                    </div>
                                    <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                                        MangoDelights
                                    </h1>
                                </div>
                            </div>

                            {/* Desktop Navigation - Right Corner */}
                            <div className="hidden md:flex items-center space-x-6">
                                {/* Search Bar */}
                                <div className="relative">
                                    <form onSubmit={handleSearchSubmit} className="relative">
                                        <input
                                            type="text"
                                            placeholder="Search mangoes..."
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            onFocus={() => setIsSearchFocused(true)}
                                            onBlur={() => setIsSearchFocused(false)}
                                            className={`
                      w-64 pl-10 pr-4 py-2 rounded-full border-2 transition-all duration-200
                      focus:outline-none focus:ring-2 focus:ring-orange-200
                      ${isSearchFocused || searchQuery
                                                    ? 'border-orange-300 bg-white shadow-md'
                                                    : 'border-gray-200 bg-gray-50'
                                                }
                    `}
                                        />
                                        <Search className={`
                    absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 transition-colors duration-200
                    ${isSearchFocused || searchQuery ? 'text-orange-500' : 'text-gray-400'}
                  `} />
                                    </form>
                                </div>

                                {/* Navigation Items */}
                                <div className="flex items-center space-x-6">
                                    {menuItems.map((item) => (
                                        <NavLink
                                            key={item.name}
                                            to={item.href}
                                            className={getNavLinkClasses}>
                                                {item.name}
                                        </NavLink>
                                    ))}

                                    {/* Cart Icon */}
                                    <button
                                        onClick={handleCartClick}
                                        className="relative p-2 rounded-full hover:bg-orange-100 transition-all duration-200 transform hover:scale-110 group">
                                        <ShoppingCart className="w-5 h-5 text-gray-700 group-hover:text-orange-600" />
                                        {totalItems > 0 && (
                                            <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold animate-pulse">
                                                {totalItems}
                                            </span>
                                        )}
                                    </button>

                                    {/* Profile Icon */}
                                    <button
                                        onClick={() => { navigate("/profile") }}
                                        className="p-2 rounded-full hover:bg-orange-100 transition-all duration-200 transform hover:scale-110 group"
                                    >
                                        <User className="w-5 h-5 text-gray-700 group-hover:text-orange-600" />
                                    </button>

                                    {/* Logout Icon */}
                                    <button
                                        onClick={onLogout}
                                        className="p-2 rounded-full hover:bg-red-100 transition-all duration-200 transform hover:scale-110 group"
                                    >
                                        <LogOut className="w-5 h-5 text-gray-700 group-hover:text-red-600" />
                                    </button>
                                </div>
                            </div>

                            {/* Mobile menu button */}
                            <div className="md:hidden">
                                <button
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-colors duration-200"
                                >
                                    {isMobileMenuOpen ? (
                                        <X className="block h-6 w-6" />
                                    ) : (
                                        <Menu className="block h-6 w-6" />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-sm border-t border-orange-100">
                            {/* Mobile Search */}
                            <div className="px-3 py-2">
                                <form onSubmit={handleSearchSubmit} className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search mangoes..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full pl-10 pr-4 py-2 rounded-full border-2 border-gray-200 focus:border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-200 bg-gray-50 focus:bg-white transition-all duration-200"
                                    />
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                </form>
                            </div>

                            {menuItems.map((item) => (
                                <NavLink
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)} 
                                    className={getMobileNavLinkClasses}
                                >
                                    {item.name}
                                </NavLink>
                            ))}

                            {/* Mobile Action Buttons */}
                            <div className="pt-4 pb-2 px-3 border-t border-orange-100">
                                <div className="flex items-center justify-around space-x-4">
                                    {/* Cart Button */}
                                    <button
                                        onClick={handleCartClick}
                                        className="flex items-center space-x-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-lg hover:bg-orange-200 transition-all duration-200 transform hover:scale-105"
                                    >
                                        <ShoppingCart className="w-4 h-4" />
                                        <span className="text-sm font-medium">Cart</span>
                                        {totalItems > 0 && (
                                            <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                                                {totalItems}
                                            </span>
                                        )}
                                    </button>

                                    {/* Profile Button */}
                                    <button
                                        onClick={() => navigate("/profile")}
                                        className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-200 transform hover:scale-105"
                                    >
                                        <User className="w-4 h-4" />
                                        <span className="text-sm font-medium">Profile</span>
                                    </button>

                                    {/* Logout Button */}
                                    <button
                                        onClick={onLogout}
                                        className="flex items-center space-x-2 px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-all duration-200 transform hover:scale-105"
                                    >
                                        <LogOut className="w-4 h-4" />
                                        <span className="text-sm font-medium">Logout</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            {showLoginModal && (
                <LoginModal onClose={() => setShowLoginModal(false)} onLogin={handleLoginSuccess} />
            )}
            </div>
        </>



    );
}

export default Navbar;