import { useEffect } from "react";
import { useState } from "react";

const Example6 = () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);
  useEffect(() => {
    document.title = count;
    console.log("Hello");
  },[num]);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Add count</button>

      <h2>{num}</h2>
      <button onClick={() => setNum(num + 1)}>Add num</button>
    </div>
  );
};
export default Example6;
