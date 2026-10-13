import { useState } from 'react'

const Counter = () => {
    const [num, setNumber] = useState(0)
    const [step, setStep] = useState(1)
    const handleIncrement = () => {
        setNumber(num+1)
    }
    const handleDecrement = () => {
        setNumber(num-1)
    }
    const handleStepIncrement = () => {
        setNumber(num+step)
    }
    const handleStepMultiply = () => {
        setNumber(num*step)
    }
  return (
    <div>
      <h2>Counter Assignment</h2>
      <input type="number" value={step}  onChange={e=>setStep(Number(e.target.value))} placeholder="Step" />
      <div>{num}</div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleStepIncrement}>Add step</button>
      <button onClick={()=>{setNumber(0); setStep(1)}}>Reset</button>
      <button onClick={handleStepMultiply}>Step Multiply</button>
    </div>
  )
}

export default Counter
