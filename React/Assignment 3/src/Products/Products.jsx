import { useContext } from "react";
import Card from "../Components/Card.jsx";
import { data1 } from "../Context/Context.jsx";

const Products = () => {
  const { array } = useContext(data1);
  console.log(array)
  // console.log(data)
  return (
    <>
      <h2 style={{ marginLeft: "250px" }}>Products</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginLeft: "250px",
          gap: "20px",
        }}
      >
        {array.map(
          ({ img, title, star, reviews, prevPrice, newPrice, company }) => {
            return (
              <Card
                img={img}
                title={title}
                star={star}
                reviews={reviews}
                prevPrice={prevPrice}
                newPrice={newPrice}
                company={company}
              />
            );
          },
        )}
      </div>
    </>
  );
};
export default Products;
