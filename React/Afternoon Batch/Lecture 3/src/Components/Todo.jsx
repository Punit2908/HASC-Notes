import { useState } from "react";

const Todo = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const addTask = (e) => {
    e.preventDefault();
    if (todos.includes(task)) return alert("Element already exist");
    console.log("Hello");
    setTodos((prev) => [...prev, task]);
    setTask("");
  };
  const handleDelete = (el) => {
    setTodos(todos.filter((e) => e != el));
  };
  return (
    <div>
      <form action="submit">
        <label>
          Enter the task:
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </label>
        <button onClick={addTask}>Add Task</button>
      </form>
      {todos.map((el) => {
        return (
          <div key={Math.random()}>
            <h2>{el}</h2>
            <button onClick={() => handleDelete(el)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};
export default Todo;
