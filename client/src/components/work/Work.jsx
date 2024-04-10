import React, { useState, useRef, useEffect } from 'react'

import projects from "./projects.json";
import projectsSecond from "./projects-second.json";

import GitHubIcon from '@mui/icons-material/GitHub';

import { useTheme } from "../../contexts/ThemeContext"

import "../../assets/work/work.css";

const Work = () => {
  const aboutRef = useRef();
  const { currentTheme } = useTheme();

  const [showMore, setShowMore] = useState(false);

  const [darkFont, setDarkFont] = useState("black");

  const [darkWindow, setDarkWindow] = useState("work-main");

  // implementing animation
  const [aboutSecondTheme, setAboutSecondTheme] = useState("project");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;

      if (scrollY > window.innerHeight * 1.5){
        setAboutSecondTheme("project-second");
      }
    })
  }, []);

  useEffect(() => {
    if(currentTheme == "Dark"){
      setDarkFont("white");
      setDarkWindow("work-main-dark");
    } else{
      setDarkFont("black");
      setDarkWindow("work-main");
    }
  }, [currentTheme])
  return (
    <div className={darkWindow} id='work'>
      <div className='work-header' style={{color: darkFont}}>
        <h1 className='work-head' >My Projects</h1>
        <p className='work-head-p'>These are some of the exciting projects I have been working on.</p>
      </div>
      <div className="projects" >
        <div className={aboutSecondTheme} ref={aboutRef}>
          {projects.map((proj) => (
            <div className="project-render" key={proj.id} >
              <div className='left-side-work'>
              <p className='proj-name'>{proj.name}</p>
              <p className='proj-git'><a href={proj.link}>Github</a></p>
              {proj.otherLink && <p className='proj-other'>
                <a href={proj.otherLink}>Project Preview</a>
              </p>}
              <p className='proj-desc'>{proj.description}</p>
              <div className='proj-tech'>
                <h1>Tech-Stack used:</h1>
                <div className='tech-list'>
                {proj['tech-stack'].map((tech, index) => (
                  <p className='tech-name' key={index}>{tech}</p>
                ))}
                </div>
              </div>
              </div>
              <div className='right-side-work'>
                <img src={proj.photoURL} alt='Project Image' className='project-image'/>
              </div>
            </div>
          ))}
          {showMore && 
          projectsSecond.map((proj) => (
            <div className='project-render' key={proj.id}>
              <div className='left-side-work'>
              <p className='proj-name'>{proj.name}</p>
              <p className='proj-git'><a href={proj.link}>Github</a></p>
              {proj.otherLink && <p className='proj-other'>
                <a href={proj.otherLink}>Project Preview</a>
              </p>}
              <p className='proj-desc'>{proj.description}</p>
              <div className='proj-tech'>
                <h1>Tech-Stack used:</h1>
                <div className='tech-list'>
                {proj['tech-stack'].map((tech, index) => (
                  <p className='tech-name' key={index}>{tech}</p>
                ))}
                </div>
              </div>
              </div>
              <div className='right-side-work'>
                <img src={proj.photoURL} alt='Project Image' className='project-image'/>
              </div>
            </div>
          ))
          }

        </div>
        <div className='last-buttons'>

        
          {showMore == true ? 
          <button onClick={() => setShowMore(false)}>
            Show Less 
          </button>:
          <button onClick={() => setShowMore(true)}>
            Show More 
          </button>
        }

        <button className='github'>
          <a href="https://github.com/Sahhimanshu7">Github <GitHubIcon sx={{fontSize: 20}}/></a>
        </button>
        </div>
      </div>
    </div>
  )
}

export default Work