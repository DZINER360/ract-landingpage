import { createRoot } from "react-dom/client";
import App from "./App.jsx"; // name kuch bhi liko yaha q ki ana to ek he hai
import "./index.css";
import Nav from "./components/nav.jsx";
// import { a, b } from './ agar ek se jyada kr rahe hai

createRoot(document.getElementById("root")).render(
  <>
    <Nav />
    <App />
  </>
);
