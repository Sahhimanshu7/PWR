import { useEffect, useState, useRef } from 'react'
import "../../assets/about/about.css"

function About() {
  const aboutRef = useRef();
  const [aboutTheme, setAboutTheme] = useState("about-content-light");
  const [aboutSecondTheme, setAboutSecondTheme] = useState("about");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;

      if (scrollY > window.innerHeight / 1.5){
        setAboutSecondTheme("about-second");
      }
    })
  }, []);

    return (
    <div className={aboutTheme} id='about' ref={aboutRef}>
      <div className={aboutSecondTheme}>
        <div className="left-side">
          <h1>About Me 👨‍💻 </h1>
          <p className="paragraph">
            Hello! My name is Himanshu Sah, and I am a full-stack web
            developer. I have been working on and learning MERN
            for over two years.I am interested in software
            development and web development. Besides web development,
            I am also interested in Microprocesses, AI/ML, data
            structures and algorithms, and system programming.
          </p>
          <button className="download-resume">
            <a href="../../../public/himanshu-sah-resume.docx"> Download My Resume </a>
          </button>
        </div>

        <div className="right-side">
          <div className="skills-list">
            <h2>
              💻
              My Tech-Stack
            </h2>
            <div className='line'></div>
            <div className="tech-stack">
              <div className='stacks'>
              <div className='stack-1'>
                  <p>JavaScript</p>
                  <p>TypeScript</p>
                  <p>ReactJs</p>
                  <p>NodeJs</p>
                  <p>Express</p>
                  <p>MongoDb</p>
                  <p>React Native</p>
                </div>
                <div className='stack-2'>
                  <p>C++</p>
                  <p>Python3</p>
                  <p>Flask</p>
                  <p>FastAPI</p>
                </div>
                <div className='stack-3'>
                  <p>Nodemon</p>
                  <p>Figma</p>
                  <p>Firebase</p>
                  <p>Mongoose</p>
                  <p>Linux</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    )
}

export default About