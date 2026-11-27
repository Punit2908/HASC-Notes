import { useState } from "react"

const Example1 = () => {
  // let count = 0;
  // console.log(useState(""))
  let [num, setNum] = useState(1)

  const [name, setName] = useState("")
  // console.log(setNum)
  const handleClick = () =>{
    setNum(prev=>prev*3)
  }
  return (
    <div>
      {/* <h2>{count}</h2>
      <button onClick={()=>{
        count++;
        console.log(count)
      }}>Increase</button> */}
      <h2>{num}</h2>
      {/* <button onClick={()=>{
        num++;
        console.log(num)
      }}>Click me</button> */}
      <h2>{name}</h2>
      <button onClick={handleClick}>Click me</button>
      <button onClick={()=>setName("Batman")}>Change name</button>
    </div>
  )
}
export default Example1