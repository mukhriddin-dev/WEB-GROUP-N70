import React, { useEffect } from "react";
import "./style.scss";

const index = ({ main, language, lang }) => {
  console.log(language);

  const t = language[lang];

  useEffect(() => {
    console.log("render Home components");
  }, []);

  return (
    <div className="home" style={main}>
      <h1>{t.home}</h1>
    </div>
  );
};

export default index;
<h1>Home</h1>;
