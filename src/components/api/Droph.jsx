import axios from 'axios'
import React, {useState} from 'react'
import { useForm } from 'react-hook-form'

function Droph() {
    const {register, handleSubmit,formState:{errors}} = useForm()
    const [state,setState] = useState()

    const handleChange = (e) => {
        setState(e.target.value)
    }

    const onSubmit = async(data) => {
      const MappedData = {
        user_name : data.name || '',
        user_age : data.age || 0,
        user_city : data.city || '',
        user_country : data.country || '',
        user_email : data.email || '',
        user_password : data.password || ''
      }
      await axios.post("http://127.0.0.1:8000/practices/",MappedData)
      alert("data submitted")

        console.log(data);
    }

  return (
    <div>
      <h1>Dropdown</h1>
      <select value={state} onChange={(handleChange)}>
        <option value="">Select</option>
        <option value="1">Personal_info</option>
        <option value="2">Address</option>
        <option value="3">Login</option>  
      </select>
      <form onSubmit={handleSubmit(onSubmit)}>
        {state === '1' && (
            <div>
                <input type='text' placeholder='Name' {...register('name',{required:'name should not be empty',maxLength:{value:4,message:"max length is 4"}})}/><br/>
                {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
                <input type='number' placeholder='Age' {...register('age',{required:false})}/><br/>
            </div>
        )}
        
        {state === '2' && (
            <div>
                <input type="text" placeholder='City' {...register('city',{required:'name should not be empty'})}/><br/>
                <input type="text" placeholder='Country' {...register('country',{required:'name should not be empty'})}/><br/>
            </div>
            )}
        {state === '3' && (
            <div>
                <input type="email" placeholder='Email' onChange={handleChange} {...register('email',{required:'name should not be empty'})}/><br/>
                <input type="password" placeholder='Password' onChange={handleChange} {...register('password',{required:'name should not be empty'})}/><br/>
            </div>
        )}
      <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Droph
