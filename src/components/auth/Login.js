import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from '@material-ui/core/Link';
const useStyles = makeStyles((theme) => ({
    root: {
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
    },
    subdiv:{
        width:window.screen.width*0.6,
        padding:10,
        marginTop:window.screen.height*0.05,
        height:window.screen.height*0.8,
        background:'white',
    },
    root1:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    marginTop:20,
    fontSize:25,
    },
}));
    
export default function Login(props){
    const classes = useStyles();
      
        
        
    return(
       <div className={classes.root}>
        <div className={classes.subdiv}>
            <div className={classes.root1}>
            <LockOpenIcon style={{color:'#fff',background:'#ED4C67',borderRadius:50,fontSize:60}}/>Sign in
            </div>
            <Grid container spacing={2} style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:15}}>
            <Grid item xs={12} sm={6}>
                <TextField id="emailaddress" fullWidth label="Email Address *" variant="outlined" />
                </Grid>
               
        </Grid>
        <Grid container spacing={2} style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:15}}>
            <Grid item xs={12} sm={6}>
                <TextField id="password" fullWidth label="Password *" variant="outlined" />
                </Grid>
               
        </Grid>
        <Grid container spacing={2} className={classes.root}>
            <Grid item xs={12} sm={6}>
        <FormControlLabel
        control={
          <Checkbox
           color="primary"
          />
        }
        label="Remember me"
      />
      </Grid>
      </Grid>
      <Grid container spacing={2} className={classes.root}>
            <Grid item xs={12} sm={6}>
            <Button variant="contained" color="primary" fullWidth>
 SIGN IN
</Button>
                </Grid>
            </Grid>
  <Grid container spacing={2} className={classes.root}>
      <Grid item xs={12} sm={6}>
      <Link href="#">
        Forget password
      </Link>
      <Link href="#" style={{marginLeft:100}}>
        Don't have an account? Sign up
      </Link>

      </Grid>
  </Grid>
<div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:50}}>
    Copyright @ Your Website 2021.
</div>
        </div>
</div>
        

    )
}