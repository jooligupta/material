import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from '@material-ui/core/Grid';
import Header from "./auth/Header"
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
      },
      subdiv:{
          width:window.screen.width*0.6,
          padding:10,
          marginTop:window.screen.height*0.05,
          height:window.screen.height*0.8,
          background:'white',
      },
}));

export default function Addemployee(){
    const classes = useStyles();
    return(
        <div>
        <Header/>
        <div className={classes.root}>
        <div className={classes.subdiv}>
      <div style={{textAlign:'center'}}>
        <h3>Add Employee</h3>
      </div>
        
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="name"
              fullWidth
              label="Enter Name"
              variant="outlined"
              
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="email"
              fullWidth
              label="Enter Email"
              variant="outlined"
              
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="dob"
              fullWidth
              label="Enter Dateofbirth"
              variant="outlined"
              
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="addre"
              fullWidth
              label="Enter Address"
              variant="outlined"
              
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="aadharcardnumber"
              fullWidth
              label="Enter aadhar card number"
              variant="outlined"
              
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="passport number"
              fullWidth
              label="Enter passport number"
              variant="outlined"
              
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="address proof image"
              fullWidth
              label="Enter address proof image"
              variant="outlined"
              
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="pancardnumber"
              fullWidth
              label="Enter pan card number"
              variant="outlined"
              
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="college certificate"
              fullWidth
              label="Enter college certificate"
              variant="outlined"
              
            />
          </Grid>
          </Grid>
          <Button variant="contained" color="primary"spacing={2} style={{marginTop:7}}  >
                 Add employee
                </Button>
            </div>
        </div>
        
        </div>
      
    )
}