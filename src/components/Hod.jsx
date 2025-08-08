import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

function Hod() {

    const {register, handleSubmit, errors} = useForm()
    const [state,setState] = useState()

    const handleChange = (e) => {
        console.log(e.target.value)
        setState(e.target.value)
        
    }

    const onSubmit = (data) => {
        console.log(data)
    }


  return (
    <div>
      <h1>HOD</h1>
      <select value={state} onChange={handleChange}>
        <option value=''>Select One</option>
        <option value='personal_info'>Personal</option>
        <option value='address'>Address</option>
        <option value='login'>Login</option>
      </select>
      <form onSubmit={handleSubmit(onSubmit)}>
        {state === 'personal_info' && (
            <div>
                <input type="text" placeholder='Name' {...register('name',{required:'name should not be empty'})}/><br/>
                <input type="number" placeholder='Age' {...register('number',{required:'name should not be empty'})}/><br/>
            </div>
        )}
        {state === 'address' && (
            <div>
                <input type="text" placeholder='City' {...register('city',{required:'name should not be empty'})}/><br/>
                <input type="text" placeholder='Country' {...register('country',{required:'name should not be empty'})}/><br/>
            </div>
            )}
        {state === 'login' && (
            <div>
                <input type="email" placeholder='Email' {...register('email',{required:'name should not be empty'})}/><br/>
                <input type="password" placeholder='Password' {...register('password',{required:'name should not be empty'})}/><br/>
            </div>
        )}
        <button>submit</button>
      </form>
    </div>
  )
}

export default Hod
