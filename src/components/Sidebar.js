import { Typography } from "@mui/material";
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
      <Typography color="#2e5e80" variant="h5">
        Filters
      </Typography>
      <Typography color="#2e5e80" variant="body1">
        <ul className="list-unstyled components">
          <li className="active my-2 hover-color-change">
            <a
              href="#"
              className="text-dark text-decoration-none"
              onClick={() => setFilter("matured")}
            >
              Matured
            </a>
          </li>
          <li className="my-2">
            <a
              href="#"
              className="text-dark text-decoration-none"
              onClick={() => setFilter("upcoming")}
            >
              Upcoming
            </a>
          </li>
          <li className="my-2">
            <a
              href="#"
              className="text-dark text-decoration-none"
              onClick={() => setFilter("pending")}
            >
              Pending
            </a>
          </li>
          <li className="my-2">
            <a
              href="#"
              className="text-dark text-decoration-none"
              onClick={() => setFilter("flagged")}
            >
              Flagged
            </a>
          </li>
          <li className="my-2">
            <a
              href="#"
              className="text-dark text-decoration-none"
              onClick={() => setFilter("all")}
            >
              All
            </a>
          </li>
        </ul>
      </Typography>
    </nav>
  );
};

export default Sidebar;
