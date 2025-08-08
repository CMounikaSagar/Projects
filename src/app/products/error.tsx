"use client"
import { useRouter } from 'next/navigation'
import React, { startTransition } from 'react'

function Error({error,reset
}:{
    error:Error
    reset : () => void
}) {
    const router = useRouter()
    const reload = () =>{
        startTransition(()=>{
            router.refresh()
            reset()
        })
    }
  return (
    <div>
      <h1>{error.message}</h1>
      <button type='submit' onClick={reload  }>Try again</button>
    </div>
  )
}

export default Error
