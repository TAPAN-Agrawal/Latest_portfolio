import React from "react";
import classes from './FeedCard.module.scss'
import { Name, P, UNIVERSITY } from "./FeedCard.styled";
import img from '../../Assets/Icons/man.jpg'

interface FeedCard {
  description: string,
  name: string,
  university: string,
}

function FeedCard(Props:FeedCard) {
  return <div>
          <div className={classes.parent}>
            <div className={classes.child}>
                    <P>{Props.description}</P>
                    <Name className={classes.name}>-{Props.name}</Name>
                    <UNIVERSITY>{Props.university}</UNIVERSITY>
            </div>
            <div className={classes.avatar}>
                            <img src={img} className={classes.img} alt="avatar"/>
            </div>
          </div>

  </div>;
}

export default FeedCard;
