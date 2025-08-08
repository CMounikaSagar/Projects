import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const BusSeats = ({token}) => {

    const navigate = useNavigate()

    const [bus,setBus] = useState(null)
    const [seats,setSeats] = useState([])

    const {busId} = useParams()

    useEffect(()=>{
        const fetchBusDetails = async()=>{
            try{
                const response = await axios.get(`http://127.0.0.1:8000/api/buses/${busId}`)
                setBus(response.data)
                setSeats(response.data.seats||[])
            }
            catch (error){
                console.log(error)
            }
        }
        fetchBusDetails()
    },[busId])

    const handleBook = async(seatId)=>{
        if (!token){
            alert("please login for booking seat")
            navigate('/login')
            return
        }
        try{
            const response = await axios.post("http://127.0.0.1:8000/api/booking/",
                {seat:seatId},
                {
                    headers:{
                        Authorization:`Token ${token}`
                    }
                }
            )
                alert("successfully bbooked")
                setSeats((prevSeats)=>{
                    prevSeats.map((seat)=>{
                        seat.id === seatId? {...seat, is_booked:true}:seat
                    })
                })
            }
        
        catch (error){
            alert(error.response?.data?.error || "Booking failed")
        }
    }
  return (
    <div>
        {bus && (
            <div >
                <div>{bus.bus_name}</div>
                <div>{bus.number}</div>
                <div>{bus.origin}</div>
                <div>{bus.destination}</div>
                <div>{bus.start_time}</div>
                <div>{bus.reach_time}</div>
            </div>
        )}
        <div >
            {seats.map((seat)=>{
                return(
                    <div key={seat.id}>
                        <button onClick={()=>handleBook(seat.id)} style={{color:seat.is_booked? 'red':'green'}}>Seat Number {seat.seat_number} </button>
                    </div>
                )
            })}
        </div>
    </div>
  )
}


export default BusSeats