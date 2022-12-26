import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "../../api/api";
import ItemPost from "./ItemPost";
const index = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);

  const [limt, setLimt] = useState(10);
  const [point, setPoint] = useState(1);

  const firstPoint = limt * point;
  const lastPoint = firstPoint - limt;
  const lastPage = post.slice(lastPoint, firstPoint);

  console.log(lastPage);

  useEffect(() => {
    api.getPosts().then((post) => {
      setPost(post);
      setLoading(true);
    });
  }, []);

  if (!loading) {
    return <h1>Loading . . .</h1>;
  }


  const paginate=(pageNumber)=>{
    setPoint(pageNumber)
  }


  return (
    <div className="p-5">
      <h1>Posts</h1>
      <ItemPost post={post} limt={limt} lastPage={lastPage} active={point} paginate={paginate} />
    </div>
  );
};

export default index;
