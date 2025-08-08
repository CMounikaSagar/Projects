import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchCategories } from '../redux/productSlice'


function CategorySec() {
    const dispatch = useDispatch()
    const catdata = useSelector(state=>state.product.category)
    const status = useSelector(state=>state.product.status)

    useEffect(() => {
        if (status === 'idle'){
            
            dispatch(fetchCategories())
        }
      }, [status,dispatch])

    return (
        <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 cursor-pointer'>
            
                {catdata.map((cat, index) => (
                    <div key={index} className='relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
                        <img src={cat.cat_image} className='w-full h-full object-cover rounded-lg shadow-md'/>
                        <div className='absolute top-20 left-12'>
                            <p className='text-xl font-bold'>{cat.category_name}</p>
                            <p className='text-gray-700'>View All</p>
                        </div>
                    </div>
                ))}
            
        </div>
    )
}

export default CategorySec
