import { useState } from "react";

const RandomColor = () => {
  const [color, setColor] = useState("rgb(0,0,0");
  const [prevColor, setPrevColor] = useState(["rgb(0,0,0"]);

  const generateColor = () => {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  };
  const handleChange = () => {
    const newColor = generateColor();
    prevColor.unshift(newColor);
    setColor(newColor);
    setPrevColor(prevColor.splice(0, 5));
  };
  return (
    <div>
      <div
        style={{ backgroundColor: color, height: "100px", width: "600px" }}
      ></div>
      <p>{color}</p>

      <button
        onClick={handleChange}
        style={{
          marginTop: "10px",
          padding: "5px",
          backgroundColor: "#007bff",
          color: "white",
        }}
      >
        Change Color
      </button>
      <section>
        {prevColor.map((item, idx) => {
          return (
            <div
              key={idx}
              style={{
                backgroundColor: item,
                height: "50px",
                marginTop: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {item}
            </div>
          );
        })}
      </section>
    </div>
  );
};
export default RandomColor;
