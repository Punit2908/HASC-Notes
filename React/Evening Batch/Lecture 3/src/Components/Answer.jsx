import { useState } from "react";

const Answer = ({ question, answer}) => {
  const [active, setActive] = useState(false);
  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "30px",
          padding: "20px",
          fontSize: "1.3em",
        }}
        onClick={() => setActive(!active)}
      >
        <div>{question}</div>
        <span>{active ? "-" : "+"}</span>
      </div>
      {active && <div>{answer}</div>}
    </div>
  );
};
export default Answer;
