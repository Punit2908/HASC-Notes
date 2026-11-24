import { useContext } from "react";
import { data1 } from "../Context/Context";
import { data } from "../Data/db";

const Category = () => {
  const {category, setCategory, array, setArray} = useContext(data1)
  const handleClick = (e) =>{
    setCategory(e.target.innerText)
    if(e.target.innerText == "All"){
      setArray([...data])
    }else{
      setArray(data.filter((el)=> el.category === e.target.innerText.toLowerCase()))
    }
  }
  return (
    <div style={{
      display:"flex",
      flexDirection:"column"
    }}>
      <h2>Category</h2>
      <button onClick={handleClick}>All</button>
      <button onClick={handleClick}>Sneakers</button>
      <button onClick={handleClick}>Running</button>
      <button onClick={handleClick}>Casual</button>
    </div>
  );
};
export default Category;
