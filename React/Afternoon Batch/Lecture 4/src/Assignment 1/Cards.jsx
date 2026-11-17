const Cards = ({ title, url, albumId }) => {
  return (
    <div
      style={{
        width: "200px",
        display: "flex",
        backgroundColor: "lightcoral",
        color: "white",
        flexDirection: "column",
        padding:"10px",
        borderRadius:"20px"
      }}
    >
      <img src={url} alt={title} />
      <p style={{fontSize:"0.7em", color:"lightcyan"}}>{albumId}</p>
      <h2 style={{fontSize:"1em"}}>{title}</h2>
    </div>
  );
};
export default Cards;
