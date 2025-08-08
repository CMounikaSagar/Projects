import React, { useState } from 'react'
import axios from 'axios'

const Login = ({onLogin}) => {

    const [form,setForm] = useState({
        username:'',
        password:''
    })

    const [message,setMessage] = useState('')

    const handleChage = (e) => {
        setForm({...form,[e.target.name]:e.target.value})
    }

    const handleSubmit = async(e) => {
        e.preventDefault()

        try{
            const response = await axios.post('http://127.0.0.1:8000/api/login/',form)
            setMessage('Login Succcess Successfull')

            if (onLogin){
                onLogin(response.data.token,response.data.user_id)
            }
        }
        catch (error) {
            setMessage("Login Failed"+(error.response?.data?.username || error.message))
        }
    }


  return (
    <div>Login
        <div className="card bg-red-100 p-6 mx-auto text-start">
            <form onSubmit={handleSubmit}>
                <label >Phone Number:</label>
                <input className='border-[1px] rounded-md my-2 ml-2' type='number' name='username' value={form.username} onChange={handleChage}></input><br></br>
                <label>Password:</label>
                <input className='border-[1px] rounded-md my-2 ml-2' type='text' name='password' value={form.password} onChange={handleChage}/><br></br>
                <button type='submit' className='w-sm'>Register</button>
            {message && <p>{message}</p> }
            </form>
        </div>
    </div>
  )
}

export default Login
