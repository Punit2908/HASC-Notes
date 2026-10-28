import { useContext } from "react";
import { Data } from "./ContextApi";
import { Data2 } from "./ContextApi";
const Profile = () => {
  // const {name,age} = useContext(Data,Data2)
  const name = useContext(Data);
  const age = useContext(Data2);
  return (
    <>
      {/* <Data.Consumer>
        {(name) =>  
          <Data2.Consumer>
            {(age)=>{
              return <h1>My name is {name} and age is {age}</h1>
            }}
          </Data2.Consumer>
        }
      </Data.Consumer> */}

      <h2>My name is {name} and age is {age}</h2>

    </>
  );
};
export default Profile;
