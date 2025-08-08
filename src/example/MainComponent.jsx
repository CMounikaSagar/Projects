import React, { useReducer, useState } from 'react'
import SingleComponent from './SingleComponent'


const intialState = {count: 0}

const reducer = (state, action) => {
  switch (action.type) {
    case 'increase':
      return {count: state.count + 1}
    case 'decrease':
      return {count: state.count + 1}
    default:
      return state;
  }
}

const MainComponent = () => {

  const [state, dispatch] = useReducer(reducer,intialState)

  const increaseHandle = () =>{
    dispatch({type:'increase'})
  }

  const decreaseHandle = () =>{
    dispatch({type:'decrease'})
  }


  return (
    <div>
        <SingleComponent/>
        <div>
          <h1>Count:{state.count}</h1>
          <button onClick={increaseHandle}>Increase</button>
          <button onClick={decreaseHandle}>Decrease</button>
        </div>
    </div>
  )
}

export default MainComponent
