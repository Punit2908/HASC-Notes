import { useRef, useState } from "react"

const Example2 = () => {
  const num = useRef(0)
  const [count, setCount] = useState(0)
  return (
    <div>
      <h2>{num.current}</h2>
      <button onClick={()=>{num.current++
        console.log(num.current)
      } }>Increment</button>
      <button onClick={()=>num.current--}>Decrement</button>
      <button onClick={()=>num.current=0}>Reset</button>
      <h2>{count}</h2>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
      <button onClick={()=>setCount(0)}>Reset</button>
    </div>
  )
}
export default Example2