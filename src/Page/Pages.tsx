import React from "react";

import classes from "../App.module.scss";
import Navbar from "../components/Navbar/Navbar";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Skill from "../components/Skill/Skill";
import Project from "../components/Project/Project";
import Feed from "../components/Feed/Feed";
import Contact from "../components/Contact/Contact";

function Pages(Props: any) {
  return (
    <div className={classes.App}>
      <div ref={Props.home}>
        <Home />
      </div>
      <div ref={Props.about}>
        <About />
      </div>
      <div ref={Props.skill}>
        <Skill />
      </div>
      <div ref={Props.project}>
        <Project />
      </div>
      <div ref={Props.feed}>
        <Feed />
      </div>
    </div>
  );
}

export default Pages;
