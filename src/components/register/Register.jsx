import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const navigate = useNavigate();

    const [form,setForm] = useState({
        username:'',
        email:'',
        password:'',
    })


    const [message,setMessage] = useState('')

    const handleChage = (e) =>{
        setForm({...form, [e.target.name] : e.target.value})
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        try{
            await axios.post("http://127.0.0.1:8000/api/register/",form)
            setMessage('Registration Successfull')
            navigate('/login')
        }
        catch (error){
            setMessage("Registration Failed"+(error.response?.data?.username || error.message))
        }
        
    }

  return (
    <div>
        
        <div class="card bg-red-100 p-6 mx-auto text-start">
            <form onSubmit={handleSubmit}>
                <label >Username:</label>
                <input className='border-[1px] rounded-md my-2 ml-2' type='text' name='username' value={form.username} onChange={handleChage}/><br></br>
                <label>Email:</label>
                <input className='border-[1px] rounded-md my-2 ml-2' type='text' name='email' value={form.email} onChange={handleChage}/><br></br>
                <label>Password:</label>
                <input className='border-[1px] rounded-md my-2 ml-2' type='text' name='password' value={form.password} onChange={handleChage}/><br></br>
                <button type='submit' className='w-sm'>Register</button>
            {message && <p>{message}</p> }
            </form>
        </div>
    </div>
  )
}

export default Register
