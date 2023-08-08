import React from "react";
import { Image } from "react-bootstrap";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <Image alt="Logo" src="public\bondmate1.png" />
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
              <a className="nav-link active" aria-current="page" href="#">
                Custom DashBoard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Analytics
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Pricing
              </a>
            </li>
          </ul>

          <a className="nav-link active">Logout</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
