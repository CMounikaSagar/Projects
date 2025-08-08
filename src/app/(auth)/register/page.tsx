
import React from 'react'

export default async function Page() {
    await new Promise((resolve) => {
        setTimeout(()=>{
            resolve('intentional delay')
        },2000)
    }  
)
    
    return (
        <div>
            <h1>Register page</h1>
        </div>
    )
}