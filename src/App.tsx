import React, { useState } from 'react';
import classes from './App.module.scss'
import Navbar from './components/Navbar/Navbar';
import Pages from './Page/Pages';
import { Route, Routes } from 'react-router-dom';
import Contact from './components/Contact/Contact';
import Notfound from './components/404_/Notfound';
import { useRef } from 'react';
import About from './components/About/About';


function App() {

  const aref = useRef<HTMLButtonElement>();
  const sref =useRef<HTMLButtonElement>();
  const pref = useRef<HTMLButtonElement>();
  const fref = useRef<HTMLButtonElement>();



  const handleClick = (name: string ) => {
    console.log("first",name);
    if(name === "about"){

      aref.current?.scrollIntoView({ behavior: 'smooth' });
    }
    else if(name === "skills"){
      
      sref.current?.scrollIntoView({ behavior: 'smooth'});
    }
    else if(name === "project"){
      pref.current?.scrollIntoView({ behavior: 'smooth'});

    }
    else if(name === "feed"){
      fref.current?.scrollIntoView({ behavior: 'smooth'});

    }

  };


  return (
    <div className={classes.App}>
      <Navbar onHandle={handleClick} />

      <Routes>
        <Route path='/' element={<Pages  about={aref} skill={sref} project={pref} feed={fref}/> } />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Notfound />} />
      </Routes>

    </div>
  );
}

export default App;
