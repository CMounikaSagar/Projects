import React, { useEffect, useState } from 'react'

const SecondComponent = () => {

    const [number,setNumber] = useState(0)

    // const handleSubmit = () => {
    //     setNumber(number + 1)
    // }

    // use state with objects
    const [details,setDetails] = useState({counter:0,name:''});


    const handleSubmit=()=>{
        setDetails((prev) => ({
            ...prev,
            counter:prev.counter+1,
        }))
    }
    
    console.log(details)

//     const[count,setCount] = useState(0)

//     useEffect(()=>{
//         console.log(count)

//         return () => {
//             console.log(count)
//         }

//     },[count])
  return (
    <div>
        <input type='text' onChange={e =>e.target.value}/>
        <h1>Counter:{details}</h1>
        <button onClick={handleSubmit}>Increase</button>
    </div>
  )
}

export default SecondComponent