import React, { useEffect , useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAuth } from "../hooks/useAuth";

const Private = () => {

   const auth=useAuth()


  console.log(auth);
  return (
    <>
      {auth ? (
        <>
          <Navbar/>
          <main>
            <Outlet />
          </main>
          <Footer />
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default Private;
