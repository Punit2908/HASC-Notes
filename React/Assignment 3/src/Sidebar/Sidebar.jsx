import Category from "./Category";
import Colors from "./Colors";
import Prices from "./Prices";

const Sidebar = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "200px",
        height: "100vh",
        border: "1px solid",
        overflow:"scroll"
      }}
    >
      Sidebar
      <Category />
      <Prices />
      <Colors />
    </div>
  );
};
export default Sidebar;
