import React, { useState, useEffect } from "react";
import "./style.scss";
import { api } from "../../api/api";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const index = () => {

  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);


  const removeUserItem = (userId) => {
    api.removeUser(userId);
    toast.success("Removed user successfully", {
      autoClose: 1500,
    });
  };

  

  useEffect(() => {
    api.getUser().then((user) => {
      setUser(user);
      setLoading(true);
    });
  }, []);

 
  if (!loading) {
    return <h1>Loading . . .</h1>;
  }

  return (
    <>
    <ToastContainer/>
      <div className="p-5">
        <h1>Users</h1>

        <ul className="list-group w-75 mx-auto p-3 mt-5">
          {user.length > 0 ?
            user?.map((el) => {
              return (
                <li
                  key={el.id}
                  className="list-group-item d-flex justify-content-between"
                >
                  <Link to={`/users/${el.id}`}>{el.username}</Link>
                  <button className="btn btn-danger" onClick={()=>{
                    removeUserItem(el.id)
                  }}>REMOVE USER</button>
                </li>
              );
            }):"NOT FOUND"}
        </ul>
      </div>
    </>
  );
};

export default index;
