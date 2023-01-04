import React, { useReducer } from "react";
import "./index.scss";

const index = () => {
  
  const initialState = {
    product: [],
    title: "",
    price: "",
  };

  const reducer = (state, action) => {
    console.log(action.payload);
    switch (action.type) {
      case "ADD":
        return {
          ...state,
          num: state.num + 1,
        };
      case "REMOVE":
        return {
          ...state,
          num: state.num - 1,
        };
      case "SET_TITLE":
        return {
          ...state,
          title: action.payload,
        };
      case "SET_PRICE":
        return {
          ...state,
          price: action.payload,
        };
      case "ADD_PRODUCT":
        return {
          ...state,
          product: [...state.product, action.payload],
        };
      default:
        return state;
    }
  };

  const addProduct = () => {
    const newProduct = {
      title: title,
      price: price,
    };

    dispatch({ type: "ADD_PRODUCT", payload: newProduct });
  };

  const [{ title, price, product }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <div>
      <h1>Products </h1>

      <div className="card w-50 mx-auto p-5">
        <input
          type="text"
          className="form-control p-3 my-3"
          placeholder="enter product title"
          onChange={(e) =>
            dispatch({ type: "SET_TITLE", payload: e.target.value })
          }
        />
        <input
          type="number"
          className="form-control p-3 my-3"
          placeholder="enter product price"
          onChange={(e) =>
            dispatch({ type: "SET_PRICE", payload: e.target.value })
          }
        />
        <button className="btn btn-success my-3" onClick={() => addProduct()}>
          Add product
        </button>
      </div>

      <div className="card w-75 mx-auto p-4">
        <ul className="list-group">
          {product.map((el) => {
            return (
              <li className="list-group-item">
                {el.title} {el.price} $
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default index;
