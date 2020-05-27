import React from "react";
import Navbar from "../Navbar/Navbar.js";

function Dashboard() {
  const divStyle = {
    textAlign: "center",
    margin: 0,
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 style={divStyle}>This is the Dashboard</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
