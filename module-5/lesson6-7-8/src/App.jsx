import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Private from "./private/Private";
import Home from "./pages/Home";
import Post from "./pages/Post";
import About from "./pages/About";
import Error from "./pages/Error";
import PostItem from "./pages/Post/PostItem";
import Tab1 from "./pages/About/Tab1";
import Tab2 from "./pages/About/Tab2";
import UserList from "./pages/UserList";
import UserItem from "./pages/UserList/UserItem";
import Login from "./pages/Login";

const App = () => {
 
  return (
    <>
      <Routes>
        <Route path="/" element={<Private/>}>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Post />} />
          <Route path="/posts/:id" element={<PostItem />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:id" element={<UserItem />} />
          <Route path="/about" element={<About />}>
            <Route path="/about/tab1" element={<Tab1 />} />
            <Route path="/about/tab2" element={<Tab2 />} />
          </Route>
        </Route>

        <Route path="*" element={<Error />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
