import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import BookIcon from "@mui/icons-material/Book";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{ marginRight: "30px" }}>
            <BookIcon style={{ marginRight: "10px", color: "white" }} />
            {props.title}
            {/* <img src="logo.png" alt="" /> */}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav me-auto mb-2 mb-lg-0"
              style={{ marginTop: "20px", fontSize: "1rem" }}
            >
              <li className="nav-item">
                <Link className="nav-link" to="write">
                  <strong>Write A Blog</strong>
                </Link>
                <br />
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="login">
                  Login
                </Link>
                <br />
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="signup">
                  Register
                </Link>
                <br />
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="contact">
                  Contact Us
                </Link>
                <br />
              </li>
            </ul>
            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Type here!"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form> */}
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 400,
              }}
            >
              <IconButton sx={{ p: "10px" }} aria-label="menu">
                <MenuIcon />
              </IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Blog Post"
                inputProps={{ "aria-label": "search google maps" }}
              />
              <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
              <IconButton
                color="primary"
                sx={{ p: "10px" }}
                aria-label="directions"
              >
                <DirectionsIcon />
              </IconButton>
            </Paper>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.prototype = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "Set AboutText here",
};
