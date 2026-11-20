import { useContext } from "react";
import { Data } from "../Context/UseData";

const Example2 = () => {
  const { name, setName } = useContext(Data);
  return (
    <div>
      <h2>Example 2</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter a name"
      />
      <h2>{name}</h2>
    </div>
  );
};
export default Example2;
