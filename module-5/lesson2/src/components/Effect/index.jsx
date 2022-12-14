import React, { useState, useEffect } from "react";

const index = () => {
  const [number, setNumber] = useState(0);
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoader(true);
      });

  }, []);

  console.log(data);

  if (!loader) {
    return <h1>LOADING . . . </h1>;
  }

  return (
    <div className="container">
      <h1>Effect</h1>

      <h3>{number}</h3>
      <button className="btn btn-primary" onClick={() => setNumber(number + 1)}>
        ADD
      </button>

      <div className="list-group w-75 mx-auto">
        {data.length > 0 &&
          data.map((el) => {
            return <div key={el.id} className="list-group-item">{el.title}</div>;
          })}
      </div>
    </div>
  );
};

export default index;
