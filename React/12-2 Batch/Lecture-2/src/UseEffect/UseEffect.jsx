import { useEffect, useState } from "react";

const UseEffect = () => {
  const [num, setNum] = useState(0);
  let [data, setData] = useState([]);

  useEffect(() => {
    try {
      async function dataA() {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
        );
        data = await response.json();
        setData(data)
        console.log(data);
      }
      dataA();
    } catch (error) {
      console.log(error);
    }
  },[]);



  // useEffect(()=>{
  //   document.title = `${num}`
  //   console.log("second")
  // },[num])
  if (!data.length) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div>
        {data.map((el) => {
          return (
            <div key={el.id}>
              <h1>{el.title}</h1>
              <p>{el.body}</p>
            </div>
          );
        })}
      </div>
      {/* <div>{num}</div>
      <button onClick={update}>Click me</button>
      <div>{count}</div>
      <button onClick={()=>setCount(count+1)}>Click me</button> */}
    </div>
  );
};
export default UseEffect;
