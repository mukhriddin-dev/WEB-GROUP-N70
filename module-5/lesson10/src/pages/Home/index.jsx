import React, { useState, memo } from "react";
import Card from "../../UI/Card";
const index = () => {
  const [num, setNum] = useState(0);

  console.log("render Home page...");
  return (
    <div className="p-5 mt-5 bg-warning">
      <Card />
      <h1>{num}</h1>
      <button className="btn btn-success" onClick={() => setNum(num + 1)}>
        Add
      </button>
    </div>
  );
};

export default memo(index);
