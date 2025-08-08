import React from 'react'
import { Button,Alert } from 'react-bootstrap'

const But = () => {
  return (
    <div>
        <Button variant='primary' size='lg' onClick={() => alert('Clicked!')}>Boot</Button>
        <Alert variant='danger' dismissible >Error Occured</Alert>
    </div>
  )
}

export default But