// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';

import { useTheme } from "../../contexts/ThemeContext";
import Social from './Social';
import "../../assets/home/intro.css";

function Intro() {
  const { currentTheme } = useTheme();

  const [lightClass, setLightClass] = useState("light-effect");
  const [pclass, setPclass] = useState("second-p");

  useEffect(() => {
    if(currentTheme === "Dark"){
      setLightClass("dark-light");
      setPclass("second-p-dark");
    } else {
      setLightClass("light-effect");
      setPclass("second-p")
    }
  }, [currentTheme])
  return (
    <div className='intro'>
      <div className={lightClass}></div>
      <div className='intro-block'>
        <div className="first-block-heading">
          <h1>
            Hello. I am Himanshu,
          </h1>
        </div>
        <p className={pclass}>
          A Coding Wizard,   
        </p> 
        <p className={pclass}>
          and a Full-Stack developer.
        </p> 
        <Social />
      </div>
      
      <div className="profile-container">
        <img src="../../../public/Images/pp.jpeg" alt="Profile Picture" className="profile-picture" />
      </div>
    </div>
  )
}

export default Intro