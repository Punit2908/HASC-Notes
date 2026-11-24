import { useContext } from "react";
import { data1 } from "../Context/Context";
import { data } from "../Data/db.js";
const Colors = () => {
  const { color, setColor, array, setArray } = useContext(data1);
  const handleClick = (e) => {
    setColor(e.target.innerText)
    if(e.target.innerText == "All"){
      setArray([...data])
    }else{
      setArray(data.filter((el)=> el.color === e.target.innerText.toLowerCase()))
    }
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2>Colors</h2>
      <button onClick={handleClick}>Black</button>
      <button onClick={handleClick}>White</button>
      <button onClick={handleClick}>Red</button>
      <button onClick={handleClick}>Blue</button>
      <button onClick={handleClick}>Green</button>
    </div>
  );
};
export default Colors;
