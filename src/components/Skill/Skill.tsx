import React from "react";
import Skill_Card from "../Skill_Card/Skill_Card";
import classes from './Skill.module.scss'
import img1 from '../../Assets/Icons/Html.png'
import img2 from '../../Assets/Icons/React.png'
import img3 from '../../Assets/Icons/Typescript.png'
import img4 from '../../Assets/Icons/css-3.png'
import img5 from '../../Assets/Icons/database.png'
import img6 from '../../Assets/Icons/js.png'
import { Heading } from "./Skill.styled";

function Skill() {
   
  return <div  className={classes.main_parent}>
   <Heading>Skills</Heading>
  <div className={classes.main_container}>
    <Skill_Card image={img1} name="Html"/>
    <Skill_Card image={img2} name="React"/>
    <Skill_Card image={img3} name="Typescript"/>
    <Skill_Card image={img4} name="Css"/>
    <Skill_Card image={img5} name="Mongodb"/>
    <Skill_Card image={img6} name="Js"/>

  </div>;
  </div> 
}

export default Skill;
