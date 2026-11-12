import { useState } from "react";

const Todo = () => {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);
  const handleSubmit = () => {
    setTodo((prev) => [...prev, task]);
  };
  const handleDelete = (idx) => {
    let newarr = todo.filter((el, i) => i != idx);
    setTodo([...newarr]);
  };
  return (
    <div>
      <h2>Todo List</h2>
      <div>
        <label>
          Enter the task{" "}
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </label>
        <button onClick={handleSubmit}>Add task</button>
      </div>
      <div>
        {todo.map((el, i) => (
          <div key={i} style={{display:"flex", gap:"20px"}}>
            <div>{el}</div>
            <button onClick={() => handleDelete(i)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Todo;
