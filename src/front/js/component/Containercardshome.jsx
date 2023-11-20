import React from "react";
import Card from "./Card.jsx";

const Containercardshome = () => {
  return (
    <div
      className="container-fluid d-flex"
      style={{ backgroundColor: "#f5f5f5" }}
    >
      <div className="container w-100">
        <div className="row">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Containercardshome;
