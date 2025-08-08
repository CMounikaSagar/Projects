import React,{useState,useEffect} from 'react'

const FourthComponent = () => {

    const [ city , setCity ] = useState("Koimbatore")
    
    useEffect(()=>{
        if(city === "hyderabad"){
            setCity("Delhi")
        }
        else{
            setCity("koimbatore")
        }
    },[city])
    

  return (
    <div>FourthComponent { city }</div>
  )
}

export default FourthComponent