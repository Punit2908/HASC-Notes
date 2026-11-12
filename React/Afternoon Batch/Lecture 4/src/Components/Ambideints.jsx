import questions from "../DB/db.js";
import { useState } from "react";
import Questions from "./Questions.jsx";
const Ambideints = () => {
  
  const [data, setData] = useState([...questions]);
  // console.log(data);
  // const {id, question, answer} = questions
  return (
    <div>
      {data.map(({ id, question, answer }) => (
        <Questions question={question} answer={answer} key = {id}/>
      ))}
    </div>
  );
};
export default Ambideints;

