import React from "react";
import "./style_contact.css";
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGithub,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";

export default function About() {
  return (
    <>
      <div class="contact-us">
        <h1>Contact Us!</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <a href={"https://www.facebook.com/"}>
          <FontAwesomeIcon
            icon={faFacebook}
            style={{ color: "blue", fontSize: "2.5rem" }}
          />
        </a>
        <a href={"https://www.instagram.com/priyanshsingh_07/"}>
          <FontAwesomeIcon
            icon={faInstagram}
            style={{ color: "red", fontSize: "2.5rem" }}
          />
        </a>
        <a href={"https://www.github.com/priyanshsingh/"}>
          <FontAwesomeIcon
            icon={faGithub}
            style={{ color: "black", fontSize: "2.5rem" }}
          />
        </a>
        <a href={"https://www.medium.com/"}>
          <FontAwesomeIcon
            icon={faMedium}
            style={{ color: "grey", fontSize: "2.5rem" }}
          />
        </a>
      </div>
      <br/>
      <br/>
      <br/>
    </>
  );
}
