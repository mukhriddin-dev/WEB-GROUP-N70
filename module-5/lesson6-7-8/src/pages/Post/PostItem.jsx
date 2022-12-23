import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation} from "react-router-dom";
const PostItem = () => {
  const [post, setPost] = useState({});
  const [load, setLoad] = useState(false);

  const { id } = useParams();
  const goback = useNavigate();
  const loc=useLocation();

  console.log(loc)

  console.log(id);

  const fetchItem = async () => {
    const item = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const result = await item.json();

    setPost(result);
    setTimeout(() => {
      setLoad(true);
    }, 2000);

    console.log(result);
  };

  useEffect(() => {
    fetchItem();
  }, [id]);

  const { title, body } = post;

  return (
    <div className="p-5 m-5 w-75 mx-auto shadow-lg">
      {load ? (
        <>
          <h1>
            {title} {id}
          </h1>
          <p>{body}</p>
        </>
      ) : (
        <>
          <span className="placeholder col-6 placeholder-wave "></span>
          <span className="placeholder w-75 placeholder-wave "></span>
          <span className="placeholder placeholder-wave " style={{ width: "25%" }}></span>
        </>
      )}

      <button className="btn btn-primary my-4" onClick={() => goback(-1)}>
        go back
      </button>
    </div>
  );
};

export default PostItem;
