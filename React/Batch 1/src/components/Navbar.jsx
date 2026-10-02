import "./Navbar.css"
import { ImCross } from "react-icons/im";
import { IoReorderThree } from "react-icons/io5";
export const Navbar = ()=>{

  return(
    <div className="navbar">
      <div className="logo">Logo</div>
      <div className="icon cross">
        <ImCross />
      </div>
      <div className="icon three">
        <IoReorderThree />
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}