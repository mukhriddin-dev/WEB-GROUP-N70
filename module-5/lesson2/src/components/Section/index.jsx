import React, { useState, useRef } from "react";
import "./style.scss";

const index = () => {
  const [number, setNumber] = useState(0);
  const [show, setShow] = useState(false);

  const menu = useRef();

  console.log(menu);

  const toggleMenu = () => {
    console.log(menu.current);
    menu.current.classList.toggle("d-none");
  };

  //   let number = 0;

  //   const INCREMENT = () => {
  //     number += 1;
  //     console.log(number);
  //   };

  //   const DICREMENT = () => {
  //    number -= 1;
  //    console.log(number);
  //  };

  return (
    <>
      <section id="intro">
        <div className="container">
          <div className="row my-5 shadow-lg p-5">
            <button
              className={`btn btn  w-25 mx-5 ${
                show ? "btn-warning" : "btn-primary"
              }`}
              onClick={() => {
                toggleMenu();
                setShow((e) => !e);
              }}
            >
              {show ? "Hide" : "Show"}
            </button>
            <button
              className="btn btn btn-secondary w-25 mx-5"
              onClick={() => setShow(false)}
            >
              Hide
            </button>
            <button
              className="btn btn btn-primary w-25 mx-5"
              onClick={() => setShow(true)}
            >
              Show
            </button>
          </div>

          <div
            ref={menu}
            className={`row p-5 shadow ${show ? "d-block" : "d-none"}`}
          >
            <div className="col-md-12 p-4 bg-light ">
              <h1 className="text-center">{number}</h1>
            </div>
            <div className="col-md-6 p-4 bg-light shadow mt-4">
              <button
                className="btn btn-danger mx-2 w-25"
                onClick={() => setNumber(number - 1)}
              >
                -
              </button>
              <button
                className="btn btn-success mx-2 w-25"
                onClick={() => setNumber(number + 1)}
              >
                +
              </button>
            </div>
            <div className="col-md-6  p-4 bg-light  mt-4"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
