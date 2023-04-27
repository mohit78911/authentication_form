import React from "react";
import ".//App.css";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      {/* new navbar */}
<div>
  <div className="row align ">
    <div className="col">
      <h4 className="align floatleft font">Authentication Form</h4>
    </div>
    <div className="col">
    <ul className="floatright">
          <li><NavLink className="navStyle" to="/">Home</NavLink></li>
          <li><NavLink className="navStyle" to="/login">login</NavLink></li>

        </ul>
    </div>
  </div>
</div>
    </div>
  );
}
