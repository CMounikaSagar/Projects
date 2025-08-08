import React, { useEffect } from 'react'
import { useSelector,useDispatch } from "react-redux";
import { fetchUsers } from './userSlice';

const GetUser = () => {
    const dispatch=useDispatch()
    const users = useSelector(state=>state.user.users)
    const status = useSelector(state=>state.user.status)

    useEffect(() => {
        if(status==="idle"){
            dispatch(fetchUsers())
        }
    },[status,dispatch])

    console.log(users);
    
  return (
    <div>
        <h1>Get User</h1>
        <ul>
            {users.map((user,index)=>{
                return(

                <li key={index}>
                    Name:{user.user_name}
                    Age:{user.user_age}
                    City:{user.user_city}
                    Country:{user.user_country}
                    Email:{user.user_email}
                    Password:{user.user_pwd}
                </li>
                )
            })}
        </ul>
    </div>
  )
}

export default GetUser