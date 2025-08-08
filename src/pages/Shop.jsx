import React, { useEffect } from 'react'
import Productcard from '../components/Productcard'
import { useSelector,useDispatch } from 'react-redux'
import { fetchProducts } from '../redux/productSlice'

const Shop = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.product.product)
  const status = useSelector(state => state.product.status)

  useEffect(()=>{
    if (status === 'idle'){
      dispatch(fetchProducts())
    }
  },[dispatch,status])

  return (
    <div className='mx-auto py-12 px-4 md:px-16 lg:px-27'>
      <h2 className='text-2xl font-bold mb-6 text-center'>Shop</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 cursor-pointer'>
          {products.map((product,index) => (
            <div key={index}><Productcard product={product} /></div>
          ))}
      </div>
    </div>
  )
}

export default Shop