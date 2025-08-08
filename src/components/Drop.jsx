import React, { useState } from 'react'

function Drop() {

    const [selectedoption, setSelectedoption] = useState()
    const [formData,setFormData] = useState({
        name:'',
        email:'',
        username:'',
        password:'',
        address:'',
        city:''
    })

    const handleChange = (e) => {
        
        setSelectedoption(e.target.value)
        
    }

    const handleSubmit = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value})
        e.preventDefault();
        console.log(formData);
        

    }


    return (
        <div>
            <h1>Dropdown</h1>
            <select value={selectedoption} onChange={handleChange}>
                <option value=''>Select</option>
                <option value="personal_info">Personal</option>
                <option value="login_info">Login</option>
                <option value="Address_info">Address</option>
            </select>
            <div>
                <form onSubmit={handleSubmit}>
                    {selectedoption == 'personal_info' && (
                        <div>

                            <label>name: </label>
                            <input type='text' placeholder='name' name='name' value={formData.name} onChange={handleSubmit}/>
                            <label>email</label>
                            <input type='text' placeholder='email' />

                        </div>
                    )}
                    {selectedoption == 'login_info' && (
                        <div>

                            <label>username</label>
                            <input type='text' placeholder='username' />
                            <label>password</label>
                            <input type='text' placeholder='password' />
                        </div>

                    )}
                    {selectedoption == 'Address_info' && (
                        <div>

                            <label>address</label>
                            <input type='text' placeholder='address' />
                            <label>city</label>
                            <input type='text' placeholder='city' />
                        </div>
                    )}
                    <button>submit</button>
                </form>
            </div>

        </div>
    )
}

export default Drop
