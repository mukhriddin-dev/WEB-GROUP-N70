import React, { useEffect } from "react";
import "./style.scss";
import { useSelector, useDispatch } from "react-redux";
import { API } from "../../api/API";
import { GET_POSTS, SET_LOADER } from "../../action";
const index = () => {
  const { posts, load } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    API.getAllPosts()
      .then((posts) => posts.json())
      .then((results) => {
        dispatch(GET_POSTS(results));
        dispatch(SET_LOADER(true));
      });

    console.log("ok");
  }, []);

  if (!load) {
    return <h1>Loading . . ..</h1>;
  }

  console.log(posts);

  return (
    <div>
      <h1>About</h1>
      <ul className="list-group mx-auto w-50">
        {posts.length > 0
          ? posts.map((post) => {
              return (
                <li className="list-group-item my-2" key={post.id}>
                  <h4>{post.name}</h4>
                  <p>{post.body}</p>
                </li>
              );
            })
          : "NOT FOUND"}
      </ul>
    </div>
  );
};

export default index;
