import React from "react";

const Sidebar = ({ setFilter }) => {
  return (
    <nav
      id="sidebar"
      className="bg-light p-4"
      style={{
        width: "100%",
        height: "100vh",
        borderRight: "1px solid #e0e0e0",
      }}
    >
      <div className="sidebar-header">
        <h4 className="text-center">Filters</h4>
      </div>
      <ul className="list-unstyled components">
        <li className="active my-2 hover-color-change">
          <a
            href="#"
            className="text-dark text-decoration-none"
            onClick={() => setFilter("matured")}
          >
            <i className="fas fa-home mr-2 "></i> Matured
          </a>
        </li>
        <li className="my-2">
          <a
            href="#"
            className="text-dark text-decoration-none"
            onClick={() => setFilter("upcoming")}
          >
            <i className="fas fa-calendar-alt mr-2"></i> Upcoming
          </a>
        </li>
        <li className="my-2">
          <a
            href="#"
            className="text-dark text-decoration-none"
            onClick={() => setFilter("pending")}
          >
            <i className="fas fa-hourglass-half mr-2"></i> Pending
          </a>
        </li>
        <li className="my-2">
          <a
            href="#"
            className="text-dark text-decoration-none"
            onClick={() => setFilter("flagged")}
          >
            <i className="fas fa-flag mr-2"></i> Flagged
          </a>
        </li>
        <li className="my-2">
          <a
            href="#"
            className="text-dark text-decoration-none"
            onClick={() => setFilter("all")}
          >
            <i className="fas fa-list mr-2"></i> All
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
