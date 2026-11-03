import { useState } from "react"

const Example3 = () => {
  // let num = 10
  const [num, setNum] = useState(0)
  const handleClick = () =>{
    // console.log(setNum)
    setNum(num+1)
  }
  const handleDecrease = () =>{
    setNum(num-1)
  }
  console.log(num)
  return (
    <div>
      <h2>{num}</h2>
      <button onClick={handleClick}>Increase</button>
      <button onClick={handleDecrease}>Decrese</button>
      <button onClick={()=>{setNum(num*2)}}>Multiply</button>
    </div>
  )
}
export default Example3