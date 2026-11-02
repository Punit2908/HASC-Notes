import "./Card.css"
const Card = ({data}) => {
  return (
    <div className="container">
      <img src={data.url} alt="image" />
      <h3>{data.title}</h3>
    </div>
  )
}
export default Card