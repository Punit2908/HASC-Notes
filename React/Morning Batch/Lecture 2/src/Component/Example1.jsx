import { useState } from "react"

const Example1 = () => {
  // let count = 0;
  // console.log(useState())
  const [num, setNum] = useState(0)
  const [name, setName] = useState("")
  // console.log(setNum)
  // const handleClick = () =>{
  //   setNum(num*3)
  // }
  return (
    <div>
      <h2>{num}</h2>
      <h2>{name}</h2>
      <button onClick={()=>setNum(11)}>Click me</button>
      <button onClick={()=>setName(name+"a")}>Change name</button>
    </div>
  )
}
export default Example1