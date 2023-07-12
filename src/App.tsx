import React from 'react';
import logo from './logo.svg';
import classes from './App.module.scss'
import Navbar from './components/Navbar/Navbar';
import Skill from './components/Skill/Skill';
import About from './components/About/About';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className={classes.App}>
      <Navbar/>
      {/* <Skill /> */}
      {/* <About/>  */}
      {/* <Project/> */}
<Contact/>
    </div>
  );
}

export default App;
