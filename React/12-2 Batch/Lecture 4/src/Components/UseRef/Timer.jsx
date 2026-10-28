import { useEffect, useRef, useState } from "react"

const Timer = () => {
  const interval = useRef(0)
  const [id, setId] = useState(0)
  // useEffect(()=>{
  //   interval.current = setInterval(() => {
  //     setId(prev=>prev+1)
  //   }, 1000);

  //   return ()=>clearInterval(interval.current)
  // },[])
  const start = () =>{
    interval.current = setInterval(() => {
      setId(prev=>prev+1)
    }, 1000);
  }
  const stop = ()=>{
    clearInterval(interval.current)
  }

  const reset = () =>{
    setId(0)
    clearInterval(interval.current)
  }
  
  return (
    <div>
      <h2>{id}</h2>
      {/* <button onClick={()=>clearInterval(interval.current)}>Stop</button> */}
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}
export default Timer