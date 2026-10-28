import { useState } from "react";

const Example1 = () => {
  // let num = 10
  const [num, setNum] = useState(0);
  const [name, setName] = useState("");
  const [active,setActive] = useState(false)
  function handleIncrement() {
    setNum((prev) => prev + 1);
  }

  const handleName = () => {
    setName("Batman")
  };

  // function handleChange(text){
  //   setName(text)
  // }
  // console.log(num)

  const light = {
    color: "black",
    background: "white",
  };

  const dark = {
    color: "white",
    background: "black",
  }

  return (
    <div style={active?light:dark}>
      <h2>{num}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={()=>setNum(prev=>prev-1)}>Decrement</button>
      <button onClick={()=>setNum(0)}>Reset</button>
      <h2>{name}</h2>
      <button onClick={handleName}>Change Name</button>
      <br /><br />
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />

      <h2>{active?"Something is there":"Nothing is there"}</h2>
      <button onClick={()=>setActive(!active)}>{active?"Dark":"Light"}</button>
    </div>
  );
};
export default Example1;
