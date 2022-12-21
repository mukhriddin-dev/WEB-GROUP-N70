import React, { useContext } from "react";
import { context } from "../../context";
const Extra3 = () => {
  const message = useContext(context);

  console.log(message);

  return (
    <div className="card w-75 p-5 m-5 bg-danger">
      <h1>Extra 3 </h1>
      {/* <h2>{message.message}</h2> */}

      <button
        className="btn btn-success"
        onClick={() => {
          message.add("Hello world");
        }}
      >
        send text
      </button>
    </div>
  );
};

export default Extra3;
