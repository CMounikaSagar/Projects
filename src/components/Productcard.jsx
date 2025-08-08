import React from 'react'
import { FaStar } from 'react-icons/fa'
import { addCart } from '../redux/cartSlice'
import { useDispatch } from 'react-redux'

const Productcard = ({product}) => {
  const dispatch = useDispatch()
  


  const handleCart=(e,productId)=>{
    console.log(product)
      e.stopPropagation()
      e.preventDefault()
      dispatch(addCart({product_id:productId,quantity:1}))
      alert('Product added to cart')
  }

  return (
    <div className='bg-white p-4 shadow rounded relative border transform transition-transform duration-300 hover:scale-105'>
        <img className='w-full h-48 object-contain mb-4' src={product.image} alt='product_image'/>
        <h3 className='text-lg font-semibold'>{product.Product_name}</h3>
        <p className='text-gray-500'>{product.Price}</p>
        <div className='flex items-center mt-2'>
            <FaStar className='text-yellow-500'></FaStar>
            <FaStar className='text-yellow-500'></FaStar>
            <FaStar className='text-yellow-500'></FaStar>
            <FaStar className='text-yellow-500'></FaStar>
        </div>
        <div onClick={(e)=>{handleCart(e,product.id)}} className='absolute bottom-4 right-2 text-white flex items-center justify-center w-8 h-8 bg-red-600 group ext-white text-sm rounded-full hover:w-32 hover:bg-red-700 transition-all'>
            <span className='group-hover:hidden'>+</span>
            <span className='hidden group-hover:block'>Add to cart</span>
        </div>
    </div>
  )
}

export default Productcard