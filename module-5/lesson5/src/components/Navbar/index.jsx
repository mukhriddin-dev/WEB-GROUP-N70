import React from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";
const index = () => {
  return (
    <>
      <header>
        <div className="container">
          <nav className="nav">
            <h2 className="nav__logo">Reactjs.uz</h2>
            <ul className="nav__ul d-flex w-25 justify-content-around align-items-center">
              <li className="nav__ul--list">
                <NavLink className={({isActive})=> isActive ? "text-white" : ""} to="/">Home</NavLink>
              </li>
              <li className="nav__ul--list">
                <NavLink className={({isActive})=> isActive ? "text-white" : ""} to="/about">About</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default index;
