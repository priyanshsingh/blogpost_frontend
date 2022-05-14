import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { Link } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  faFacebook,
  faInstagram,
  faGithub,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      <footer>
        <Box
          px={{ xs: 3, sm: 5 }}
          py={{ xs: 5, sm: 4 }}
          bgcolor="#2d3e50"
          color="white"
          style={{
            position: "relative",
            bottom: 0,
            width: "100%",
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={5}>
              <Grid item xs={12} sm={4}>
                <Box
                  borderBottom={1}
                  color="white"
                  fontSize="1.1rem"
                  marginBottom="10px"
                >
                  Help
                </Box>
                <Box>
                  <Link href="https://mui.com/" color="inherit">
                    Contact
                  </Link>
                </Box>
                <Box>
                  <Link href="https://mui.com/" color="inherit">
                    Support
                  </Link>
                </Box>
                <Box>
                  <Link href="https://mui.com/" color="inherit">
                    Privacy
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box borderBottom={1} fontSize="1.1rem" marginBottom="10px">
                  Account
                </Box>
                <Box>
                  <a
                    href="http://localhost:3005/login"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      transition: "all 0.2s",
                    }}
                  >
                    Login
                  </a>
                </Box>
                <Box>
                  <a
                    href="http://localhost:3005/signup"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      transition: "all 0.2s",
                    }}
                  >
                    Register
                  </a>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box borderBottom={1} fontSize="1.1rem" marginBottom="10px">
                  Connect With Us
                </Box>
                {/* <Box>
                                    <Link href='https://mui.com/' color='inherit'>
                                        <a href={"https://www.instagram.com/priyanshsingh_07/"}>
                                            Instagram
                                        </a>
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href='https://mui.com/' color='inherit'>
                                        <a href={"https://www.facebook.com/"}>
                                            Facebook
                                        </a>
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href='https://mui.com/' color='inherit'>
                                        <a href={"https://www.github.com/priyanshsingh/"}>
                                            GitHub
                                        </a>
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href='https://mui.com/' color='inherit'>
                                        <a href={"https://medium.com/"}>
                                            Medium
                                        </a>
                                    </Link>
                                </Box> */}
                <a href={"https://www.facebook.com/"}>
                  <FontAwesomeIcon
                    icon={faFacebook}
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      width: "30px",
                      height: "30px",
                      transition: "all 0.2s",
                    }}
                  />
                </a>
                <a href={"https://www.instagram.com/priyanshsingh_07/"}>
                  <FontAwesomeIcon
                    icon={faInstagram}
                    style={{
                      marginLeft: "10px",
                      justifyContent: "right",
                      alignItems: "right",
                      width: "30px",
                      height: "30px",
                      transition: "all 0.2s",
                    }}
                  />
                </a>
                <a href={"https://www.github.com/priyanshsingh/"}>
                  <FontAwesomeIcon
                    icon={faGithub}
                    style={{
                      marginLeft: "10px",
                      justifyContent: "right",
                      alignItems: "right",
                      width: "30px",
                      height: "30px",
                      transition: "all 0.2s",
                    }}
                  />
                </a>
                <a href={"https://www.medium.com/"}>
                  <FontAwesomeIcon
                    icon={faMedium}
                    style={{
                      marginLeft: "10px",
                      justifyContent: "right",
                      alignItems: "right",
                      width: "30px",
                      height: "30px",
                      transition: "all 0.2s",
                    }}
                  />
                </a>
              </Grid>
            </Grid>
            <Box
              textAlign="center"
              pt={{ xs: 1, sm: 5 }}
              pb={{ xs: 1, sm: 0 }}
              fontSize="1.2rem"
            >
              BlogPost, Made with{" "}
              <FavoriteIcon
                color="error"
                style={{
                  fontSize: "1.3rem",
                  marginBottom: "3px",
                  transition: "all 0.2s",
                }}
              />{" "}
              &reg;{new Date().getFullYear()}
            </Box>
          </Container>
        </Box>
      </footer>
    </>
  );
}
