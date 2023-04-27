import React from "react";
import ".//App.css";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand m-2" href="#">
            Authentication Form
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link">
                  <Link to="/">Home</Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <Link to="/login">login</Link>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
