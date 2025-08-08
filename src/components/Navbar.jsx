import React, { useEffect } from 'react'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {fetchcart } from '../redux/cartSlice'

function Navbar() {
  const dispatch = useDispatch()

  const products = useSelector(state => state.cart.items)

  useEffect(()=>{
    dispatch(fetchcart())
  },[dispatch])

  console.log(products);

  return (
    <nav className='bg-white shadow-md'>
      <div className='container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center'>
        <div className='text-lg font-bold'>
          <Link to='/'>e-SHOP</Link>
        </div>
        <div className='relative flex-1 mx-4 '>
          <form>
            <input className='w-full border-1 border-gray-400 rounded py-2 px-4' type='text' placeholder='Search Product' />
            <FaSearch className='absolute top-3 right-3 text-red-500'></FaSearch>
          </form>
        </div>
        <div className='flex items-center space-x-4'>
          <Link to='/cart'>
            <FaShoppingCart className='text-lg' />
            {products.length > 0 ? (<span className='absolute top-[15px] right-[340px] bg-red-500 w-[15px] h-[15px] rounded-full text-xs text-center text-white'>{products.length}</span>):'No'}
          </Link>
          <button className='hidden md:block'>
            Login | Register
          </button>
          <button className='block md:hidden'>
            <FaUser />
          </button>
        </div>
      </div>
      <div className='flex items-center justify-center space-x-10 py-4 text-sm font-bold'>
        <Link to='/' className='hover:underline'>Home</Link>
        <Link to='/shop' className='hover:underline'>shop</Link>
        <Link to='/contact' className='hover:underline'>Contact</Link>
        <Link to='/about' className='hover:underline'>About</Link>
      </div>
    </nav>
  )
}

export default Navbar
