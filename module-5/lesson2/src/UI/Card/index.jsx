import React from "react";
import "./style.scss";

const index = ({
  user: { avatar, last_name, first_name, id, email, status },
}) => {
  return (
    <>
      <div className="card">
        <img src={avatar} alt="rasm" className="card-img" />

        <div className="card-body">
          <h4 className="card-title">
            {last_name} {first_name}
          </h4>
          <p className="card-text">{email}</p>
          <button className={`btn ${status ? "btn-success" : "btn-danger"}`}>
            {status ? "ONLINE" : "OFFLINE"}
          </button>
        </div>
      </div>
    </>
  );
};

export default index;
