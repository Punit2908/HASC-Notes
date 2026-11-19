import "./Cards.css"
const Cards = ({albumId, url, title}) => {
  return (
    <div className="container">
      <img src={url} alt={title} />
      <h2>Album Id: {albumId}</h2>
      <h2>Title: {title}</h2>
      <button>Tap to know</button>
    </div>
  )
}
export default Cards