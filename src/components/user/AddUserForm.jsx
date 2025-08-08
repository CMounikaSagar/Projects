import {React,useState } from 'react'
import { addUser } from './userSlice'
import { useDispatch } from 'react-redux'


const AddUserForm = () => {

    const [form,setForm] = useState({
        name:'',
        age:0,
        city:'',
        country:0,
        email:'',
        password:''
    })
    const dispatch = useDispatch()
    const [state,setState] = useState('')

    const handlestateChange = (e) => {
        setState(e.target.value)
    }

    const handleChange = (e) => {
        setForm({...form,[e.target.name]:e.target.value})
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const MappedData = {
            user_name:form.name,
            user_age:form.age,
            user_city:form.city,
            user_country:form.country,
            user_email:form.email,
            user_pwd:form.password
        }
       dispatch(addUser(MappedData))
        console.log("data",e);
    }


  return (
    <div>
        <h1>DropDown</h1>
        <select value={state} onChange={handlestateChange}>
            <option value="/">Select state</option>
            <option value="personalinfo">PersonalInfo</option>
            <option value="address">Address</option>
            <option value="login">Login</option>
        </select>
        <div>
            <form onSubmit={handleSubmit}>
                {state === "personalinfo" && (
                    <div>
                        <input type='text' placeholder='Enter Name' name='name' value={form.name} onChange={handleChange}/>
                        <input type='number' placeholder='age' name='age' value={form.age} onChange={handleChange}/>
                    </div>
                    )}
                {state === "address" && (
                    <div>
                        <input type='text' placeholder='city' name='city' value={form.city} onChange={handleChange}/>
                        <input type='number' placeholder='country' name='country' value={form.country} onChange={handleChange}/>
                    </div>
                )}
                {state === "login" && (
                    <div>
                        <input type='email' placeholder='Email Id' name='email' value={form.email} onChange={handleChange}/>
                        <input type='password' placeholder='Password' name='password' value={form.password} onChange={handleChange}/>
                    </div>
                )}
                <button type='submit'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default AddUserForm