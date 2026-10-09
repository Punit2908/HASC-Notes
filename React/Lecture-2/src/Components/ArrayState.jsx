import {react, useState} from 'react'

const ArrayState = () => {
    const [arr, setArr] = useState([])
    const [name, setName] = useState("")
    const handleClick = () => {
        setArr([...arr, name])
    }
  return (
    <div>
        <input type="text" value={name} onChange={e=>setName(e.target.value)} placeholder = "Your name" />
      <p>Names: {arr}</p>
      <button onClick={handleClick}>Add Name</button>
    </div>
  )
}

export default ArrayState
