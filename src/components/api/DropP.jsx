import { React, useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios';

const DropP = () => {
    const { register, handleSubmit, reset } = useForm();
    const [value, setValue] = useState('');
    const [editId, setEditId] = useState(1);  // Example: record ID you want to edit
    const [editData, setEditData] = useState(null);

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://127.0.0.1:8000/practices/?id=${editId}`);
                console.log("Fetched data", res.data);

                const record = res.data.find(item => item.id === editId);
                if (!record) {
                    console.error("Record not found");
                    return;
                }

                reset({
                    name: record.user_name || '',
                    age: record.user_age || '',
                    email: record.user_email || '',
                    city: record.user_city || '',
                    country: record.user_country || '',
                    password: record.user_password || ''
                });

                if (!value) {
                    setValue('1'); // or detect based on record
                }
            } catch (err) {
                console.error(err);
            }
        };



        fetchData();
    }, [editId, reset]);

    const onSubmit = async (data) => {

        const MappedData = {
            id: editId,
            user_name: data.name,
            user_age: data.age,
            user_email: data.email,
            user_city: data.city,
            user_country: data.country,
            user_password: data.password
        }
        await axios.put('http://127.0.0.1:8000/practices/', MappedData)
    }

    return (

        <div>
            <h1>DropDown</h1>
            <div>
                <select onChange={handleChange} value={value}>
                    <option value="">select Option</option>
                    <option value="1">PersonalInfo</option>
                    <option value="2">Login</option>
                    <option value="3">Address</option>
                </select>
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {value === '1' && (
                        <div>
                            <input type='text' placeholder='Name' {...register("name")} /><br></br>
                            <input type='number' placeholder='Age' {...register("age")} /><br></br>

                        </div>
                    )}
                    {value === '2' && (
                        <div>
                            <input type='email' placeholder='Email' {...register("email")} /><br></br>
                            <input type='password' placeholder='Password' {...register("password")} /><br></br>

                        </div>
                    )}
                    {value === '3' && (
                        <div>
                            <input type='text' placeholder='City' {...register("city")} /><br></br>
                            <input type='number' placeholder='Country' {...register("country")} /><br></br>

                        </div>
                    )}
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default DropP