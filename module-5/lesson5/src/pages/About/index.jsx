import React, { useEffect, useState } from "react";
import "./style.scss";
import Loader from "../../UI/Loader";

const index = () => {
  const [post, setPost] = useState([]);
  const [load, setLoad] = useState(false);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((result) => {
        setPost(result);
        setLoad(true);
      });
  };

  useEffect(() => {
    console.log("render about components");
    fetchData();
  }, []);

  if (!load) {
    return <Loader/>;
  }

  return (
    <div className="about">
      <h1>About</h1>
      <div className="card w-75 mx-auto overflow-scroll">
        <ul className="list-group">
          {post.length > 0 &&
            post.map((el, i) => {
              return <li key={el.id} className="list-group-item">{el.title}</li>;
            })}
        </ul>
      </div>
    </div>
  );
};

export default index;
<h1>About</h1>;
