import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import GoogleButton from 'react-google-button'

import "./style.css";
import { Link } from "react-router-dom";

export default function SignUp() {
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
              className="text_field_email"
              required
              label="E-Mail"
              style={{ margin: "10px 0", width: "80%" }}
            />

            <TextField
              className="text_field_pass"
              required
              label="Password"
              type="password"
              autoComplete="current-password"
              style={{ margin: "10px 0", width: "80%" }}
            />
          </Box>
          <br />
          {/* 
        <input type="email" className="input-box" placeholder="E-Mail" />
        <input type="password" className="input-box" placeholder="Password" /> */}
          <p>
            <span>
              <input type="checkbox" />
            </span>{" "}
            I agree the terms of privacy policy
          </p>
          <button className="button">
            <span>Sign In</span>
          </button>
          {/* <button type="button" className="signup-btn">Sign Up</button> */}
          <hr className="hr-style" />
          <p className="or">OR</p>

          <GoogleButton style={{marginLeft:'80px'}}/>
          {/* <button type="button" class="signup-btn">
            Login with{" "}
            <img src="icon.png" alt="google icon" width="15px" height="15px" />
          </button> */}

          <br />
          <br />
          <p>
            Don't have an account ? <Link to='login'>Register</Link>
          </p>
          <br />
        </form>
      </div>
      <br />
      <br />
    </>
  );
}
