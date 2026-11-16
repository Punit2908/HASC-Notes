import { useState } from "react"

const Example2 = () => {
  console.log("Example 2")
  const [num,setNum]=useState(0)
  return (
    <div>
      <h2>{num}</h2>
      <button onClick={() => setNum(num + 1)}>Increment</button>
    </div>
  )
}
export default Example2