import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp(props) {
  const classes = useStyles();
  const [cin, setCin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [adress, setAdress] = useState("");
  const [username, setUsername] = useState("");

  /**************/
  function onCreatePost(e) {
    
    e.preventDefault();
    const postData = {
      cin,
      email,
      password,
      role,
      lastName,
      firstName,
      birthdate,
      phoneNumber,
      adress,
      username,
    };
    axios
      .post(`http://localhost:8000/user/register`, postData)
      .then((response) => {
        console.log(response);
      });
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add User
        </Typography>
        <form type="submit" onSubmit={onCreatePost}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="User Name"
                name="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="cin"
                label="Cin"
                type="text"
                id="cin"
                value={cin}
                onChange={(e) => setCin(e.target.value)}
                autoFocus
              />
            </Grid>
            

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
            </Grid>
            


              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="phonenumber"
                  variant="outlined"
                  required
                  fullWidth
                  id="phonenumber"
                  label="Phone"
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  autoFocus
                />
              </Grid>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="adress"
                label="Adress"
                type="text"
                value={adress}
                onChange={(e) => setAdress(e.target.value)}
                id="adress"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="bithdate"
                type="date"
                id="birthdate"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="conpassword"
                label="Password"
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="conpassword"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="role"
                label="Role"
                type="number"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                id="role"
              />
            </Grid>
            {/*
            <Grid item xs={12} sm={12}>
              <input 
              type="radio" 
              name="type"
              type="number"
              value= {role}
              onChange={(e) => setRole(e.target.value)} />  Employee
              <input type="radio" type="number"
              value= {role}
              onChange={(e) => setRole(e.target.value)}  />  Candidate
              <input type="radio" type="number"
              value= {role}
              onChange={(e) => setRole(e.target.value)}  />  Monitor
            
            </Grid>
           */}
          
          <Button type="submit" fullWidth variant="contained" color="primary">
            Sign Up
          </Button>
      </Grid>
        </form>
      </div>
    
    </Container>
  );
}
