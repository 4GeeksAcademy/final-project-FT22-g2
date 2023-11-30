import React from "react";
import { CardContainer4, CardContainer16 } from "./Card.jsx";

const Containercardshome = () => {
  return (
    <div
      className="container-fluid d-flex"
      style={{ backgroundColor: "#f5f5f5" }}
    >
      <div className="container w-100">
        <div>
          <div className="row">
            <CardContainer4/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Containercardshome;
