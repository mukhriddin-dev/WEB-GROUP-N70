import React from "react";
import "./style.scss";

const index = ({ type, pl, fo, labelText, val, setVal }) => {
  return (
    <>
      <label htmlFor={fo} className="w-100 my-2">
        <p>{labelText}</p>
        <input
          type={type}
          id={fo}
          className="form-control p-3 my-1 w-100"
          placeholder={pl}
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
      </label>
    </>
  );
};

export default index;
