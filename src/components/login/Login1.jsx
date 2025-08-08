import React, { useState } from 'react'
import Mango from '../../assets/Mango.png'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const Login1 = ({ onLogin }) => {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        identifier: '',
        password: ''
    })

    const [loginType, setType] = useState('phone')

    const [message, setMessage] = useState({})

    const handleChange = (e) => {
        console.log(e.target)
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/token/login/', form)
            alert('User login successfully!');
            setMessage('Login Successfull')

            const { access, refresh } = response.data;

            // Save tokens
            localStorage.setItem('access', access);
            localStorage.setItem('refresh', refresh);

            // Get user ID from response
            const userId = response.data.user.id;
            localStorage.setItem('id', userId);

            // NEW: Fetch full user data
            const profileResponse = await axios.get(`http://127.0.0.1:8000/user_detail/`, {
                headers: {
                    Authorization: `Bearer ${access}`
                }
            });

            const userData = profileResponse.data;
            localStorage.setItem('user', JSON.stringify(userData)); // ⬅️ This was missing



            if (onLogin) {
                navigate('/',{replace:true});
                onLogin(response.data.access, response.data.refresh, response.data.user.id);
            }

        }
        catch (err) {
            // setMessage(err.response.data);  // Set validation errors returned from backend
            if (err.response && err.response.data) {
                setMessage(err.response.data.message)
                console.log('Validation Errors:', err.response.data);
            }
            else {
                console.error('Server or network error', err);
            }
        }
    }

    return (
        <div>

            <div className='max-w-[1000px] mx-auto flex flex-col items-center justify-center min-h-screen'>
                <h2 className="text-3xl text-orange-500 font-bold mb-6">Login In</h2>
                <div>
                    <button onClick={() => setType('phone')}
                        className={`px-4 py-2 rounded-l ${loginType === 'phone' ? 'bg-orange-500 text-white' : 'bg-gray-200'}`}

                    >Phone Number</button>
                    <button onClick={() => setType('email')}
                        className={`px-4 py-2 rounded-r ${loginType === 'email' ? 'bg-orange-500 text-white' : 'bg-gray-200'}`}
                    >Email</button>
                </div>
                {loginType === 'phone' && (
                    <div className="bg-white rounded-lg shadow-lg p-8 max-w-5xl w-full flex" >


                        <div className="w-1/2 pr-8" id='phoneContainer'>

                            <form onSubmit={handleSubmit}>

                                <div className="mt-4 flex items-center border-b border-orange-300">
                                    <i className="fas fa-phone text-gray-900 mr-3"></i>
                                    <input type="text" placeholder="123456890" className="w-full py-2 outline-none" name='identifier' value={form.identifier} onChange={handleChange} />
                                </div>
                                {message.identifier && <p className='w-90 text-sm' style={{ color: 'red' }}>{message.identifier[0]}</p>}

                                <div className="mt-4 flex items-center border-b border-orange-300">
                                    <i className="fas fa-lock text-gray-900 mr-3"></i>
                                    <input type="password" placeholder="Password" className="w-full py-2 outline-none" name='password' value={form.password} onChange={handleChange} /><br></br>
                                </div>
                                {message.password && <p className='w-90 text-sm' style={{ color: 'red' }}>{message.password[0]}</p>}

                                <div className='sm:flex sm:flex-col md:flex md:flex-row-reverse justify-between'>
                                    <div className='md:my-4'>
                                        <Link className='text-blue-700'>Forgot Password?</Link>
                                    </div>
                                    <button type="submit" className="mt-4 bg-orange-400  border-orange-500 text-white py-2 px-4 rounded" disabled={!form.identifier || !form.password}>
                                        Login
                                    </button>

                                </div>

                            </form>
                        </div>

                        <div className="w-1/2 sm:max-h-screen md:max-h-screen flex flex-col items-center justify-center">
                            <img src={Mango} alt="Mango image" className="w-75 h-full" />
                            <a href="#" className="mt-4 text-sm underline hover:text-black cursor-pointer">Not have an account? Register</a>
                        </div>

                    </div>
                )}
                {/* section two */}
                {loginType === 'email' && (
                    <div className="bg-white rounded-lg shadow-lg p-8 max-w-5xl w-full flex">


                        <div className="w-1/2 pr-8">

                            <form onSubmit={handleSubmit}>

                                <div className="mt-4 flex items-center border-b border-orange-300">
                                    <i className="fas fa-envelope text-gray-900 mr-3"></i>
                                    <input type="text" placeholder="someone@gmail.com" className="w-full py-2 outline-none" name='identifier' value={form.identifier} onChange={handleChange} />
                                </div>
                                {message.identifier && <p className='w-90 text-sm' style={{ color: 'red' }}>{message.identifier[0]}</p>}

                                <div className="mt-4 flex items-center border-b border-orange-300">
                                    <i className="fas fa-lock text-gray-900 mr-3"></i>
                                    <input type="password" placeholder="Password" className="w-full py-2 outline-none" name='password' value={form.password} onChange={handleChange} /><br></br>
                                </div>
                                {message.password && <p className='w-90 text-sm' style={{ color: 'red' }}>{message.password[0]}</p>}

                                <div className='sm:flex sm:flex-col md:flex md:flex-row-reverse justify-between'>
                                    <div className='md:my-4'>
                                        <p className='text-blue-700'>Forgot Password?</p>
                                    </div>
                                    <button type="submit" className="mt-4 bg-orange-400  border-orange-500 text-white py-2 px-4 rounded" disabled={!form.identifier || !form.password}>
                                        Login
                                    </button>

                                </div>

                            </form>
                        </div>

                        <div className="w-1/2 sm:max-h-screen md:max-h-screen flex flex-col items-center justify-center">
                            <img src={Mango} alt="Mango image" className="w-75 h-full" />
                            <a href="#" className="mt-4 text-sm underline hover:text-black cursor-pointer">Not have an account? Register</a>
                        </div>

                    </div>
                )}
            </div>
        </div>
    )
}

export default Login1