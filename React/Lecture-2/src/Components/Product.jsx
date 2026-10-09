import { useState } from 'react'

const Product = () => {
    const [name,setName] = useState("")
    const [count, setCount] = useState(0)
    // // console.log(count)
    // let count = 0;
    const handleChange = e =>{
        setName(e.target.value)
    }
    const handIncrement = e =>{
        setCount(count+1)
        console.log(count)
    }
    const handleDecrement = e =>{
        setCount(count-1)
        console.log(count)
    }
  return (
    <div>
        {/* <input type="text" value={name} onChange={handleChange} placeholder = "Your name" />
        <p>{name}</p> */}
        {/* <button onClick={handleClick}>Increment</button> */}
        <div>{count}</div>
        <button onClick={handIncrement}>Increment</button> 
        <br />
        <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default Product
