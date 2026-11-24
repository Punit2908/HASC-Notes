import { useContext } from "react"
import { data1 } from "../Context/Context"
import { data } from "../Data/db"
const Prices = () => {
  const {price, setPrice, array, setArray} = useContext(data1)
  const handleClick = (e,lowerPrice,price) => {
    setPrice(price);
    if(e.target.innerText == "Above $150"){
      setArray(data.filter(el=>el.newPrice > price))
    }else{
      setArray(data.filter(el=>el.newPrice <= price && el.newPrice >= lowerPrice))
    }
  }
  return (
    <div style={{
      display:"flex",
      flexDirection:"column"
    }}>
      <h2>Prices</h2>
      <button onClick={(e)=>handleClick(e,0,50)}>Under $50</button>
      <button onClick={(e)=>handleClick(e,50,100)}>$50 - $100</button>
      <button onClick={(e)=>handleClick(e,100,150)}>$100 - $150</button>
      <button onClick={(e)=>handleClick(e,150,150)}>Above $150</button>
    </div>
  )
}
export default Prices