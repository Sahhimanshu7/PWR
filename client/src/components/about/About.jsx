import React, { useRef } from 'react'
import { useInView } from 'react-intersection-observer';
import "../../assets/about/about.css"

function About() {
  const aboutRef = useRef();
  const { ref, inView } = useInView();

  if (inView) {
    aboutRef.current.scrollIntoView({
      behavior: 'smooth'
    });
  }

  return (
    <div className='about' id='about' ref={aboutRef}>
      About
    </div>
  )
}

export default About