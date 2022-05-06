import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import BookIcon from "@mui/icons-material/Book";

export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{ marginRight: "30px" }}>
            <BookIcon
              style={{ marginRight: "10px", color: "white" }}
            />
            {props.title}
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
              style={{ marginTop: "20px", fontSize:'1rem' }}
            >
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
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Type here!"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>
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
