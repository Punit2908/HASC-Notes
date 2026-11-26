import { useId, useRef } from "react";

const RefAndId = () => {
  const id1 = useId();
  const id2 = useId();
  document.addEventListener("click", ()=>{
    ref.current.focus();
  })
  const ref = useRef()
  return <div>
    {/* {id1} */}
    <form>
      <input type="text" id={`${id1}-name`} ref={ref}/>
      <input type="email" name="" id={`${id2}-email`} />
    </form>


  </div>;
};
export default RefAndId;
