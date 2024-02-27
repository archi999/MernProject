
import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "../store";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const naviagte = useNavigate();
  const dispath = useDispatch();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isSignup, setIsSignup] = useState(false);
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };


  const sendRequest = async (a) => {
    try {
      const res = await axios
        .post(`http://localhost:8080/api/users/${a}`, {
          name: inputs.name,
          email: inputs.email,
          password: inputs.password,
        })
        .catch((err) => console.log(err));

      console.log(res);
      if (!res) {
        console.error("Response is undefined.");
        // Handle the case where the response is undefined
      }
      const data = await res.data;
      //console.log("return");
      //  console.log(data);
      return data;
    }
    catch (e) {
      console.log(e)
    }

  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //  console.log(inputs);
    if (isSignup) {
      sendRequest("signup")
        .then((data) => localStorage.setItem("userId", data.user._id))
        .then(() => dispath(authActions.login()))
        .then(() => naviagte("/blogs"))
        ;
    } else {
      sendRequest("login")
        .then((data) => localStorage.setItem("userId", data.user._id))
        .then(() => dispath(authActions.login()))
        .then(() => naviagte("/blogs"));
    }
  };
  return (
      <div >
        <form onSubmit={handleSubmit} >
          <div className="loginPage" style={{ maxWidth: "400px",
    height: "450px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "10px 10px 20px #ccc",
    padding: "3px",
    margin: "auto",
    marginTop: "30px",
    borderRadius: "10px",
    borderColor:"black",
    backgroundColor:"lightblue"}}>
            <h1>
              {isSignup ? "Signup" : "Login"}
            </h1>
            <div className='mb-3 my-3 jumbotron'>
              {isSignup && (
                <input type="text"
                  name="name"
                  onChange={handleChange}
                  value={inputs.name}
                  placeholder="Name"
                  margin="normal"
                />
              )}{" "}
            </div>
            <div className='mb-3 my-3 jumbotron'>
              <input type="email"
                name="email"
                onChange={handleChange}
                value={inputs.email}

                placeholder="Email"
                margin="normal"
              />
            </div>
            <div className='mb-3 my-3 jumbotron'>
              <input
                name="password"
                onChange={handleChange}
                value={inputs.password}
                type={"password"}
                placeholder="Password"
                margin="normal"
              />
            </div>
            <Button
              type="submit"
              variant="contained"
              sx={{ borderRadius: 3, marginTop: 3 }}
              color="warning"
            >
              Submit
            </Button>
            <Button
              onClick={() => setIsSignup(!isSignup)} style={{color:isSignup?"blue":"green"}}
              sx={{ borderRadius: 3, marginTop: 3 }}
            >
              Change To {isSignup ? "Login" : "Signup"}
            </Button>
          </div>
        </form>
      </div>


  );
};

export default Login