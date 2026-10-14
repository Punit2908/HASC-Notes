import { useState } from "react";

const FAQ = () => {
  const [questions, setQuestions] = useState([
    {
      question: "What is HASC?",
      answer:
        "HASC stands for Higher Education Students Club. It is a student-run organization that aims to provide a platform for students to connect, learn, and grow together.",
    },
    {
      question: "What is HASC?",
      answer:
        "HASC stands for Higher Education Students Club. It is a student-run organization that aims to provide a platform for students to connect, learn, and grow together.",
    },
    {
      question: "How can I join HASC?",
      answer:
        "To join HASC, you can visit our website and register for an account. Once you have registered, you can start contributing to our community by sharing your knowledge, participating in discussions, and connecting with other students.",
    },
  ]);
  const [on,setOn] = useState(false)
  return (
    <div>
      <div style={{ fontSize: "20px", fontWeight: "bold" }}>FAQs</div>
      {questions.map((item, index) => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "10px",
            }}
            key={index}
          >
            {" "}
            <p
              style={{
                height: "40px",
                width: "80%",
                backgroundColor: "gray",
                fontWeight: "bolder",
                padding: "10px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>{item.question}</span>
              <span onClick={()=>setOn(!on)}>+</span>{" "}
              </p>
            <p
              style={{
                height: "40px",
                width: "80%",
                backgroundColor: "lightgray",
                padding: "10px",
                display: `${on?"block":"none"}`,
              }}
            >
              {item.answer}
            </p>
          </div>
        );
      })}
    </div>
  );
};
export default FAQ;
