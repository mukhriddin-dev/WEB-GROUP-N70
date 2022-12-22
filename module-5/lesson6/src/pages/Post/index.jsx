import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const index = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPost = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const result = await response.json();
    setPost(result);
    setLoading(true);
    console.log(result);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  if (!loading) {
    return <h1>Loading . . .</h1>;
  }

  return (
    <div className="p-5">
      <h1>Posts</h1>

      <ul className="list-group w-75 mx-auto p-3 mt-5">
        {post.length > 0 &&
          post.map((el) => {
            return <li key={el.id} className="list-group-item">
              <Link to={`/posts/${el.id}`}>
              {el.title}
              </Link>
            </li>;
          })}
      </ul>
    </div>
  );
};

export default index;
