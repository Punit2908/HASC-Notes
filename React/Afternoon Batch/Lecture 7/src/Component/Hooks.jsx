import { useEffect, useId, useRef, useState } from "react";

const Hooks = () => {
  const id = useId();
  // console.log(useRef())
  const ref = useRef();
  const timer = useRef();
  const [date, setDate] = useState();
  // console.log(ref);
  // document.addEventListener("click", ()=>{
  //   ref.current.focus();
  // })
  useEffect(()=>{
    timer.current = setInterval(() => {
      let date = new Date().toLocaleTimeString();
      setDate(date);
    }, 1);
    return ()=>clearInterval(timer.current)
  },[]);
  return (
    <div>
      <input type="text" id={`${id}-text`} ref={ref} />
      <input type="text" id={`${id}-text2`} />
      <h2>{date}</h2>
      <button onClick={()=>clearInterval(timer.current)}>Stop</button>
    </div>
  );
};
export default Hooks;
