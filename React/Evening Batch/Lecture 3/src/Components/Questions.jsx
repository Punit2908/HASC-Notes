import { useState } from "react";
import Answer from "./Answer.jsx";
import questions from "./db.js";
const Questions = () => {
  // const [active, setActive] = useState(false);
  const data = questions;
  console.log(data);
  return (
    <div>
      {data.map(({ id, question, answer }) => (
        <Answer
          question={question}
          answer={answer}
          key={id}
        />
      ))}
    </div>
  );
};
export default Questions;
