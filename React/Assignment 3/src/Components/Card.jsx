import "./Card.css"
const Card = ({ img, title, star, reviews, prevPrice, newPrice, company }) => {
  function printStar(star) {
    return <span>⭐</span>;
  }
  return (
    <div className="container">
      <img src={img} alt={title} />
      <div>
        <p>{company}</p>
        <h3>{title}</h3>
        <div>
          {printStar(star)}
          {printStar(star)}
          {printStar(star)}
          {printStar(star)}
          <span>{reviews}</span>
        </div>
        <h2>{newPrice}</h2>
        <del>{prevPrice}</del>
        <button>Add to cart</button>
      </div>
    </div>
  );
};
export default Card;
