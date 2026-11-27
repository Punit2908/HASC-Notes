import { useState } from "react";

const Example2 = () => {
  const [active, setActive] = useState(false);
  const [data, setData] = useState({ name: "Batman", age: 23 });
  const [arr, setArr] = useState([1, 2, 3, 4, 5]);
  const lightTheme = {
    backgroundColor: "white",
    color: "black",
  };
  const darkTheme = {
    backgroundColor: "black",
    color: "white",
  };

  return (
    <div>
      <div style={active ? darkTheme : lightTheme}>
        <h2>Hello world</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam a
          provident tempora ipsa eligendi aliquid, inventore dolore aut adipisci
          assumenda fugiat veritatis reprehenderit? Nisi, iusto incidunt
          quisquam tempora quam ex.
        </p>
      </div>
      <h2>{active ? "Light" : "Dark"}</h2>
      {active && <h2>Active</h2>}
      <button onClick={() => setActive(!active)}>Click me</button>

      <h2>{data.name}</h2>
      <h2>{data.age}</h2>
      <button
        onClick={() => setData((prev) => ({ ...prev, name: "Superman" }))}
      >
        Change Name
      </button>
      <button onClick={() => setData((prev) => ({ ...prev, age: 50 }))}>
        Change Age
      </button>

      {arr.map((el, idx) => {
        return (
          <div key={idx}>
            <h2>Element {idx}: </h2>
            <h2>{el}</h2>
          </div>
        );
      })}

      <button onClick={() => setArr((prev) => [...prev, 6, 7, 8, 9, 10])}>
        Change Array
      </button>
    </div>
  );
};
export default Example2;
