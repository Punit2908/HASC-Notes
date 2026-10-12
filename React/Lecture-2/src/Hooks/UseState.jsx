import { useState } from "react";

const UseState = () => {
  const [profile, setProfile] = useState({
    name: "",
    age: 0,
    gender: "",
    addr:""
  });

  return (
    <div>
      <h1>User Profile</h1>
      <form className="flex flex-col gap-2">
        <label>
          Name:{" "}
          <input
            type="text"
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            placeholder="Enter your name"
          />Enter your name
        </label>
        <label>
          Age:{" "}
          <input
            type="number"
            value={profile.age}
            onChange={(e) => setProfile({ ...profile, age: e.target.value }) }
            placeholder="Enter your age"
          />Enter your age
        </label>
        <label>
          Gender:{" "}
          <input
            type="text"
            value={profile.gender}
            onChange={(e) => setProfile({ ...profile, gender: e.target.value })}
            placeholder="Enter your gender"
          />Enter your gender
        </label>
        <label>
          <input type="text"
            value={profile.addr}
            onChange= {(e)=>{setProfile({...profile,addr: e.target.value})}}
            placeholder="Enter your address"
          />Enter your address
        </label>
      </form>
      <div>{profile.name}</div>
      <div>{profile.age}</div>
      <div>{profile.gender}</div>
      <div>{profile.addr}</div>
    </div>
  );
};

export default UseState;
