import React, { useContext } from 'react'
import {LoginContext} from '../App'

// using useContexthook value

const SingleComponent = () => {
    const login = useContext(LoginContext)
    console.log(login)
  return (
    <div>
        <h1>Single Post</h1>
    </div>
  )
}

export default SingleComponent
