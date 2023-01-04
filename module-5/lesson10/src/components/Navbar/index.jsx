import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";

const index = () => {
  return (
    <header className="bg-success p-4 w-100">
      <div className="container">
        <nav className="nav d-flex justify-content-between">
          <ul className="d-flex w-25 justify-content-between list-unstyled text-uppercase ">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-white fw-bold" : "text-white"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-white fw-bold" : "text-white"
                }
                to="/product"
              >
                Product
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default index;
