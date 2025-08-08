import React, { useState } from 'react'

function Form() {
  const [formData, setformdata] = useState({
    username: '',
    email: '',
    password: '',
  })

  const handleChange = (e) =>{
    setformdata({...formData,[e.target.name]: e.target.value})
    
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setformdata(formData)
    console.log(formData)
  }

  

  return (
    <div>
      <h1>{JSON.stringify(formData)}</h1>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" placeholder='Enter Username' name='username' value={formData.username} onChange={handleChange}/>
        <label>email</label>
        <input type="text" placeholder='Enter Username' name='email' value={formData.email} onChange={handleChange}/>
        <label>password</label>
        <input type="text" placeholder='Enter Username' name='password' value={formData.password} onChange={handleChange}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Form
