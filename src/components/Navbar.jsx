import React from "react";
import { Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomDashboard from "./CustomDashboard";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            alt="app logo"
            length="50em"
            width="50em"
            src={require("./images/2-removebg-preview.png")}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="/customDashboard"
              >
                Custom DashBoard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/analytics">
                Analytics
              </a>
            </li>
          </ul>

          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            {/* Use ml-auto to push the items to the right */}
            <li className="nav-item">
              <button className="nav-link logout-button" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
