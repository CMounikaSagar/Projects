// ZUSTAND EXAMPLE

import  {  useEffect } from 'react'
import { useUserStore } from '@/store/userStore'

const Userdetails = () => {
    
    const { users, fetchUsers } = useUserStore();

    useEffect(()=>{
        fetchUsers();
    },[fetchUsers])

    // if(loading) {
    //     return <h1>Loading...</h1>
    // }
    // if(error){
    //     return <h2>{error}</h2>
    // }
    console.log(users);
  return (
    <div>
        <h1>User List</h1>
        <ul>
            {users.map(user => (
                <li key={user.id}>
                    {user.name} - {user.email}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Userdetails