import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
  

const ThirdComponent = (props) => {

    const [userName,setUserName] = useState("")
    const [userDetails,setUserDetails] = useState()
    const notify = () => toast("Wow so easy!");


    const getUserName = (e) => {
        setUserName(e.target.value)
    }

    const getUserDetails = (e) => {
        e.preventDefault()
        setUserDetails(userName)
        notify()
        console.log(userName)
    }


    return (
        <div>
            <section>
                <form onSubmit={getUserDetails}>
                        <h1>{userDetails}</h1>
                        <ToastContainer/>
                        <input type='text' name='name' placeholder='enter your name' onChange={getUserName}/>  
                        <button>submit</button>
                </form>
            </section>
        </div>
    );
}

export default ThirdComponent;