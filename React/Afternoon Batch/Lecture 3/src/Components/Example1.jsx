import { useState } from "react";

const Example1 = () => {
  // let num = 0
  const [num, setNum] = useState(0);
  const [name, setName] = useState("");
  const [active, setActive] = useState(false);
  const [age, setAge] = useState(0);
  const [profile, setProfile] = useState({});
  const [arr, setArr] = useState([]);
  function handleIncrement() {
    setNum((prev) => prev + 1);
  }
  function handleClick() {
    setName("Batman");
  }
  function handleChange(e) {
    setName(e.target.value);
  }
  // console.log(num)
  function handleSubmit() {
    const obj = {
      name,
      age,
    };
    setProfile({
      ...obj,
    });
  }
  console.log(arr)
  return (
    <div>
      <h2>{num}</h2>
      <input type="text" value={name} onChange={handleChange} />
      <h3>{name}</h3>
      <h3>{active ? "Something is there" : "Nothing is there"}</h3>
      <button onClick={() => setActive(!active)}>Change text</button>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleClick}>Change Name</button>

      <br />
      <br />
      <label>
        Name:{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Age:{" "}
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </label>

      <button onClick={handleSubmit}>Submit</button>
      <h2>Name: {profile.name}</h2>
      <h2>Age: {profile.age}</h2>
 
      <button onClick={()=>{
        arr.push(1)
        setArr(arr)
      }}>Add Element</button>

      <div>{arr.map((item, index) => <h2 key={index}>{item}</h2>)}</div>
    </div>
  );
};
export default Example1;
