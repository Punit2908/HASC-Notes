import { useEffect, useState } from "react";
import Cards from "./Cards";

const Post = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    try {
      async function getData() {
        const res = await fetch("https://jsonplaceholder.typicode.com/photos");
        const data1 = await res.json();
        setData(data1);
      }
      getData();
    } catch {
      console.log("Data nahi aaya");
    }
  });
  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"center", gap:"20px", flexWrap:"wrap"}}>
      {data.map(({ id, thumbnailUrl, title, url }) => (
        <Cards key={id} title={title} url={url} albumId={thumbnailUrl} />
      ))}
    </div>
  );
};
export default Post;
