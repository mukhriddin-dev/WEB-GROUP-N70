import React from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";
const index = ({ lang, theme, setLang, setTheme, language }) => {
  const headerStyle = {
    backgroundColor: theme === "dark" ? "rgb(37, 39, 57)" : "#fff",
    color: theme === "dark" ? "#fff" : "#000",
  };

  console.log(language[lang]);

  const t = language[lang];

  return (
    <>
      <header style={headerStyle} className="shadow">
        <div className="container">
          <nav className="nav d-flex justify-content-between w-100">
            <h2 className="nav__logo">Reactjs.uz</h2>

            <ul className="nav__ul d-flex w-25 justify-content-around align-items-center">
              <li className="nav__ul--list">
                <NavLink
                  className={({ isActive }) => (isActive ? "text-warning" : "")}
                  to="/"
                >
                  {t.home}
                </NavLink>
              </li>
              <li className="nav__ul--list">
                <NavLink
                  className={({ isActive }) => (isActive ? "text-white" : "")}
                  to="/about"
                >
                  {t.about}
                </NavLink>
              </li>
            </ul>

            <div className="d-flex gap-3">
              <select
                className="form-select "
                onChange={(e) => {
                  setTheme(e.target.value);
                  localStorage.setItem("theme", e.target.value);
                }}
              >
                <option selected disabled>
                  {localStorage.getItem("theme") || "Select theme"}
                </option>
                <option value="dark">{t.dark}</option>
                <option value="light">{t.light}</option>
              </select>

              <select
                className="form-select"
                onChange={(e) => {
                  setLang(e.target.value);
                  localStorage.setItem("langs", e.target.value);
                }}
              >
                <option selected disabled>
                  {localStorage.getItem("langs") || "Select langage"}
                </option>
                <option value="en">Eng</option>
                <option value="uz">Uzb</option>
              </select>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default index;
