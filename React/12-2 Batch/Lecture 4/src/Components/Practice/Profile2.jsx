import { useContext } from "react";
import { Data } from "./ContextApi";
const Profile2 = () => {
  const name = useContext(Data);
  return <div>I am {name} from Profile2</div>;
};
export default Profile2;
