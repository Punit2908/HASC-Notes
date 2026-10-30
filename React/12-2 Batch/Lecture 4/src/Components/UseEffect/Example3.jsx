import { useEffect, useState } from "react";

const Example3 = () => {
  const [num, setNum] = useState(0);
  const [count,setCount] = useState(0)
  useEffect(()=>{
    console.log("Hello")
    document.title = `Count ${count}`
  },[num])
  // console.log(count)
  return <div>
    <h2>{num}</h2>
    <button onClick={() => setNum(num + 1)}>Increment</button>
    <button onClick={() => setCount(count + 1)}>Increase Count</button>
  </div>;
};
export default Example3;
