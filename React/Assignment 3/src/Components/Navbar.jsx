import { useState } from "react"
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
const Navbar = () => {
  const [name, setName]=useState("")
  return (
    <div style={{display:"flex", justifyContent:"space-around", alignItems:"center", marginLeft:"200px", border:"1px solid",padding:"10px"}}>
      <div>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter the name"/>
      </div>
      <div>
        <FaHeart />
      </div>
      <div>
        <FaShoppingCart />
      </div>
      <div>
        <RxAvatar />
      </div>
    </div>
  )
}
export default Navbar