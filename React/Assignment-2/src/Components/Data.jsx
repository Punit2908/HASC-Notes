import Card from "./Card";
import useFetch from "./UseFetch";
const Data = () => {
  const data = useFetch("https://jsonplaceholder.typicode.com/photos/?_limit=30");
  // console.log(data);
  return (
    <div>
      {data.map((el) => {
        // console.log(el.title)
        return <Card data={el}/>;
      })}
    </div>
  );
};
export default Data;
