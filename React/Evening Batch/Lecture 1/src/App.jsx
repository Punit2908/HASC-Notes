// const App = () => {
//   let num = 10
//   function greet(){
//     return 'Hello I am Batman'
//   }
//   return (
//     <>
//       <h2>Hello</h2>
//       <h3>{greet()}</h3>
//     </>


//   )
// }
// export default App


// const Greet = () =>{
  //   return <h1>Hello I am Batman</h1>
  // }
  
  import Footer from "./Components/Footer"
import Greet from "./Components/Greet"
import List from "./Components/List"
import Main from "./Components/Main"
import Navbar from "./Components/Navbar"

const App = () => {
  return (
    <div>
      {/* <Greet /> */}
      {/* <Navbar />
      <Main />
      <Footer /> */}
      <List />
    </div>
  )
}
export default App