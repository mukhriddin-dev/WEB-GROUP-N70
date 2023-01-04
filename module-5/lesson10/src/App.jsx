import React, { useState } from "react";
import { context } from "./context";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {

  return (
    <>
      <context.Provider value={{}}>
        <Navbar />
        <main>
    
         <div className="container">
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<About />} />
          </Routes>
         </div>
        </main>
        <Footer />
      </context.Provider>
    </>
  );
};

export default App;
