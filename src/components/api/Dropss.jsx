import React, { useState } from 'react'
import axios from "axios";

function Dropss() {

    const [selectedoption, setSelectedoption] = useState()
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        country: '',
        password: '',
        address: '',
        city: ''
    })

    const handleOptionChange = (e) => {

        setSelectedoption(e.target.value)

    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const Mappeddata = {
            user_name: formData.name,
            user_age: formData.age,
            user_country: formData.country,
            user_password: formData.password,
            user_address: formData.address,
            user_city: formData.city
        }

        const res = await axios.post('http://127.0.0.1:8000/practices/', Mappeddata)
        console.log(res);
    }



    return (
        <div>
            <h1>Dropdown</h1>
            <form onSubmit={handleSubmit}>
                <select value={selectedoption} onChange={handleOptionChange}>
                    <option value=''>Select</option>
                    <option value="personal_info">Personal</option>
                    <option value="login_info">Login</option>
                    <option value="Address_info">Address</option>
                </select>
                <div>
                    {selectedoption == 'personal_info' && (
                        <div>

                            <label>name: </label>
                            <input type='text' placeholder='name' name='name' value={formData.name} onChange={handleChange} />
                            <label>age</label>
                            <input type='text' placeholder='age' name='age' value={formData.age} onChange={handleChange} />

                        </div>
                    )}
                    {selectedoption == 'login_info' && (
                        <div>

                            <label>username</label>
                            <input type='text' placeholder='username' name='country' value={formData.country} onChange={handleChange} />
                            <label>password</label>
                            <input type='text' placeholder='password' name='password' value={formData.password} onChange={handleChange} />
                        </div>

                    )}
                    {selectedoption == 'Address_info' && (
                        <div>

                            <label>address</label>
                            <input type='text' placeholder='address' name='address' value={formData.address} onChange={handleChange} />
                            <label>city</label>
                            <input type='text' placeholder='city' name='city' value={formData.city} onChange={handleChange} />
                        </div>
                    )}
                    <button>submit</button>
                </div>
            </form>

        </div >
    )
}

export default Dropss
