import React, { useState,useEffect } from 'react'
import { FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux'
import { fetchcart, addCart, removeCart } from '../redux/cartSlice';


const Cart = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cart.items);
  console.log("cart items",cartItems);

  const handleRemoveItem=({productId})=>{
    dispatch(addCart({product_id:productId,}))
  }

  useEffect(()=>{
    
    dispatch(fetchcart())
  },[dispatch])
  const [address, setAddress] = useState('Wanaparthy,509381');



  return (
    <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24'>
      {cartItems.length > 0 ?
        <div>
          <h3 className='text-2xl font-semibold mb-4'>You have {cartItems.length} items in your cart.</h3>
          <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
            <div className='md:w-2/3'>
              <div className='flex justify-between border-b items-center mb-4 text-xs font-bold'>
                <p>PRODUCTS</p>
                <div className='flex space-x-6'>
                  <p>PRICE</p>
                  <p>QUANTITY</p>
                  <p>SUBTOTAL</p>
                  <p>REMOVE</p>
                </div>
              </div>
              <div>
                {cartItems.map((item) => (
                  <div key={item.id} className='flex items-center justify-between p-3 border-b'>
                    <div className='md:flex items-center space-x-4'>
                      <img src={item.product.image} alt="product" className='w-16 h-16 object-contain rounded' />
                      <div className='flex-1 ml-4'>
                        <h3 className='text-lg font-semibold'>{item.product.Product_name}</h3>
                      </div>
                    </div>
                    <div className='flex space-x-12 items-center'>
                      <p>
                        ${item.product.Price}
                      </p>
                      <div className='flex items-center justify-center border'>
                        <button className='text-xl font-bold px-1.5 border-r'>-</button>
                        <p className='text-xl px-2'>{item.quantity}</p>
                        <button onClick={()=>handleRemoveItem(item.id)} className='text-xl px-1 border-1'>+</button>
                      </div>
                      <p>${item.quantity * item.product.Price}</p>
                      <button  className='text-red-500 hover:text-red-700'><FaTrash /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='md:w-1.3 bg-white p-6 rounded-lg shadow-md border border-gray-50'>
              <h3 className='text-sm font-semibold mb-5'>CART TOTAL</h3>
              <div className='flex justify-between mb-5 border-b border-gray-400 pb-1'>
                <span className='text-sm'>Total Items: </span>
                <span>{cartItems.totalQuantity}</span>
              </div>
              <div className='mb-4 border-b border-gray-400 pb-2'>
                <p>Shipping: </p>
                <p className='ml-2'>Shipping to: </p>
                <span>{address}</span>
                <button className='text-blue-500 hover:underline mt-1 ml-2'>Change Address</button>
              </div>
              <div className='flex justify-between mb-4'>
                <span>Total Price:</span>
                <span>{cartItems.totalPrice}</span>
              </div>
              <button className='w-full bg-red-600 text-white py-2 hover:bg-red-800'>Proceed to checkout</button>
            </div>
          </div>
        </div> :
        <h1>Your cart is empty</h1>
      }
    </div>
  )
}

export default Cart