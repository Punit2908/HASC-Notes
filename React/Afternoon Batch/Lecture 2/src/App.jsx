import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
const App = () => {
  const num = 10;
  function add(a, b) {
    return a + b;
  }

  const arr = [1,2,3,4,5,6,7]

  const bool = true

  const obj = {
    name: "Batman",
    age: 23,
    address: {
      city: "Gotham",
      country: "USA"
    }
  }

  // const style = { color: "red", fontSize: "20px" }
  return (
    <div>
      <Navbar />
      <h1 >Hello World</h1>
      <p>This is a paragraph</p>
      <div>{num}</div>
      <div>{add(10, 20)}</div>
      {/* <div>{arr}</div> */}
      {arr.map((el)=>{
        return (<div key = {Math.random()}>{el}</div>)
      })}
      <div>{bool?"true":"false"}</div>
      <label>Name: <input type="text" /></label>
      <div>{obj.name}</div>
      <div>{obj.age}</div>
      <div>{obj.address.city}</div>
      <Footer />
    </div>
  );
};
export default App;
