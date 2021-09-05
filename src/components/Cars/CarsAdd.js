import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import image from './backphoto.jpg'
import { Link as RouterLink } from 'react-router-dom';
import axios from "axios";
import { useState } from "react";
import { useForm } from 'react-cool-form';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundImage:'url(${image})'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
      height:'100%',
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
export default function CarsAdd(props) {
    const classes = useStyles();
  const [carcolor, setCarcolor] = useState("");
  const [registrationNb, setRegistrationNb] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [technical_visit_date, setTechnical_visit_date] = useState("");
  const [insurance_date, setInsurance_date] = useState("");


  /**************/
  const { reset } = useForm();
  function onCreatePost(e) {
    
    
    e.preventDefault();
    const postData = {
      carcolor,
      registrationNb,
      brand,
      model,
      technical_visit_date,
      insurance_date,
    };
    axios
      .post(`http://localhost:8000/car/addcar`, postData)
      .then((response) => {
        console.log(response);
      }
      
      );
      reset({});
  }
  
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
        
    
  
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add New Car
          </Typography>
          <form type="submit"  onSubmit={onCreatePost}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="plaque"
                  name="registrationNb"
                  variant="outlined"
                  placeholder=""
                  required
                  fullWidth
                  id="registrationNb"
                  label="Plaque"
                  type="text"
                value={registrationNb}
                onChange={(e) => setRegistrationNb(e.target.value)}
                autoFocuss
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="brand"
                  label="Brand"
                  name="brand"
                  autoComplete="mark"
                  type="text"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                />
              </Grid>
             
              
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="model"
                  label="Model"
                  name="model"
                  autoComplete="model"
                  type="text"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                />
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="carcolor"
                  label="Color"
                  name="carcolor"
                  autoComplete="color"
                  type="text"
                  value={carcolor}
                  onChange={(e) => setCarcolor(e.target.value)}
                />
              </Grid>
             
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="insurance_date"
                  label="Insurance Date"
                  name="insurance_date"
                  autoComplete="model"
                  type="date"
                  value={insurance_date}
                  onChange={(e) => setInsurance_date(e.target.value)}
                />
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="technical_visit_date"
                  label="Technical visit date"
                  name="technical_visit_date"
                  autoComplete="technical_visit_date"
                  type="date"
                  value={technical_visit_date}
                  onChange={(e) => setTechnical_visit_date(e.target.value)}
                />
              </Grid>
             
              
             
              
              
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              
            >
              Add
            </Button>
            <Grid container justifyContent="flex-end">
            <Button
              type="submit" 
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              component={RouterLink} to='/DashbordGestion'
              
            >
              Return
            </Button>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
         
        </Box>
      </Container>
      </div>
    );
  }
  