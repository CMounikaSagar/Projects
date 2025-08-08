import { useState } from 'react';
import { ShoppingCart, Heart, Star, RotateCcw, MapPin, Calendar, Settings, Eye, Edit2, ThumbsUp, Trash2, Bell } from 'lucide-react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Navbar/Footer';

export default function MangoLoverProfile({ isAuthenticated, handleLogin, handleLogout }) {
    const [activeSection, setActiveSection] = useState("account")
    const [showPassword, setShowPassword] = useState(false)
    const UserIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
    );
    const OrdersIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-3-3h-10a3 3 0 00-3 3v2h5m5 0a1 1 0 000-2H8a1 1 0 000 2h10zm0 0v-2a1 1 0 00-1-1h-1a1 1 0 00-1 1v2a1 1 0 001 1h1a1 1 0 001-1z" />
        </svg>
    );
    const AddressIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0L2.343 7.586a1.998 1.998 0 010-2.828l5.414-5.414a1.998 1.998 0 012.828 0L16 11.586l4.657-4.657a1.998 1.998 0 012.827 2.827l-5.414 5.414z" />
        </svg>
    );
    const LogoutIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 0v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
    );
    const EditProfileIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 012.828 0l2 2a2 2 0 010 2.828l-8 8-4-4 4-4l-8-8z" />
        </svg>
    );


    const orders = [
        { id: "ORD-1001", date: "2024-10-01", total: "$45.00", status: "Shipped" },
        { id: "ORD-1002", date: "2024-10-05", total: "$60.00", status: "Processing" },
        { id: "ORD-1003", date: "2024-10-07", total: "$30.00", status: "Delivered" },
    ];

    const addresses = [
        { id: 1, name: "Amelia Watson", address: "123 Main St, Cityville", phone: "+1234567890" },
        { id: 2, name: "Office Address", address: "456 Business Rd, Office Park", phone: "+9876543210" },
    ];


    return (
        <div>
            <Navbar
                isAuthenticated={isAuthenticated}
                onLogin={handleLogin}
                onLogout={handleLogout} />
            <div className="md:hidden min-h-screen bg-gray-50 flex flex-col items-center justify-center bg-gradient-to-br from-orange-300 via-amber-300 to-yellow-300">
                {/* Header */}
                <main className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Sidebar */}
                    <aside className="md:col-span-1 bg-white p-4 shadow-md rounded-lg">
                        <div className="flex items-center space-x-4 mb-4">
                            <img src="https://placehold.co/100x100 " alt="Profile Picture" className="w-20 h-20 rounded-full" />
                            <div>
                                <p className="text-lg font-bold">Amelia Robert</p>
                                <p className="text-sm text-gray-500">ameliarobert@example.com</p>
                            </div>
                        </div>
                        <ul className="space-y-2">
                            <li
                                onClick={() => setActiveSection("orders")}
                                className={`flex items-center space-x-2 py-2 px-4 cursor-pointer rounded-md ${activeSection === "orders" ? "bg-orange-500 text-white" : "hover:bg-orange-100"
                                    }`}
                            >
                                <OrdersIcon />
                                <span>Orders</span>
                            </li>
                            <li
                                onClick={() => setActiveSection("address")}
                                className={`flex items-center space-x-2 py-2 px-4 cursor-pointer rounded-md ${activeSection === "address" ? "bg-orange-500 text-white" : "hover:bg-orange-100"
                                    }`}
                            >
                                <AddressIcon />
                                <span>Address</span>
                            </li>
                            <li
                                onClick={() => setActiveSection("account")}
                                className={`flex items-center space-x-2 py-2 px-4 cursor-pointer rounded-md ${activeSection === "account" ? "bg-orange-500 text-white" : "hover:bg-orange-100"
                                    }`}
                            >
                                <EditProfileIcon />
                                <span>Account Details</span>
                            </li>
                            <li
                                onClick={() => alert("Logged out!")}
                                className="flex items-center space-x-2 py-2 px-4 hover:bg-orange-100 rounded-md cursor-pointer"
                            >
                                <LogoutIcon />
                                <span>Log Out</span>
                            </li>
                        </ul>
                    </aside>

                    {/* Dynamic Section */}
                    <section className="md:col-span-2">
                        {activeSection === "orders" && (
                            <div className="bg-white p-4 shadow-md rounded-lg">
                                <h2 className="text-xl font-bold mb-4 border-b-2 border-orange-500 pb-1">Your Orders</h2>
                                <table className="min-w-full table-auto">
                                    <thead>
                                        <tr className="bg-orange-100 text-left">
                                            <th className="px-4 py-2">Order ID</th>
                                            <th className="px-4 py-2">Date</th>
                                            <th className="px-4 py-2">Total</th>
                                            <th className="px-4 py-2">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orders.map((order) => (
                                            <tr key={order.id} className="border-t hover:bg-gray-50">
                                                <td className="px-4 py-2">{order.id}</td>
                                                <td className="px-4 py-2">{order.date}</td>
                                                <td className="px-4 py-2">{order.total}</td>
                                                <td className="px-4 py-2 text-green-600">{order.status}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}

                        {activeSection === "address" && (
                            <div className="bg-white p-4 shadow-md rounded-lg">
                                <h2 className="text-xl font-bold mb-4 border-b-2 border-orange-500 pb-1">Saved Addresses</h2>
                                <div className="space-y-4">
                                    {addresses.map((addr) => (
                                        <div key={addr.id} className="border p-4 rounded-md">
                                            <p className="font-semibold">{addr.name}</p>
                                            <p>{addr.address}</p>
                                            <p className="text-gray-600">{addr.phone}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeSection === "account" && (
                            <div className="bg-white p-4 shadow-md rounded-lg">
                                <h2 className="text-xl font-bold mb-4 border-b-2 border-orange-500 pb-1">Account Details</h2>
                                <form className="mt-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="firstName" className="block text-gray-600 mb-2">First Name</label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                value="Amelia Robert"
                                                className="w-full border border-gray-300 px-2 py-1 rounded-md focus:outline-none focus:border-orange-500"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="lastName" className="block text-gray-600 mb-2">Last Name</label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                value="Watson"
                                                className="w-full border border-gray-300 px-2 py-1 rounded-md focus:outline-none focus:border-orange-500"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-gray-600 mb-2">Email Address</label>
                                            <input
                                                type="email"
                                                id="email"
                                                value="amelia.watson@eshop.com"
                                                className="w-full border border-gray-300 px-2 py-1 rounded-md focus:outline-none focus:border-orange-500"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="password" className="block text-gray-600 mb-2">Password</label>
                                            <div className="relative">
                                                <input
                                                    type={showPassword ? "text" : "password"}
                                                    id="password"
                                                    value="********"
                                                    className="w-full border border-gray-300 px-2 py-1 rounded-md focus:outline-none focus:border-orange-500"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500 hover:text-orange-500"
                                                >
                                                    {showPassword ? (
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        </svg>
                                                    ) : (
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.87 18.52H10.13a6 6 0 010-11.31L14.8 3.69l3.49 3.48A6 6 0 0122 9.59v7.93a6 6 0 01-3.13 5.59zM19 13l-7 7-7-7 7-7 7 7zm-6-6a2 2 0 11-4 0 2 2 0 014 0z" />
                                                        </svg>
                                                    )}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300">
                                        Save Changes
                                    </button>
                                </form>
                            </div>
                        )}
                    </section>
                </main>

            </div>
            <div className='hidden md:block  bg-gray-50 flex flex-col items-center justify-center bg-gradient-to-r from-yellow-50 to-yellow-100'>
                <main className="container mx-auto p-4  grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* profile image */}
                    <aside className="md:col-span-1 divide-y-2 divide-gray-200 bg-white p-4 shadow-md rounded-lg">
                        <div className="flex-col  space-x-4 mb-4 ">
                            <div className='mx-auto pl-20'>
                                <img src="https://placehold.co/100x100 " alt="Profile Picture" className="w-40 h-40 rounded-full " />
                            </div>
                            <div className='text-center'>
                                <p className="text-lg font-bold">Amelia Robert</p>
                                <p className="text-sm text-gray-500">ameliarobert@example.com</p>
                            </div>
                        </div>
                        <ul className="space-y-2">
                            <li
                                onClick={() => setActiveSection("orders")}
                                className={`flex items-center space-x-2 py-2 px-4 cursor-pointer rounded-md ${activeSection === "orders" ? "bg-orange-500 text-white" : "hover:bg-orange-100"
                                    }`}
                            >
                                <OrdersIcon />
                                <span>Orders</span>
                            </li>
                            <li
                                onClick={() => setActiveSection("address")}
                                className={`flex items-center space-x-2 py-2 px-4 cursor-pointer rounded-md ${activeSection === "address" ? "bg-orange-500 text-white" : "hover:bg-orange-100"
                                    }`}
                            >
                                <AddressIcon />
                                <span>Address</span>
                            </li>
                            <li
                                onClick={() => setActiveSection("account")}
                                className={`flex items-center space-x-2 py-2 px-4 cursor-pointer rounded-md ${activeSection === "account" ? "bg-orange-500 text-white" : "hover:bg-orange-100"
                                    }`}
                            >
                                <EditProfileIcon />
                                <span>Account Details</span>
                            </li>
                            <li
                                onClick={() => alert("Logged out!")}
                                className="flex items-center space-x-2 py-2 px-4 hover:bg-orange-100 rounded-md cursor-pointer"
                            >
                                <LogoutIcon />
                                <span>Log Out</span>
                            </li>
                        </ul>
                    </aside>
                    {/* Dynamic Section */}
                    <section className="md:col-span-2">
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 mt-1'>
                            <div className='bg-red-200 p-5 leading-loose rounded-lg'>
                                <h1 className='font-bold font-bold text-red-500 text-4xl'>Order Tracking</h1>
                                <p>See your order history</p>
                            </div>
                            <div className='bg-blue-100  p-5 rounded-lg leading-loose'>
                                <h1 className='font-bold text-blue-500 font-bold text-4xl'>Billing Address</h1>
                                <p className=''>Set your billing address</p>
                            </div>
                        </div>
                        {activeSection === "orders" && (
                            <div className="bg-white p-4 shadow-md rounded-lg">
                                <h2 className="text-xl font-bold mb-4 border-b-2 border-orange-500 pb-1">Your Orders</h2>
                                <table className="min-w-full table-auto">
                                    <thead>
                                        <tr className="bg-orange-100 text-left">
                                            <th className="px-4 py-2">Order ID</th>
                                            <th className="px-4 py-2">Date</th>
                                            <th className="px-4 py-2">Total</th>
                                            <th className="px-4 py-2">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orders.map((order) => (
                                            <tr key={order.id} className="border-t hover:bg-gray-50">
                                                <td className="px-4 py-2">{order.id}</td>
                                                <td className="px-4 py-2">{order.date}</td>
                                                <td className="px-4 py-2">{order.total}</td>
                                                <td className="px-4 py-2 text-green-600">{order.status}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}

                        {activeSection === "address" && (
                            <div className="bg-white p-4 shadow-md rounded-lg">
                                <h2 className="text-xl font-bold mb-4 border-b-2 border-orange-500 pb-1">Saved Addresses</h2>
                                <div className="space-y-4">
                                    {addresses.map((addr) => (
                                        <div key={addr.id} className="border p-4 rounded-md">
                                            <p className="font-semibold">{addr.name}</p>
                                            <p>{addr.address}</p>
                                            <p className="text-gray-600">{addr.phone}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeSection === "account" && (
                            <div className="bg-white p-4 shadow-md rounded-lg">
                                <h2 className="text-xl font-bold mb-4 border-b-2 border-orange-500 pb-1">Account Details</h2>
                                <form className="mt-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="firstName" className="block text-gray-600 mb-2">First Name</label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                value="Amelia Robert"
                                                className="w-full border border-gray-300 px-2 py-1 rounded-md focus:outline-none focus:border-orange-500"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="lastName" className="block text-gray-600 mb-2">Last Name</label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                value="Watson"
                                                className="w-full border border-gray-300 px-2 py-1 rounded-md focus:outline-none focus:border-orange-500"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-gray-600 mb-2">Email Address</label>
                                            <input
                                                type="email"
                                                id="email"
                                                value="amelia.watson@eshop.com"
                                                className="w-full border border-gray-300 px-2 py-1 rounded-md focus:outline-none focus:border-orange-500"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="password" className="block text-gray-600 mb-2">Password</label>
                                            <div className="relative">
                                                <input
                                                    type={showPassword ? "text" : "password"}
                                                    id="password"
                                                    value="********"
                                                    className="w-full border border-gray-300 px-2 py-1 rounded-md focus:outline-none focus:border-orange-500"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500 hover:text-orange-500"
                                                >
                                                    {showPassword ? (
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        </svg>
                                                    ) : (
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.87 18.52H10.13a6 6 0 010-11.31L14.8 3.69l3.49 3.48A6 6 0 0122 9.59v7.93a6 6 0 01-3.13 5.59zM19 13l-7 7-7-7 7-7 7 7zm-6-6a2 2 0 11-4 0 2 2 0 014 0z" />
                                                        </svg>
                                                    )}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300">
                                        Save Changes
                                    </button>
                                </form>
                            </div>
                        )}
                    </section>
                </main>
            </div>
        <Footer/>
        </div>
    );
}