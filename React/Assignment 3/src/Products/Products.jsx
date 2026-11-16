import Card from "../Components/Card.jsx"
import { data } from "../Data/db.js"
const Products = () => {
  // console.log(data)
  const {img, title, star, reviews, prevPrice, newPrice, company} = data
  return (
    <div style={{display:"flex", flexWrap:"wrap", marginLeft:"200px", gap:"20px"}}>
      {data.map(({img,title,star,reviews,prevPrice,newPrice,company})=>{
        return <Card img={img} title={title} star={star} reviews={reviews} prevPrice={prevPrice} newPrice={newPrice} company={company} />
      })}
    </div>
  )
}
export default Products