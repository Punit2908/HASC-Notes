import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

const UseRef = () => {
  // const red = useRef()
  // document.addEventListener("click", ()=>{
  //   console.log(red)
  //   red.current.focus()
  // })
  let ref = useRef();
  const [date, setDate] = useState();

  useEffect(() => {
    ref.current = setInterval(() => {
      setDate(new Date().toLocaleTimeString());
    }, 1);

    return ()=>clearInterval(ref.current);
  }, []);
  const handleTimer = () => {
    setDate(0);
    clearInterval(ref.current);
  };
  return (
    <div>
      {/* <input type="text" ref={red}/> */}
      <h2>{date}</h2>
      <button onClick={handleTimer}>Stop Timer</button>
    </div>
  );
};
export default UseRef;
