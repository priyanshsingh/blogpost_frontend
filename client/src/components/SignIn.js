import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import GoogleButton from "react-google-button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [email, setEmail] = useState("jatin3@gmail.com");
  const [password, setPassword] = useState("123");

  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault(); 
    console.log(`event fired`);
    // if(email.trim().length !== 0 && password.trim().length !== 0){
    await fetch("/local/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: password,
        email: email,
      }),
    })
      .then((response) => {
        console.log(`response is ${response.status}`);
        const statusCode = response.status
        if(statusCode === 200){
          response.json()
          .then(json => {
            // console.log(`json data is ${json.token}`)
            localStorage.setItem('Authorization', json.token)
            navigate("/")
          })
          .catch(err => 
            {
              console.log(`error occred: ${err}`)
            }
            )
          }
        else if(statusCode === 401){
          window.alert('invalid credentials')
        }else if(statusCode === 500){
          //TODO: Complete this if statement
        }
        })
      .catch((err) => {
        console.log(`error is ${err.message}`);
      });
    // }

    // navigate("/");
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

          <GoogleButton style={{ marginLeft: "80px" }} onClick={(e)=>{e.preventDefault(); window.open("http://localhost:4000/auth/google","_parent")}}/>

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
