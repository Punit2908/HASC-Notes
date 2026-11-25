import Greet from "./Components/Greet";
import Navbar from "./Components/Navbar";
const App = () => {
  let num = "Hello how are you?";
  function greet() {
    // console.log("first")
    return "Hello World";
  }
  const obj = { name: "Batman" };
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  const list = ["hello", "world", "how", "are", "you"];
  return (
    <div>
      {/* {obj.name} */}
      {arr.map((el, idx) => (
        <div key={idx}>
          <h1>{el}</h1>
        </div>
      ))}
      <ul className="list-decimal">
        {list.map((el,idx)=><li key={idx}>{el}</li>)}
      </ul>
    </div>
  );
};
export default App;
