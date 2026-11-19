import { useEffect } from "react";
import { useState } from "react";
import Cards from "./Cards";

const Example7 = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    try {
      async function getData() {
        const res = await fetch("https://jsonplaceholder.typicode.com/photos");
        const data = await res.json();
        console.log(data);
        setData(data);
      }
      getData();
    } catch (error) {
      console.log("Data nhi aaya");
    }
  }, []);
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap:"20px", justifyContent:"space-evenly" }}>
      {data.map(({ albumId, id, title, url }) => (
        <Cards key={id} albumId={albumId} url={url} title={title} />
      ))}
    </div>
  );
};
export default Example7;
