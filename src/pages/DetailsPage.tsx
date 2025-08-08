// ZOD EXAMPLES

import React from 'react'

const DetailsPage = () => {
    // const [formData, setFormData] = React.useState({
    //     name: '',
    //     age: 0,
    //     email: ''
    // });


  return (
    <form>
        <div>
            <label>Name</label>
            <input type='text' id='name' name='name' value='' className='w-full border-2 rounded-md p-1'/>
        </div>
        <div>
            <label>Age</label>
            <input type='number' id='age' name='age' value='' className='w-full border-2 rounded-md p-1'/>
        </div>
        <div>
            <label>Email</label>
            <input type='email' id='email' name='email' value='' className='w-full border-2 rounded-md p-1'/>       
        </div>
    </form>
  )
}

export default DetailsPage