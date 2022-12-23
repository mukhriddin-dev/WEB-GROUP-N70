import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Post from "./pages/Post";
import About from "./pages/About";
import Error from "./pages/Error";
import PostItem from "./pages/Post/PostItem";
import Tab1 from "./pages/About/Tab1";
import Tab2 from "./pages/About/Tab2";
import UserList from "./pages/UserList";
import UserItem from "./pages/UserList/UserItem";
const App = () => {
  return (
    <>
      <Navbar />

      <main>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Post />} />
            <Route path="/posts/:id" element={<PostItem />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/users/:id" element={<UserItem />} /> 
            <Route path="/about" element={<About />}>

              <Route path="/about/tab1" element={<Tab1 />} />
              <Route path="/about/tab2" element={<Tab2 />} />
              
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default App;
