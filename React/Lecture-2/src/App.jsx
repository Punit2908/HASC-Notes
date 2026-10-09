import Greet from "./Components/Greet";
// import "./App.css"
import { IoHomeOutline } from "react-icons/io5";
import Product from "./Components/Product";
import ArrayState from "./Components/ArrayState";
// const Hello = ({img}) =>{
//   return <img src={img}/>
// }
export default function App() {
  // const style = {
  //   backgroundColor: "red",
  //   color: "white"
  // }
  return (
    <div>
      {/* <div className = "bg-red-500 flex text-white gap-2">
        <IoHomeOutline color="black" size = {30}/>
        <div>Hello World</div>
        <div>Hello World</div>
        Hello World</div> */}
      {/* <Greet>
        <h1>Hello World</h1>
        <p>This is a paragraph</p>
        <p>This is another paragraph</p>
      </Greet> */}
      {/* <Hello  img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYt9JKA69soScWphBshpbjQUcw-8Ytcatv24oiDhSNHg&s=10"/> */}
        <ArrayState />
        <Product />
    </div>
  )
}
