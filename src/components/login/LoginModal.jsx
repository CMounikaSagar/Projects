import './mangoTheme.css'
import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import axios from "axios";
import {useNavigate} from 'react-router-dom';

const LoginModal = ({ onClose, onLogin }) => {
  console.log("onLogin is:", onLogin)
  const [loginType, setType] = useState('phone')
  const [message,setMessage] = useState({})
  const navigate = useNavigate();

  const [form,setForm] = useState({
        identifier:'',
        password:''
       
    })

  const handleChange = (e) => {
        setForm({...form,[e.target.name]:e.target.value})
    }

  const handleSubmit = async(e) => {
        e.preventDefault()
        try{
           const response =  await axios.post('http://127.0.0.1:8000/api/token/login/',form)
           alert('User login successfully!');
           setMessage('Login Successfull')
           
           if (onLogin){
               
                onLogin(response.data.access, response.data.refresh, response.data.user.id);
                navigate('/cart')
                onClose();
            }

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
    // <div className="login-modal">
    //   <div className="modal-content">
    //     <h2 className="text-2xl font-bold mb-4">Login</h2>
    //     <form onSubmit={handleSubmit}>
    //       <div className="mb-4">
    //         <label className="block text-mango-text">Email</label>
    //         <input type="email" className="w-full p-2 border rounded" />
    //       </div>
    //       <div className="mb-4">
    //         <label className="block text-mango-text">Password</label>
    //         <input type="password" className="w-full p-2 border rounded" />
    //       </div>
    //       <button type="submit" className="bg-mango-primary text-mango-bg px-4 py-2 rounded">Login</button>
    //     </form>
    //     <button onClick={onClose} className="mt-4 text-mango-text">Close</button>
    //   </div>
    // </div>
    <StyledWrapper>
      <div className='login-modal'>
        <div className='modal-content'>
          <div className='cot'>
            <h2 className='className="text-2xl font-bold mb-4'>
            Login
            {/* <span className="message">Fill the form to continue.</span> */}
          </h2>
          <div>
            <button onClick={() => setType('phone')}className={`px-4 m-5  py-2  ${loginType === 'phone' ? 'bg-red-500 text-white' : 'bg-gray-200'}`}>Phone Number</button>
            <button onClick={() => setType('email')}className={`px-4 py-2 rounded-r ${loginType === 'email' ? 'bg-orange-500 text-white' : 'bg-gray-200'}`}
            >Email</button>
          </div>
          {loginType === 'phone' && (
            <form className="form" onSubmit={handleSubmit}>

              <label className="block text-mango-text">
                <span className="">Phone Number</span>
                <input placeholder="1234567890" className="w-[90%] p-2 border rounded" type="number" name='identifier' value={form.identifier} onChange={handleChange} required />
              </label>
              <label className='block text-mango-text'>
                <span>Password</span>
                <input placeholder="xxxxxxxx" className="w-[90%] p-2 border rounded" type="text" name='password' value={form.password} onChange={handleChange} required />
              </label>

              <button type='submit' className='bg-mango-primary text-mango-bg px-4 py-2 rounded'>Login</button>

            </form>
          )}
          {loginType === 'email' && (
            <form className="form" onSubmit={handleSubmit}>

              <label className="block text-mango-text">
                <span className="">email</span>
                <input placeholder="1234567890" className="w-[90%] p-2 border rounded" type="email" name='identifier' value={form.identifier} onChange={handleChange} required />
              </label>
              <label className='block text-mango-text'>
                <span>Password</span>
                <input placeholder="xxxxxxxx" className="w-[90%] p-2 border rounded" type="text" name='password' value={form.password} onChange={handleChange} required />
              </label>

              <button type='submit' className='submit1 bg-mango-primary text-mango-bg px-4 py-2 rounded'>Login</button>

            </form>
          )}
          </div>
          <button onClick={onClose} className="mt-4 text-mango-text">Close</button>
        </div>
      </div>
    </StyledWrapper>
  );
};
const StyledWrapper = styled.div`
  /* Initial form state */
  .cot {
    --col1: #FFC107;
  --col2: #FF9800;
  --col-3: #FFECB3;
  --col-4: #FF6F00;
  --col-5: #333333;
  --sh: #FFFFFF;
    --rad: 4px;
    --radBig: 10px;
    border-radius: 0 0 var(--radBig) var(--radBig);
    box-shadow: 0 0 20px var(--sh);
    display: flex;
    flex-direction: column;
  
    position: relative;
    max-width: 100%;
    max-height: 90px;
    transition: background .3s ease-out, max-height .3s ease-out;
    overflow: hidden;
  }

  .cot::before {
    content: 'Not yet Logged in? Please log in first!';
    color: var(--col2);
    font-size: 1.2em;
    font-weight: 700;
    display: grid;
    width: 100%;
    height: 60%;
    position: absolute;
    place-items: center;
    z-index: 9999;
  }

  .cot::after {
    content: '';
    backdrop-filter: blur(200px) grayscale(100%);
    background: linear-gradient(-180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,.5) 70%, rgba(255, 255, 255, 0.3) 90%);
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    display: block;
    position: absolute;
    z-index: 999;
  }

  .cot::after,
  .cot::before {
    border-radius: 0 0 var(--radBig) var(--radBig);
    pointer-events: none;
    transition: all .5s ease-out;
  }

  /* Form hover and focus */
  .cot:hover,
  .cot:focus-within {
    max-width: 100%;
    max-height: 380px;
  }

  .cot:focus-within {
    overflow: initial;
  }

  .cot:hover::before,
  .cot:hover::after {
    opacity: 0;
  }

  .cot:hover::after {
    backdrop-filter: blur(0) grayscale(0%);
  }

  .cot header {
    color: var(--col1);
    font-size: 1.25rem;
    font-weight: 600;
  }
  
  .cot select {
    box-shadow: inset 3px 3px 1px var(--sh);
    padding: .75em 1.75em .75em 0.5em;
    position: relative;
  }

  .custom-select {
    position: relative;
  }

  .custom-select::after {
    position: absolute;
    content: "";
    top: 45%;
    right: 5px;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-color: var(--col5) transparent transparent transparent;
  }


  /* Form and UI valid and invalid states */
  .cot input:focus,
  .cot select:focus {
    outline: 3px solid var(--col3);
    outline-offset: 1px;
  }

  .cot input:invalid:not(:focus),
  .cot select:invalid:not(:focus) {
    background-color: var(--col3);
    outline: 3px solid var(--col4);
    outline-offset: 1px;
  }

  .cot input:valid:not(:focus),
  .cot select:valid:not(:focus) {
    outline: 3px solid var(--col1);
    outline-offset: 1px;
  }

  .cot .message {
    display: block;
    opacity: 0;
    font-size: .75em;
    font-weight: 400;
    transition: all .3s ease-out;
    margin: -1rem 0 0;
  }

  .cot:has(:invalid) .message {
    opacity: 1;
    margin: .25rem 0 0 0;
  }

  .cot:hover:has(:focus, :active):valid .submitCard {
    max-height: 180px;
    opacity: 1;
    transition: opacity 1s ease-out .5s, translate 1.3s ease-out;
    translate: 0 100%;
  }

  .cot:hover:invalid {
    transition: all .3s ease-out;
    background-color: var(--col5);
  }

  .cot:hover:valid {
    transition: all .3s ease-out;
    background-color: var(--col1);
  }

  .cot:hover:valid * {
    color: var(--col2);
  }

  .cot:hover:valid input,
  .cot:hover:valid select {
    outline: 3px solid var(--col2);
  }

  .cot:hover:invalid fieldset {
    border: 1px dashed var(--col3);
  }

  .cot:hover:valid fieldset {
    border: 1px dashed var(--col2);
  }

  /* Submit block */
  .cot .submitCard {
    display: flex;
    justify-content: center;
    background-color: var(--col2);
    border-radius: 0 0 var(--rad) var(--rad);
    bottom: 0;
    padding: .5em;
    opacity: 0;
    max-height: 0;
    translate: 0 -100%;
    position: absolute;
    width: calc(100% - 2em);
    transition: all .5s ease-out .1s;
    z-index: -1;
  }`;

export default LoginModal;