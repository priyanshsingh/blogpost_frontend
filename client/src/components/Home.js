import React, { useEffect, useState } from "react";
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Grid,
  Container,
  CssBaseline,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { shadows } from '@mui/system';
// import { PhotoCamera } from '@material-ui/icons';
// import { makeStyles } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//   container:{
//     backgroundColor: theme.pallette.background.paper,
//     padding: theme.spacing(8,0,6)
//   }

// }));

const Cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const Home = () => {
  // const classes = useStyles();
  const navigate = useNavigate();
  let [blogs, setBlogs]= useState([{title: '', content: ''}])
  
  const extractData = async () => {
    const token = localStorage.getItem("Authorization")
    console.log(`token is ${token}`)
    // else{
    useEffect(()=>{fetch("/blogs", {
      method: "GET",
      headers: {
        // 'Content-Type': 'application/json',
        'Accept': 'application/json',
        "Authorization": token
      }
    })
      .then(response => 
        {
          if(response.status === 401){
            navigate("/login")
          }else{
            response.json()
            .then(json => { 
              // blogs = json.blogs
              blogs = json.blogs
              console.log(`Home.js: blogs are ${blogs}`)
              setBlogs(blogs)
              // console.log(`json is ${json.blogs[0].title}`) 
            })
          }
        }
      )}, [])
      // .then(json => { console.log(`json is ${json.blogs[0].blogs[0].title}`) })
      
    // }
  }
  // navigateOrNot()
 extractData()
 console.log(`blogs are ${blogs}, blogLength is ${blogs.length}, blog[0].title is ${blogs[0].title}`)

  return (
    <>
      <CssBaseline />

      <div style={{ marginTop: "30px" }}>
        <Container maxWidth="sm">
          <Typography
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Galleria
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Hello everyone, this is a blog-photo album!
          </Typography>
          <div>
            <Grid
              container
              spacing={2}
              justify="center"
              style={{ marginTop: "20px" }}
            >
              <Grid item>
                <a href="http://localhost:3000" style={{ textDecoration: 'none' }}>
                  <Button
                    variant="contained"
                    color="Primary"
                    style={{ color: "white" }}
                  >
                    New Blogs
                  </Button>
                </a>
              </Grid>
              <Grid item>
                <a
                  href="https://cdn.searchenginejournal.com/wp-content/uploads/2020/08/7-ways-a-blog-can-help-your-business-right-now-5f3c06b9eb24e-1280x720.png"
                  style={{ textDecoration: "none" }}
                >
                  <Button variant="outlined" color="Primary">
                    Random Picture
                  </Button>
                </a>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
      <Container maxWidth="md" style={{ padding: "50px 0" }}>
        <Grid container spacing={4}>
          {blogs.map((blog) => (
            <Grid item key={blog} xs={12} sm={6} md={4}>
              <Card
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "18px",
                  boxShadow: "rgba(0, 0, 0, 0.24) 3px 7px 12px",
                }}
              >
                <CardMedia
                  image="https://source.unsplash.com/random"
                  title="image title"
                  style={{ paddingTop: "56.25%" }}
                />
                <CardContent style={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" >
                    {blog.title}
                  </Typography>
                  <Typography>
                    {blog.content}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                  <Button size="small" color="primary">
                    Edit
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
