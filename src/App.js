import logo from './logo.svg';
import './App.css';
import Apple from './Apple';
import Sample from './example/Sample';
import FirstComponent from './propContainer/FirstComponent';
import SecondComponent from './propContainer/SecondComponent';
import ThirdComponent from './propContainer/ThirdComponent';
import FourthComponent from './propContainer/FourthComponent';
import ClickEvent from './ClickEvent';
import But from './propContainer/But';
import React, { createContext } from 'react';
import MainComponent from './example/MainComponent';
import LoginPage from './propContainer/LoginPage';
import Cart from "./Cart/Cart";
import { useState } from "react";
import './Cart/Cart.css';

// Create Context

export const LoginContext = createContext();



const initialCart = [
  { id: 1, quantity: 2 },
  { id: 2, quantity: 1 },
  { id: 4, quantity: 3 },
];

function App() {

  return (
    <SecondComponent />
    
  );
}

export default App;
