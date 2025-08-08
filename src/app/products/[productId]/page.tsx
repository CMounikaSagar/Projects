import React from 'react'
import { notFound, redirect } from 'next/navigation'
import { Metadata } from 'next'


type Props = {
  params: Promise<{ productId: string }>
}

export interface GetRandomInt {
  (count: number): number;
}

export const getRandomInt: GetRandomInt = (count: number): number => {
  return Math.floor(Math.random() * count); 
}

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
  const productId = (await params).productId
  console.log(productId)
  return {
    title: `Product ${productId}`,
    description: `This is product ${productId}.`
  }
}

async function page ({
    params,
}:{
    params:Promise<{productId:string}>
}){
  const random = getRandomInt(2);
  console.log(random)
  if(random === 1){
    throw new Error('Something went wrong');
  }
   const { productId } = await params;
   if(parseInt(productId) > 4){
      //  notFound()
      redirect('/products')
   }
  return (
    <div>
      <h1>Product Details {productId}</h1>
    </div>
  )
}

export default page
