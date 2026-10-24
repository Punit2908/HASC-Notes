import {react, useState} from 'react'

const ArrayState = () => {
    const [arr, setArr] = useState(["Batman", "Superman", "Wonder Woman"])
    // const [product, setProduct] = useState({name: "", price: 0, quantity: 0})
    const [name, setName] = useState("")
    // const [name, setName] = useState("")
    // console.log(number)
    // const [arr, setArr] = useState([])
    // const [name, setName] = useState("")
    // const handleClick = () => {
    //     setArr([...arr, name])
    // }
    // const handleOnChange = e =>{
    //   setName(e.target.value)
    // }
    // const handleClick = e =>{
    //     console.log(name)
    //     console.log(arr)
    //     setArr([...arr, name])
    // }
    const handleClick = (e) => {
        setArr(arr.map(el=> {
          if(el == "Superman"){
            el = "Flash"
          }
          return el
        }
        ))
        console.log(arr)
    }
  return (
    <div>
        {/* <input type="text" value={name} onChange={e=>setName(e.target.value)} placeholder = "Your name" />
      <p>Names: {arr}</p>
      <button onClick={handleClick}>Add Name</button> */}
      {/* <input type="text" value={name} onChange={handleOnChange} placeholder = "Your name" />
      <p>{name}</p> */}
      <p>Names: {arr}</p>
      <button onClick={handleClick}>Change Name</button>
    </div>
  )
}

export default ArrayState
