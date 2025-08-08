import Link from 'next/link'
import React from 'react'

const F2 = () => {
  return (
    <h1>F2 Page :
        <Link href={'/f1'}> go to f1 page</Link>
    </h1>
  )
}

export default F2