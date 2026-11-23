import { useContext } from "react"
import { data1 } from "../Context/Context"
import { data } from "../Data/db";

const Recommended = () => {
  let {recommendation, setRecommendation, array, setArray} = useContext(data1)
  const handleClick = (e) => {
    setRecommendation(e.target.innerText)
    if(e.target.innerText){
      setArray(data.filter((item) => item.company === e.target.innerText))
      // console.log(array)

      if(e.target.innerText === "All Products") {
        setArray([...data])
      }
    }
  }
  return (
        
    <div style={{marginLeft:"200px"}}>
      <p>Recommended</p>
      <div>
        <button onClick={handleClick}>All Products</button>
        <button onClick={handleClick}>Nike</button>
        <button onClick={handleClick}>Adidas</button>
        <button onClick={handleClick}>Puma</button>
        <button onClick={handleClick}>Vans</button>
        <button onClick={handleClick}>Converse</button>
      </div>
    </div>
  );
};
export default Recommended;
