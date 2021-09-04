import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import image from './imageback.jpg';
import axios from "axios";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Seance(props) {
  const classes = useStyles();
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [monitorCin, setMonitorCin] = useState("");
  const [duration, setDuration] = useState("");

  return (
    <div style={{ 
      width:'100%',
      backgroundPosition: 'center',
      height:'100%',
      backgroundImage: `url(${image})`,
      backgroundSize: '100%',
      backgroundRepeat: 'repeat'
     }}
      >
      
  

    <Container component="main" maxWidth="L">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Seance
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="Cincondidat"
                name="cinCondidat"
                variant="outlined"
                required
                fullWidth
                id="cinCondidat"
                label="Student's CIN number"
                autoFocuss
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="cinMonitor"
                label="Monitor's CIN number"
                name="cinMonitor"
                autoComplete="cinMonitor"
              />
            </Grid>
           <Grid item xs={12} sm={6}>
            <h3>Date and time Set </h3>
            </Grid>
            
            <Grid item xs={12}>
        
              <TextField
                variant="outlined"
                type="date"
                required
                fullWidth
                id="dateS"
                
                name="dateS"
                autoComplete="dateS"
              />
              <Grid/>
            
            
            </Grid>
            
          <h3>Hour:</h3>  
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="Hour"
                label=""
                type="time"
                id="hour"
                
              />
            </Grid>
            
              <h3>Type</h3>
              
            
            <Grid item xs={12} sm={6}>
              <input type="radio" value="Conduit" name="type" /> Conduit
              <input type="radio" value="Code" name="type" /> Code
            </Grid>
            
            
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Set
          </Button>
          <Grid container justifyContent="flex-end">
            
          </Grid>
        </form>
      </div>
      <Box mt={5}>
       
      </Box>
    </Container>
    </div>
  );
}
