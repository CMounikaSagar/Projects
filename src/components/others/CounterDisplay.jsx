import React from 'react'
import { useSelector } from 'react-redux'

const CounterDisplay = () => {

    const countValue = useSelector((state) => state.counter.value)

    return (
        <div>
            <h1>Counter Display{countValue}</h1>
        </div>
    )
}

export default CounterDisplay