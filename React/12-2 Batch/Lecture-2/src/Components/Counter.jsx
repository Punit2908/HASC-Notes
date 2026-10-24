import React, { useState } from 'react'
import Decrement from './Decrement'

const Counter = () => {
    const [count, setCount] = useState(0)
    const hancleClick = ()=>{
        setCount(prev => prev+1)
    }
    const decrement = ()=>{
        setCount(prev => prev-1)
    }
  return (
    <div>
      <h2>{count}</h2>
      <button onClick= {hancleClick}>Increment</button>
      <Decrement decrement={decrement}/>
    </div>
  )
}

export default Counter
