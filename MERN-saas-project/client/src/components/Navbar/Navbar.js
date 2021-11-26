import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light static-top mb-0 shadow"
      style={{ backgroundColor: "#8661d1" }}
    >
      <div className="container">
      <Link to="/">
        <img
          alt="Calorie Journal Logo"
          src="https://user-images.githubusercontent.com/37651620/142762093-45207811-0c6e-4b62-9cb2-8d0009efb4ea.png"
          width="70"
          height="70"
          className="d-inline-block align-top"
        />
        </Link>
          <Link
          className="navbar-brand"
            to="/"
            className="navbar-brand"
            style={{
              color: "white",
              fontSize: "1.5rem",
              marginRight: "15rem",
              marginLeft: "30rem",
            }}
          >
            <img src="https://user-images.githubusercontent.com/37651620/142764762-fef8f764-4cd5-44c6-8b9a-cffcfab2ccf8.png" alt="calorie journal" style={{height:"100px"}} />
          </Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link
                className="nav-link"
                  to="/"
                  className="nav-link"
                  style={{
                    fontSize: "0.2rem",
                    color: "white",
                  }}
                >
                  <button type="button" className="btn btn-info">Calorie Info</button>
                </Link>
            </li>
            <li className="nav-item active">
                <Link
                className="nav-link"
                  to="/create"
                  className="nav-link"
                  style={{
                    fontSize: "0.2rem",
                    color: "white",
                  }}
                >
                  <button type="button" className="btn btn-info">➕ Add food</button>
                </Link>
            </li>
            <li className="nav-item">
                <Link
                className="nav-link"
                  to="/user"
                  className="nav-link"
                  style={{
                    fontSize: "0.2rem",
                    color: "white",
                  }}
                >
                  <button type="button" className="btn btn-warning">➕ Add User</button>
                </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
