import { useState } from "react"

const Example4 = () => {
  const [arr,setArr] = useState([])
  const [name, setName] = useState("")
  const handleClick = () =>{
    // console.log("Hello")
    console.log(arr)
    setArr(prev=>[...prev,name])
  }
  return (
    <div>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter the name"/>
      <button onClick={handleClick}>Click Me</button>

      {arr.map(el=><div key={Math.random()}>{el}</div>)}
    </div>
  )
}
export default Example4