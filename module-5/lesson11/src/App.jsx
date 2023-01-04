import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ADD, SET_TITLE, SET_PRICE, SET_PRODUCT, CLEAR_INPUT } from "./action";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom"

const App = () =>
{
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
