import React from "react";
import classes from './Project_card.module.scss'
import {Title,Description,Technology} from './Project_card.styled'


interface ProjectCard{
    title:string,
    description:string;
    technology:string
}

function Project_card(Props:ProjectCard) {
    return (<div className={classes.main_container}>
       
        <div className={classes.Heading}>
           <Title>{Props.title}</Title>
        </div>
        <div className={classes.description}>
<Description>{Props.description}</Description>
        </div>
        <div className={classes.technology}>
<Technology>{Props.technology}</Technology>
        </div>
    </div>);
}

export default Project_card;
