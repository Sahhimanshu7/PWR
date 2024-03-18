import React, { useEffect, useState } from 'react';

import { useTheme } from "../../contexts/ThemeContext";
import Social from './Social';
import "../../assets/home/intro.css";

function Intro() {
  const { currentTheme } = useTheme();

  const [lightClass, setLightClass] = useState("light-effect");
  const [pclass, setPClass] = useState("second-p");

  useEffect(() => {
    if(currentTheme == "Dark"){
      setLightClass("dark-light");
      setPClass("second-p-dark");
    } else {
      setLightClass("light-effect");
      setPClass("second-p")
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
      
      <div class="profile-container">
        <img src="../../../public/Images/pp.jpeg" alt="Profile Picture" class="profile-picture" />
      </div>
    </div>
  )
}

export default Intro