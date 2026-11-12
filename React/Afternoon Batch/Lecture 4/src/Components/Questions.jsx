import { useState } from "react";

const Questions = ({ question, answer }) => {
  const [active, setActive] = useState(false);
  return (
    <>
      <div
        style={{
          backgroundColor: "grey",
          margin: "10px",
          padding: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="question">
          {question} {""}
        </div>
        <span onClick={() => setActive(!active)}>{active ? "-" : "+"}</span>
      </div>
      {active && <div className="answer" onClick={()=>setActive(!active)}>{answer}</div>}
    </>
  );
};
export default Questions;
