import React from 'react';
import { Button } from 'react-bootstrap'

const Mango=()=>{
    return (
        <h1>Mangoes are sweet</h1>
    )
}

function Sample(props) {
    return (
        <div className='container'>
            <p bg="secondary">Sample</p>
            <Mango/>
            <Button variant="success">Submit</Button>
        </div>
    );
}

export default Sample;