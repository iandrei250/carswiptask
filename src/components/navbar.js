import React from "react";
import "./styles/navbar.css";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <div className="container">
        <ul>
          <div className="button-container">
            <Link to="/">
              <li className="text">Home</li>
            </Link>
          </div>
          <div className="button-container">
            <Link to="/login">
              <li className="text login-button">Log In</li>
            </Link>
          </div>
          <div className="button-container">
            <Link to="/items">
              <li className="text">Item List</li>
            </Link>
          </div>
          <div className="button-container">
            <Link to="/details">
              <li className="text">Item Details</li>
            </Link>
          </div>
        </ul>
      </div>
    );
  }
}

function Navbar() {
  return (
    <div>
      <Nav />
    </div>
  );
}

export default Navbar;
