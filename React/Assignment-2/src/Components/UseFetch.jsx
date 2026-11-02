import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data,setData]=useState([])
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  },[]);
  return data
};
export default useFetch;
