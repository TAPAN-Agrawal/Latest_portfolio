import React from "react";
import FeedCard from "../FeedCard/FeedCard";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import classes from './Feed.module.scss';
import { Carousel } from 'antd';
import { Heading } from "./Feed.styled";

function Feed() {
  return <div className={classes.main}>
<div className={classes.parent}>
    <Heading>Feed</Heading>
    <Carousel className={classes.slider} autoplay>

      <div className={classes.cart} >
        <FeedCard name="John Burger" university="Wales science" description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour" />
      </div>
      <div className={classes.cart}>

             <FeedCard name="John Burger" university="Wales science" description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour" />

      </div>
      <div className={classes.cart}>

             <FeedCard name="John Burger" university="Wales science" description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour" />

      </div>
      <div className={classes.cart}>

             <FeedCard name="John Burger" university="Wales science" description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour" />

      </div>
    </Carousel>

  </div>
  </div>;
}

export default Feed;
