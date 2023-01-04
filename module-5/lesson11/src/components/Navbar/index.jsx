import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";
const index = () => {
  return (
    <header className="p-5 bg-primary">
      <div className="container">
        <nav className="nav d-flex w-100 justify-content-center ">
          <ul className="w-25 d-flex justify-content-between">
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
                to="/about"
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default index;
