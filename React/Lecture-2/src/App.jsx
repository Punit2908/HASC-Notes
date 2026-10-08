import Greet from "./Components/Greet";

// const Hello = ({img}) =>{
//   return <img src={img}/>
// }
export default function App() {
  return (
    <div>
      <Greet>
        <h1>Hello World</h1>
        <p>This is a paragraph</p>
        <p>This is another paragraph</p>
      </Greet>
      {/* <Hello  img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYt9JKA69soScWphBshpbjQUcw-8Ytcatv24oiDhSNHg&s=10"/> */}
    </div>
  )
}
