import React, { useState, useEffect } from "react";
import FormInput from "../../UI/FormInput";
import Button from "../../UI/Button";
import { api } from "../../api/api";
import { toast, ToastContainer } from "react-toastify";
import { Navigate , useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const index = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let token = localStorage.getItem("token");
  let navigate=useNavigate();

  useEffect(() => {
    const auth = useAuth();
    if (auth) {
      return navigate("/")
    }
  }, [navigate]);

  const auth = (e) => {
    e.preventDefault();

    const submitform = {
      username: username,
      password: password,
    };

    const check = {
      username: username.trim().length === 0,
      password: password.trim().length === 0,
    };

    if (check.username || check.password) {
      toast.error("Please enter username and passsword");
    } else {
      toast.success("loading . . . .")
      console.log(submitform);
      api
        .useAuth(submitform)
        .then((response) => response.json())
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          navigate('/')
        })
        .catch((err) => {
         toast.error("error authenticating")

        })

      setUsername("");
      setPassword("");
    }
  };

  return (
    <div className="home card bg-light shadow-lg p-5 mt-5 mx-auto w-75">
      <h1>LOGIN PAGE</h1>

      <form action="#" onSubmit={(e) => auth(e)}>
        <FormInput
          type="text"
          labelText={"Enter username"}
          pl={"Enter username"}
          fo={"user"}
          val={username}
          setVal={setUsername}
        />

        <FormInput
          type="password"
          labelText={"Enter user password"}
          pl={"Enter user password"}
          fo={"userage"}
          val={password}
          setVal={setPassword}
        />

        <Button type="submit" btn="btn btn-success p-3 w-100 mt-3">
          LOGIN
        </Button>

        <ToastContainer />
      </form>
    </div>
  );
};

export default index;
