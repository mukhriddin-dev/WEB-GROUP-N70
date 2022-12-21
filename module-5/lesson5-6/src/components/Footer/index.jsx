import React from "react";
import "./style.scss";
const index = ({ theme , language, lang}) => {

  const t=language[lang]

   const footerStyle = {
      backgroundColor: theme === "dark" ? "rgb(37, 39, 57)" : "#fff",
      color: theme === "dark" ? "#fff" : "#000",
    };

  return (
    <footer className="p-5 text-center" style={footerStyle}>
      <div className="container">
        <p>{t.copyright} N70 group {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default index;
