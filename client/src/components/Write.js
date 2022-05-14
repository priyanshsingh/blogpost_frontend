import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { useState } from "react";
export default function MultilineTextFields() {

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  


  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="container">
        <Typography
          variant="h2"
          style={{
            textAlign: 'center',
            marginTop: '40px',
            
          }}
        >
          Write a Blog!
        </Typography>
        <TextField
          id="standard-basic"
          value={title}
          onChange={(e)=>{setTitle(e.target.value)}}
          label="Title here..."
          placeholder="Type!"
          variant="standard"
          style={{
            width: "30%",
            marginRight: "auto",
            marginTop: "30px",
            fontWeight: 500,
          }}
          InputProps={{
            style: {
              fontWeight: "bold",
              fontSize: "1.8rem",
            },
          }}
        />
      </div>

      <div className="container">
        <TextField
          id="filled-textarea"
          value={content}
          onChange={(e)=>{setContent(e.target.value)}}
          label="Your Content here..."
          placeholder="Type!"
          multiline
          rows={15}
          variant="filled"
          style={{
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "20px",
            marginBottom: "50px",
            fontWeight: 500,
          }}
        />
      </div>
      <div className="container">
        <Link to="/">
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            style={{
              marginBottom: "50px",
            }}
          >
            POST
          </Button>
        </Link>
      </div>
    </Box>
  );
}
