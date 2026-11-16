import { useEffect, useState } from "react";

const Example1 = () => {
  // const [count, setcount] = useState(0)
  // const [num, setNum] = useState(0)
  const [data, setData] = useState([]);
  // useEffect(()=>{
  //   document.title = count
  //   console.log("Example 1")
  // },[num])
  useEffect(() => {
    async function getData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setData(data);
    }
    getData()
  },[]);
  console.log("Hello");

  return (
    <div>
      {/* <h1>{count}</h1>
      <button onClick={() => setcount(count + 1)}>Increment</button>
      <h1>{num}</h1>
      <button onClick={() => setNum(num + 1)}>Increment</button> */}
      {/* <button onClick={getData}>Fetch Data</button> */}

      {data.map(({ id, title, body }) => (
        <div key={id}>
          <h1>{title}</h1>
          <p>{body}</p>
        </div>
      ))}
    </div>
  );
};
export default Example1;
