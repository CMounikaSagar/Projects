import Link from 'next/link'
import React from 'react'


const page = () => {
  return (
    <div>
        <h1>Products</h1>
        <ul>
            <li><Link href="/products/[productId]" as="/products/1">Product 1</Link></li>
            <li><Link href={"/products/[productId]"} as={"/products/2"}>Product 2</Link></li>
            <li><Link href={"/products/[productId]"} as={"/products/3"} replace>Product 3</Link></li>
        </ul>
    </div>
  )
}

export default page