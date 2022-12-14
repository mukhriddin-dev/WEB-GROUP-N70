import React, { useRef } from "react";
import "./style.scss";

const index = () => {
   
  const slideCard = useRef();

  const slide = () => {
    slideCard.current.classList.toggle("swiper");
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <button
              className="btn btn-primary"
              onClick={() => {
                slide();
              }}
            >
              Evenet
            </button>
          </div>
        </div>

        <div
          ref={slideCard}
          className="card w-75 mx-auto p-5 m-5 bg-light shadow"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          fugit illo asperiores fuga autem maiores, sed saepe quia ab sequi
          impedit suscipit in odio maxime temporibus reprehenderit quae cum
          laboriosam.
        </div>
      </div>
    </>
  );
};

export default index;
