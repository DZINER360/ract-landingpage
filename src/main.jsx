import { createRoot } from "react-dom/client";
import App from "./App.jsx"; // name kuch bhi liko yaha q ki ana to ek he hai
import "./index.css";
// import { a, b } from './ agar ek se jyada kr rahe hai

createRoot(document.getElementById("root")).render(
  <>
    <App />
  </>
);
