import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import GoogleButton from "react-google-button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    console.log(`event fired`);
    // if(email.trim().length !== 0 && password.trim().length !== 0){
    const res = await fetch("/local/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: password,
        username: email,
      }),
    })
      .then((data) => {
        console.log(`data is ${data}  token is ${data.token}`);
      })
      .catch((err) => {
        console.log(`error is ${err.message}`);
      });
    console.log(`res is ${res}`);
    // }

    navigate("/");
  };

  return (
    <>
      <div className="sign-up-now">
        <h1>Login</h1>
        <form>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text_field_email"
              required
              label="Email"
              style={{ margin: "10px 0", width: "80%" }}
            />

            <TextField
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text_field_pass"
              required
              label="Password"
              type="password"
              autoComplete="current-password"
              style={{ margin: "10px 0", width: "80%" }}
            />
          </Box>
          <br />
          <p>
            <span>
              <input type="checkbox" />
            </span>{" "}
            I agree the terms of privacy policy
          </p>
          <button className="button" onClick={loginUser}>
            <span>Login</span>
          </button>
          <hr className="hr-style" />
          <p className="or">OR</p>

          <GoogleButton style={{ marginLeft: "80px" }} />

          <br />
          <br />
          <p>
            Don't have an account ? <Link to="/signup">Register</Link>
          </p>
          <br />
        </form>
      </div>
      <br />
      <br />
    </>
  );
}
