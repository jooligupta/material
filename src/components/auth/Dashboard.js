import React from 'react';
import Header from './Header'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
const banner = [
    { bannerimage:"shoes4.jpeg" },
   { bannerimage:"shoes.webp" },
   { bannerimage:"shoes2.jpeg" },
   { bannerimage:"shoes3.jpg" },
   { bannerimage:"shoes5.jpg" },
  ];
export default function Dashboard(){
  const classes = useStyles();
  const productItems=()=>{
      return banner.map((item,index)=>{
          return(
              <div style={{display:'flex', width:280,margin:20, marginLeft:10,flexWrap:'wrap',flexDirection:'column'}}>
               <Card className={classes.root}>
      <CardActionArea>
      <img src={`/${item.bannerimage}`} width="300" height="300" />
 </CardActionArea>
    </Card>

        </div>
       );
      });
    };

    
    return(
        <div>
            <Header/>
            <div style={{display:'flex',flexDirection:'row'}}>
            {productItems()}
            </div>
        </div>
    )
}