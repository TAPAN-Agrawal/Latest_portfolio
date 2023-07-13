import React from "react";
import classes from './Notfound.module.scss'
import img4 from '../../Assets/Images/4.png'
import img0 from '../../Assets/Images/0.png'
import { Heading,H1 } from "./Notfound.styled";
import imgerror from '../../Assets/Images/error-404.png';

function Notfound() {
  return <div className={classes.parent}>
        <img src={img4} className={classes.img}/>
        <img src={img0} className={classes.img}/>
        <img src={img4} className={classes.img}/>
        <Heading className={classes.Heading}>Page not found!!!</Heading>
        <H1>Please check your internet connection</H1>
        <img src={imgerror} className={classes.errimg}/>
  </div>;
}

export default Notfound;
