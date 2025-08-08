import React, { useState } from 'react'
import Mango from '../../assets/Mango.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register1 = () => {

    const navigate = useNavigate()

    const [form,setForm] = useState({
        first_name:'',
        last_name:'',
        phone_number:'',
        email:'',
        password:'',
        confirm_password:''
    })
    
    const [message,setMessage] = useState({})

    const handleChange = (e) => {
        setForm({...form,[e.target.name]:e.target.value})
        // setMessage({ ...message, [e.target.name]: null }); 
    }
        
    

    const handleSubmit = async(event) => {
        event.preventDefault()
        try{
            await axios.post("http://127.0.0.1:8000/register/",form)
            alert('User registered successfully!');
            navigate('/login')
            setMessage({});
        }
        catch (err){
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
        <div className='max-w-[1000px] mx-auto flex items-center justify-center min-h-screen'>
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-5xl w-full flex">


                <div className="w-1/2 pr-8">
                    <h2 className="text-3xl text-orange-500 font-bold mb-6">Sign up</h2>

                    <form onSubmit={handleSubmit}>

                        <div className="mt-4 flex items-center border-b border-orange-300">
                            <i className="fas fa-user text-gray-900 mr-3"></i>
                            <input type="text" placeholder="Firstname" className="w-full pt-2 outline-none" name='first_name' value={form.first_name} onChange={handleChange}/>
                        </div>
                            {message.first_name && <p className='w-90 text-sm' style={{color: 'red'}}>{message.first_name}</p>}
                        <div className="mt-4 flex items-center border-b border-orange-300">
                            <i className="fas fa-user text-gray-900 mr-3"></i>
                            <input type="text" placeholder="Lastname" className="w-full py-2 outline-none" name='last_name' value={form.last_name} onChange={handleChange}/>
                        </div>
                            {message.last_name && <p style={{color: 'red'}}>{message.last_name[0]}</p>}
                        <div className="mt-4 flex items-center border-b border-orange-300">
                            <i className="fas fa-phone text-gray-900 mr-3"></i>
                            <input type="text" placeholder="123456890" className="w-full py-2 outline-none" name='phone_number' value={form.phone_number} onChange={handleChange}/>
                        </div>
                            {message.phone_number && <p className='w-90 text-sm' style={{color: 'red'}}>{message.phone_number[0]}</p>}


                        <div className="mt-4 flex items-center border-b border-orange-300">
                            <i className="fas fa-envelope text-gray-900 mr-3"></i>
                            <input type="email" placeholder="someone@gmail.com" className="w-full py-2 outline-none" name='email' value={form.email} onChange={handleChange}/>
                        </div>
                            {message.email && <p className='w-90 text-sm' style={{color: 'red'}}>{message.email[0]}</p>}


                        <div className="mt-4 flex items-center border-b border-orange-300">
                            <i className="fas fa-lock text-gray-900 mr-3"></i>
                            <input type="password" placeholder="Password" className="w-full py-2 outline-none" name='password' value={form.password} onChange={handleChange}/><br></br>
                        </div>
                            {message.password && <p className='w-90 text-sm' style={{color: 'red'}}>{message.password[0]}</p>}


                        <div className="mt-4 flex items-center border-b border-orange-300">
                            <i className="fas fa-lock text-gray-900 mr-3"></i>
                            <input type="password" placeholder="Repeat your password" className="w-full py-2 outline-none" name='confirm_password' value={form.confirm_password} onChange={handleChange}/>
                        </div>
                            {message.confirm_password && <p className='w-25' style={{color: 'red'}}>{message.confirm_password[0]}</p>}

                        <button type="submit" className=" my-4 bg-orange-300  border-orange-500 text-white py-2 px-4 rounded">
                            Register
                        </button>
                        
                    </form>
                </div>


                <div className="w-1/2 sm:max-h-screen md:max-h-screen flex flex-col items-center justify-center">
                    <img src={Mango} alt="Mango image" className="w-75 h-full" />
                    <a href="#" className="mt-4 text-sm underline hover:text-black cursor-pointer">Already have an account ? login</a>
                </div>

            </div>
        </div>
    )
}

export default Register1