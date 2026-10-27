import { Data } from "./UserProvider";
import { useContext } from "react";
const UserProfile = () => {
  const { user } = useContext(Data);
  // console.log(user)
  return <>{user && <h2>Hello {user.name}</h2>}</>;
};
export default UserProfile;
