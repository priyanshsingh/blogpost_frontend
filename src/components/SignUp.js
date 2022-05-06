import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import GoogleButton from 'react-google-button';


export default function SignUp() {
  return (
    <>
      <div class="sign-up-now">
        <h1>Register Now</h1>
        <form>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField className="text_field_email" required label="E-Mail" style={{margin: '10px 0', width: '80%'}} />
            <TextField className="text_field_email" required label="UserName" style={{margin: '10px 0', width: '80%'}} />

            <TextField
              className="text_field_pass"
              required
              label="Password"
              type="password"
              autoComplete="current-password"
              style={{margin: '10px 0', width: '80%'}}
            />
          </Box>
          <br />
          {/* 
          <input type="email" class="input-box" placeholder="E-Mail" />
          <input type="text" class="input-box" placeholder="Username" />
          <input type="password" class="input-box" placeholder="Password" /> */}
          <p>
            <span>
              <input type="checkbox" />
            </span>{" "}
            I agree the terms of privacy policy
          </p>
          <button class="button">
            <span>Register</span>
          </button>
          {/* <button type="button" class="signup-btn">Sign Up</button> */}
          <br />
          <br />
          <hr class="hr-style" />
          <p class="or">OR</p>
          
          <GoogleButton label="Register with Google" style={{marginLeft:'80px'}}/>
          
          {/* <button type="button" class="signup-btn">
            Login with{" "}
            <img src="icon.png" alt="google icon" width="15px" height="15px" />
          </button> */}
          <br />
          <br />
          <p>
            Do you have an account ? <Link to="login">Login</Link>
            <br />
          </p>
          <br />
        </form>
      </div>
      <br />
      <br />
    </>
  );
}
