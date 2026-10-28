import { useState } from "react"

const Example1 = () => {
  // let num = 0
  const [num, setNum] = useState(0)
  const [name, setName] = useState("")
  const [active, setActive] = useState(false)
  function handleIncrement (){
    setNum(prev => prev+1)
  }
  function handleClick(){
    setName("Batman")
  }
  function handleChange(e){
    setName(e.target.value)
  }
  console.log(num)
  return (
    <div>
     <h2>{num}</h2>
     <input type="text" value={name} onChange={handleChange}/>
     <h3>{name}</h3>
     <h3>{active?"Something is there":"Nothing is there"}</h3>
      <button onClick = {()=>setActive(!active)}>Change text</button>
      <button onClick={handleIncrement}>Increment</button> 
      <button onClick={handleClick}>Change Name</button>
    </div>
  )
}
export default Example1