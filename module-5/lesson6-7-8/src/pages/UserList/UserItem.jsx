import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../api/api";
const UserItem = () => {
  const [user, setUser] = useState({});
  const [load, setLoad] = useState(false);

  const { id } = useParams();
  const goback = useNavigate();

  useEffect(() => {
    api.getUserItem(id).then((item) => {
      setUser(item);
      setLoad(true)
    });
  }, [id]);

  const { username, age } = user;

  return (
    <div className="p-5 m-5 w-75 mx-auto shadow-lg">
      {load ? (
        <>
          <h1>
           username: {username} 
          </h1>
          <h2>age: {age}</h2>
        </>
      ) : (
        <>
          <span className="placeholder col-6 placeholder-wave "></span>
          <span className="placeholder w-75 placeholder-wave "></span>
          <span
            className="placeholder placeholder-wave "
            style={{ width: "25%" }}
          ></span>
        </>
      )}

      <button className="btn btn-primary my-4" onClick={() => goback(-1)}>
        go back
      </button>
    </div>
  );
};

export default UserItem;
