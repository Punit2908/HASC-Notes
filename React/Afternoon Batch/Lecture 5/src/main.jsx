import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import UseData from "./Context/UseData.jsx";

createRoot(document.getElementById("root")).render(
  <UseData>
    <App />
  </UseData>,
);
