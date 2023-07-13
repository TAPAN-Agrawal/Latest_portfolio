import React from "react";
import classes from './AboutCard.module.scss'
import {FaUserGraduate} from 'react-icons/fa'
import {Year,Description,College} from './AboutCard.styled'


interface AboutCard{
    year: string,
    college: string,
    description: string
}
function AboutCard(Props:AboutCard) {
    return(
    <div className={classes.main_container}>
        <div className={classes.icon_container}>
          <FaUserGraduate className={classes.icon} size={50}/>
        </div>
        <div  className={classes.information_container}>
            <Year className={classes.Year}>{Props.year}</Year>
            <Description className={classes.Description}>{Props.college}</Description>
            <College className={classes.College}>{Props.description}</College>
        </div>
    </div>
    )
}

export default AboutCard;
