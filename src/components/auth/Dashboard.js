import React from 'react';
import Header from './Header'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';

import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles({
  root1: {
    minWidth: 275,
    background:'#BDC581',
    color:'#fff',
  },
  root: {
    maxWidth: 345,
    marginTop:2,
  },
  media: {
    height: 140,
  },
  subdiv:{
    border:'1px solid black',
    borderRadius:20,
    height:350,
marginLeft:25,
   

  

  

  },
});

export default function Dashboard(){
  const classes = useStyles(); 
 
    
    return(
        <div>
            <Header/>
            <div  style={{display:'flex',flexDirection:'row',textAlign:'center'}}>
         <div style={{display:'flex',marginLeft:20, marginRight:20,marginTop:20}}>
         <Card className={classes.root1}>
      <CardContent >
      <h1>6.2 K</h1> 
      <p>Last Days for release</p>
      <p>10% increase from last week</p>
       
     
      </CardContent>
     
    </Card>
    
  
    </div>  

    <div style={{display:'flex',marginLeft:10, marginRight:20,marginTop:20,textAlign:'center'}}>
         <Card className={classes.root1} style={{background:'#55E6C1'}}>
      <CardContent >
      <h1>16.2 K</h1> 
      <p>Last Days for release</p>
      <p>10% increase from last week</p>
       
     
        
      </CardContent>
      
    </Card>
    </div>
     
    <div style={{display:'flex',marginLeft:10, marginRight:20,marginTop:20,textAlign:'center'}}>
         <Card className={classes.root1} style={{background:'#FEA47F'}} >
      <CardContent >
      <h1>5.2 K</h1> 
      <p>Last Days for release</p>
      <p>10% increase from last week</p>
     
        
      </CardContent>

    </Card>
    </div>
  
    
    <div style={{display:'flex',marginLeft:10, marginRight:20,marginTop:20,textAlign:'center'}}>
         <Card className={classes.root1} style={{background:'#F8EFBA'}} >
      <CardContent >
      <h1>5.2 K</h1> 
      <p>Last Days for release</p>
      <p>10% increase from last week</p>
     
        
      </CardContent>

    </Card>
    </div>
    <div style={{display:'flex',marginLeft:10, marginRight:20,marginTop:20,textAlign:'center'}}>
         <Card className={classes.root1} style={{background:'#55E6C1'}} >
      <CardContent >
      <h1>5.2 K</h1> 
      <p>Last Days for release</p>
      <p>10% increase from last week</p>
     
        
      </CardContent>

    </Card>
    </div>
  </div>
  
  
    <Grid container spaicng={1} style={{marginTop:40}}>
        <Grid item xs={12} sm={4} className={classes.subdiv}>

        </Grid>
        
      <Grid item xs={12} sm={4} className={classes.subdiv}>
      
        </Grid>
        <Grid item xs={12} sm={3} className={classes.subdiv}>
      
        </Grid>
       
      </Grid>
           
        </div>
    )
}