"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const Page = () => {
    const router = useRouter()
    const handleClick = async () => {
        router.push('/register')
    }
  return (
    <div>Login
        <button onClick={handleClick}>register</button>
    </div>
  )
}

export default Page