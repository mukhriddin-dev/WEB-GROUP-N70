import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
const ItemPost = ({ post, limt, lastPage, paginate}) => {
  console.log(post);
  const point = [];

  for (let i = 0; i < Math.ceil(post.length / limt); i++) {
    point.push(i + 1);
  }

  console.log(point);

  return (
    <>
      <ul className="list-group w-75 mx-auto p-3 mt-5">
        {post.length > 0 &&
          lastPage?.map((el) => {
            return (
              <li key={el.id} className="list-group-item">
                <Link to={`/posts/${el.id}`}>{el.title}</Link>
              </li>
            );
          })}
      </ul>

      <div className="container d-flex justify-content-center">
        <nav aria-label="...">
          <ul className="pagination pagination-sm">
            {point.map((item) => {
              return (
                <li className={"page-item "} onClick={()=>paginate(item)}>
                  <a className="page-link" href="#">
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default ItemPost;
