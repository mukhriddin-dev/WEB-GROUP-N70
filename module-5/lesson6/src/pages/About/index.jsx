import React from 'react';
import "./style.scss";
import { Outlet, NavLink } from 'react-router-dom';
const index = () => {
   return (
      <div>
         <ul className="d-flex w-25 justify-content-around  mt-5 ">
            <li><NavLink className={({isActive})=> isActive ? "bg-warning p-3 rounded-pill" : ""} to="/about/tab1">TAB-1</NavLink></li>
            <li><NavLink className={({isActive})=> isActive ? "bg-warning p-3 rounded-pill" : ""} to="/about/tab2">TAB-2</NavLink></li>
         </ul>
         <h1>About</h1>
         <Outlet/>
      </div>
   );
};

export default index;<h1>About</h1>