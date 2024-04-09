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
            Hello there! I'm Himanshu, a passionate Full-Stack Developer and Computer Science student journeying through the realms of technology. With over two years of dedicated exploration and hands-on experience, I've immersed myself in the dynamic world of MERN (MongoDB, Express.js, React, Node.js) stack development, crafting robust and responsive web solutions.

Driven by an insatiable curiosity for software development, my journey extends far beyond the confines of web development. From delving into the intricacies of Microprocesses to unraveling the mysteries of Artificial Intelligence and Machine Learning, I thrive on the challenge of mastering diverse domains within computer science.

Join me on this exhilarating journey through the digital landscape, where innovation meets craftsmanship, and every line of code tells a story of ambition and ingenuity.

Let's build the future together, one keystroke at a time.
          </p>
          
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
            <button className="download-resume">
              <a href="/himanshu-sah-resume.docx"> Download My Resume </a>
            </button>
          </div>
        </div>

      </div>
    </div>
    )
}

export default About