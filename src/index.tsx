import "./index.css";
import App from "./App";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

const myComp = (
  <div>
    <App />
  </div>
);
ReactDOM.render(myComp, document.getElementById("root"));

reportWebVitals();
