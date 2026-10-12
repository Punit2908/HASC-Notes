import { useState } from 'react'

const UseState2 = () => {
    const [name, setName] = useState([{ename:""}])
    const handleChange = (e)=>{
        setName([{...name, ename: e.target.value}])
    }
  return (
    <div>
      <input type="text" value={name.ename} onChange={handleChange}/>
      {name.map((item,index)=>
      <div key={index}>{item.ename}</div>
      )}
    </div>
  )
}

export default UseState2;
