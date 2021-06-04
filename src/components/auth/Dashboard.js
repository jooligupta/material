import React from "react"
import { makeStyles } from "@material-ui/core/styles";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from "@material-ui/core/Grid";
import AppleIcon from '@material-ui/icons/Apple';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import TransformIcon from '@material-ui/icons/Transform';
const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        flexGrow: 1,
        maxWidth: 250,
        backgroundColor:'black',
      },
      subdiv:{
        marginTop:20,
        color:'#fff',
         },
}));
export default function Dashboard(){
    const classes = useStyles();
      
    return(
        <Grid container spacing={2}>
        <Grid item xs="12" sm={4}>
      <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
     <ListItem className={classes.subdiv}>
          <ListItemIcon>
          </ListItemIcon>
          <ListItemText>
        Dashboard
        </ListItemText>
        </ListItem>
       </List> 
       <List component="nav" aria-label="main mailbox folders" >
        <ListItem className={classes.subdiv}> 
          <ListItemIcon >
            <AppleIcon style={{color:'#fff'}}/>
          </ListItemIcon>
          <ListItemText>
        Dashboard
        </ListItemText>
        </ListItem>
        <ListItem className={classes.subdiv}>
          <ListItemIcon >
            <AccountCircleIcon style={{color:'#fff'}} />
          </ListItemIcon>
          <ListItemText>
        Leads
        </ListItemText>
        </ListItem >
        <ListItem className={classes.subdiv}>
          <ListItemIcon>
            <MailOutlineIcon  style={{color:'#fff'}}/>
          </ListItemIcon>
          <ListItemText>
        Email
        </ListItemText>
        </ListItem>
        <ListItem className={classes.subdiv}>
          <ListItemIcon>
            <PowerSettingsNewIcon style={{color:'#fff'}}/>
          </ListItemIcon>
          <ListItemText>
      Form Submission
      </ListItemText>
        </ListItem>
        <ListItem className={classes.subdiv}>
          <ListItemIcon>
            <TransformIcon style={{color:'#fff'}}/>
          </ListItemIcon>
          <ListItemText>
        Page Views
      </ListItemText>
        </ListItem>
        <ListItem className={classes.subdiv}>
          <ListItemIcon>
            <SettingsApplicationsIcon style={{color:'#fff'}}/>
          </ListItemIcon>
          <ListItemText>
        Reports
    </ListItemText>
        </ListItem>
       </List> 
          </div>
          </Grid>
          </Grid>
    )
}