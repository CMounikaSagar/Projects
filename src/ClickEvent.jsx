import React,{useState} from 'react'

const ClickEvent = () => {

    const [number,setNumber] = useState(0)

    const increament = () => {
        setNumber(number+1)
    }

    const decreament = () => {
        if (number === 0){

            setNumber(0)
        }
        else{
            setNumber(number-1)
        }
    }

  return (
    <div>
        <button onClick={increament}>Increament</button>
        <h1>{number}</h1>
        <button onClick={decreament}>Decreament</button>
    </div>
  )
}

export default ClickEvent