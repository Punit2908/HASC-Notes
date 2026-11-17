import Greet from "./Components/Greet";
import Navbar from "./Components/Navbar";
const App = () => {
  let num = "Hello how are you?";
  function greet() {
    // console.log("first")
    return "Hello World";
  }
  const obj = {
    name: "John",
    age: 30,
  }
  const arr = [1, 2, 3, 4, 5];
  return (
    <div>
      <Greet />
      <Navbar />
      {/* <h1>{a}</h1>
      <h1>{num}</h1>
      <h2>{arr}</h2>
      <h2>{greet()}</h2>
      <h1>Hello World</h1>
      <h2>{obj.name}</h2> */}
    </div>
  );
};
export default App;
