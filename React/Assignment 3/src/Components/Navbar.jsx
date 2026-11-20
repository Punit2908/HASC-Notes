import { useContext, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { data1 } from "../Context/Context";
import { data } from "../Data/db";
const Navbar = () => {
  const { name, setName, setArray, array } = useContext(data1);
  const handleChange = (e) => {
    if (e.target.value.trim()) {
      setName(e.target.value.trim());
      setArray(
        data.filter((item) =>
          item.title.toLowerCase().includes(e.target.value.toLowerCase()),
        ),
      );
    }else if(e.target.value === "") {
      setName("")
      setArray([...data])
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        marginLeft: "200px",
        border: "1px solid",
        padding: "10px",
        backgroundColor: "lightcyan",
      }}
    >
      <div>
        <input
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="Enter the name"
        />
      </div>
      <div>
        <FaHeart />
      </div>
      <div>
        <FaShoppingCart />
      </div>
      <div>
        <RxAvatar />
      </div>
    </div>
  );
};
export default Navbar;
