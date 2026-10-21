import { useState } from "react";
import "./Todo.css";
import { MdDeleteOutline } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [check, setCheck] = useState(false);
  const [list, setList] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    setList((prev) => [...prev, todo]);
    setTodo("");
  };

  const handleDelete = (index) => {
    let list1 = list.filter((el, idx) => {
      if (idx != index) {
        return el;
      }
    });
    setList(list1);
  };

  return (
    <div>
      <form action="submit">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter the task"
        />
        <button onClick={handleClick}>Add to list</button>
      </form>

      <div>
        {list.map((el, index) => {
          return (
            <div key={index} className={check ? "checked" : ""}>
              {el}{" "}
              <button onClick={() => handleDelete(index)}>
                <MdDeleteOutline color="red" />
              </button>
              <button
                onClick={() => {
                  setCheck(!check);
                }}
              >
                <FaCheckCircle />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Todo;
