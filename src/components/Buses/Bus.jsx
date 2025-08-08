import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Bus = () => {

    const navigate = useNavigate();
    
    const [buses,setBuses] = useState([])

    useEffect(() => {
        const fetchBuses = async()=>{
            try{
                const response = await axios.get('http://127.0.0.1:8000/api/buses/')
                setBuses(response.data)
                
            }
            catch(error){
                console.log('errors',error)
            }
        }
        fetchBuses()
    },[])


    const handleViewseats = (id) => {
        navigate(`/bus/${id}`)
    }

  return (
    <div>
        {buses.map((item)=>{
            return(
                <div key={item.id}>
                    <h1>{item.name}</h1>
                    <h1>{item.number}</h1>
                    <h1>{item.origin}</h1>
                    <h1>{item.destination}</h1>
                    <h1>{item.start_time}</h1>
                    <h1>{item.reach_time}</h1>
                    <button className='bg-red-200' onClick={()=>handleViewseats(item.id)}>View Seats</button>
                    <hr></hr>
                </div>
            )
        })}
    </div>
  )
}

export default Bus