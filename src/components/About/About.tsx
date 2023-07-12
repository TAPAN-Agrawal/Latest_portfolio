import React from "react";
import classes from './About.module.scss'
import AboutCard from '../AboutCard/AboutCard';
import img from '../../Assets/Images/book.png'
import { Heading } from "../About/About.styled";

function About() {
  return (<>
<Heading>About</Heading>
    <div className={classes.main_parent}>
      <div className={classes.image_container}>
        <img src={img}/>
      </div>
      <div className={classes.parent}>
        <AboutCard year="2016-1017" college="Nelson High School" description="-specialized in overall development of a human brain" />
        <AboutCard year="2017-2019" college="Pragati High Secondary School" description="-specialized in science technology " />
        <AboutCard year="2019-2023" college="Silver Oak College of Engineering snd Technology" description="-specialized in computer science" />
      </div>
    </div>
    </>);
}

export default About;
