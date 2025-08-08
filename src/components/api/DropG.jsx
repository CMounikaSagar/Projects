import axios from 'axios'
import { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function DropG() {
    const navigate = useNavigate()

    const [data, setData] = useState()

    const handleClick = (id) => {
        navigate(`/edit/${id}`)
    }

    useEffect(() => {
        const Aksh = async () => {
            const res = await axios.get('http://127.0.0.1:8000/practices/')
            console.log(res)
            setData(res.data)
        }

        
        Aksh()
        
    }, [])
    const deleteData = async (id) => {
         const res =await axios.delete(`http://127.0.0.1:8000/practices/${id}/`)
         console.log(res)
         setData(prev => prev.filter(item => item.id !== id));
    }

    return (
        <div>
            <h1>Dropdown</h1>
            {data && data.map((item, index) => (
                <div key={index} className=' rounded p-4 m-5 flex'>
                    <table className='border'>
                        <thead>

                            <tr className=''>
                                <th>Name:</th>
                                <th>Age:</th>
                                <th>Email:</th>
                                <th>Password:</th>
                                <th>City:</th>
                                <th>Country:</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{item.user_name}</td>
                                <td>{item.user_age}</td>
                                <td>{item.user_email}</td>
                                <td>{item.user_pwd}</td>
                                <td>{item.user_city}</td>
                                <td>{item.user_country}</td>
                                <td>
                                    <button className='bg-red-400' onClick={() => handleClick(item.id)}>Edit</button>
                                    <button className='bg-green-600' onClick={() => deleteData(item.id)}>Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table >

                </div >
            ))
            }
        </div >
    )
}

export default DropG
