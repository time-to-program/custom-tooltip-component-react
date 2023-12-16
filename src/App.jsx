import React from "react";
import "./App.css";
import Tooltip from "./components/Tooltip/Tooltip";

const App = () => {
  return (
    <div className="container">
      <Tooltip infoText="Your order will be place after the payment is successful">
        <button className="btn">Pay Now</button>
      </Tooltip>
    </div>
  );
};

export default App;
