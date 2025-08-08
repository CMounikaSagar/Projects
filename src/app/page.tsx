import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <h1>Page</h1>
      <Link href={'/about'}>About</Link>
      <Link href={'/profile'}>Profile</Link>
    </div>
  )
}

export default page