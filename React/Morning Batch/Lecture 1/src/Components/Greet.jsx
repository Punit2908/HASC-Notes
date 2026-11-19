import "./Greet.css";
const Greet = () => {
  const style = { backgroundColor: "red", color: "white", padding: "10px" }
  return (
    <div className="bg-amber-100 text-red-300 flex gap-2 container">
      <h1>Hello I am a greet Component</h1>

      <div style={style}>
        <p>Hello I am Batman</p>
      </div>
    </div>
  );
};
export default Greet;
