import React from "react";
import classes from './Skill_card.module.scss'
import img1 from '../../Assets/Icons/React.png'
import {P} from './Skill_card.styled'


interface Card {
  image: string,
  name: string
}


function Skill_Card(Props:Card) {
  return (
  <div className={classes.main_container}>
   <div className={classes.logo}>
    <img src={Props.image} alt="ima" className={classes.image}/>
   </div>
   <div className={classes.name}>
    <P>{Props.name}</P>
   </div>
  </div>
  )
}

export default Skill_Card;
