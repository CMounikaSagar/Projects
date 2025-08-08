// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import { useParams } from 'react-router-dom'
// import { div } from 'framer-motion/client'

// const Category = () => {

//   const [cat, setCat] = useState('')
//   const [product, setProduct] = useState([])

//   const bgColors = [
//     "bg-orange-100",
//     "bg-green-100",
//   ];

//   const { catId } = useParams()

//   useEffect(() => {
//     const fetchDetails = async () => {
//       try {
//         const response = await axios.get(`http://127.0.0.1:8000/categories/${catId}`)
//         console.log("API Response:", response.data); // 🔍 Check this in console
//         setCat(response.data)
//         setProduct(response.data.products)
//       }
//       catch (error) {
//         console.log(error)
//       }
//     }
//     fetchDetails()
//   }, [catId])



//   return (
//     <div className="p-6">
//       <h2 className="text-xl font-bold mb-4">Products in: {cat.category_name}</h2>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//         {product.map((p, index) => {
//           const bgColor = bgColors[index % bgColors.length];
//           return (
//             <div
//               key={index}
//               className={`${bgColor}w-[250px] h-[300px] relative flex flex-col justify-between md:mx-auto bg-white rounded-[30px] lg:my-0 mx-10 pt-6 px-6 text-center cursor-pointer shadow-md overflow-hidden border border-gray-200`}
//             >
//               <div>
//                 <img
//                   src={p.image}
//                   alt={p.Product_name}
//                   width="150"
//                   className="mx-auto p-3"
//                 />
//                 <h1 className="text-orange-600 font-semibold text-xl mt-4">
//                   {p.Product_name}
//                 </h1>
//               </div>

//               <div className="mb-4">
//                 <p className="text-black text-lg font-semibold">
//                   <span className="text-orange-500">{p.Price}pc's</span> / ₹{p.Price}
//                 </p>
//                 <div className="flex justify-end mt-2">
//                   <div className="w-12 h-12 bg-orange-500 rounded-tl-[20px] rounded-br-2xl flex items-center justify-center hover:bg-orange-600 transition-colors absolute bottom-4 right-4">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="white"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     >
//                       <circle cx="9" cy="21" r="1"></circle>
//                       <circle cx="20" cy="21" r="1"></circle>
//                       <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )
//         })}
//       </div>
//     </div>
//   )
// }

// export default Category
