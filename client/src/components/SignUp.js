import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import GoogleButton from "react-google-button";
import Checkbox from "@mui/material/Checkbox";


const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function SignUp() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstName: "nitin",
    lastName: "juneja",
    email: "nitin@gmail.com",
    username: "nitin",
    password: "123",
  });

  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { firstName, lastName, email, username, password } = user;

    await fetch("/local/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        password: password,
        email: email,
      }),
    })
    .then(data => {
      if (data.status === 409 || !data) {
        window.alert("username already exists");
        console.log("Invalid Reg of User");
      } else if(data.status === 422){
        window.alert("unable to register user")
      }else if (data.status === 201){
        console.log(`credentials verified`)
        navigate("/login")
      }
    })
    .catch(err => {

    })

    
   
  };

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
            <TextField
              value={user.firstName}
              onChange={handleInputs}
              name="firstName"
              className="text_field_email"
              required
              label="FirstName"
              style={{ margin: "10px 0", width: "80%" }}
            />
            <TextField
              value={user.lastName}
              onChange={handleInputs}
              name="lastName"
              className="text_field_email"
              required
              label="LastName"
              style={{ margin: "10px 0", width: "80%" }}
            />

            <TextField
              value={user.email}
              onChange={handleInputs}
              name="email"
              className="text_field_email"
              required
              label="E-Mail"
              style={{ margin: "10px 0", width: "80%" }}
            />

            <TextField
              value={user.username}
              onChange={handleInputs}
              name="username"
              className="text_field_email"
              required
              label="UserName"
              style={{ margin: "10px 0", width: "80%" }}
            />

            <TextField
              className="text_field_pass"
              required
              value={user.password}
              onChange={handleInputs}
              name="password"
              label="Password"
              type="password"
              autoComplete="current-password"
              style={{ margin: "10px 0", width: "80%" }}
            />
          </Box>
          <br />
          <Checkbox
            {...label}
            defaultUnChecked
            color="primary"
            size="small"
            style={{ marginBottom: "3px" }}
          />
          I agree the company's Privacy Policy and TNC
          <br />
          <button
            className="button"
            type="submit"
            variant="contained"
            size="large"
            style={{
              fontSize: "1.1rem",
              marginTop: "10px",
              marginBottom: "10px",
            }}
            onClick={PostData}
          >
            <span>Sign In</span>
          </button>
          <br />
          <br />
          <hr class="hr-style" />
          <p class="or">OR</p>
          <a href="http://localhost:4000/auth/google" style={{textDecoration:'none'}}>
            <GoogleButton style={{ marginLeft: "80px"}} />
          </a>
          <br />
          <br />
          <p>
            Do you have an account ? <Link to="/login">Login</Link>
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
