// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React, { useRef } from 'react';
import Social from '../home/Social';

import { useEffect, useState } from 'react';
import { useTheme } from "../../contexts/ThemeContext";
import "../../assets/contact/contact.css";
import emailjs from '@emailjs/browser';


function ContactForm() {
  const { currentTheme } = useTheme();

  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submit, setSubmit] = useState(true);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const values = {
      name,
      email,
      message
    }
    await emailjs.send("service_iwwhfge", "template_x4xqbbr", values, "meBzmwcUpJg2Grjmx")
    .then(() => {
      setSubmit(true);
      setEmail("");
      setName("");
      setMessage("");
  }).catch((e) => console.log(e))
  }

  const [nameL, setNameL] = useState('name-l');
  const [emailL, setEmailL] = useState('email-l');
  const [textL, setTextL] = useState("text-l");

  useEffect(() => {
    if(currentTheme === "Dark"){
    setNameL("name-d");
    setEmailL("email-d");
    setTextL("text-d");
    } else {
    setNameL("name-l");
    setEmailL("email-l");
    setTextL("text-l");
    }
    }, [currentTheme])

  return (
      <form ref={form} onSubmit={handleSubmit} className='form-light'>
        <input 
        id='name'
        type='text'
        name='name'
        placeholder='Your Name'
        className={nameL}
        onChange={(e) => setName(e.target.value)}
        />
      <input
        id="email"
        type="email" 
        name="email"
        placeholder='Your Email'
        className={emailL}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        id="message"
        name="message"
        className={textL}
        placeholder='Your Message...'
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit" disabled={submit} className='c-s-l'>
        Send
      </button>
    </form>
  );
}


function Contact () {
    const { currentTheme } = useTheme();

    const [lightClassContact, setLightClassContact] = useState("light-effect-contact");
    const [pclassContact, setPclassContact] = useState("p-light");

    const [cp, setCp] = useState('c-p-l');

    useEffect(() => {
        if(currentTheme === "Dark"){
        setLightClassContact("dark-light-contact");
        setPclassContact("p-dark");
        setCp("c-p-d");
        } else {
        setLightClassContact("light-effect-contact");
        setPclassContact("p-light");
        setCp("c-p-l");
        }
    }, [currentTheme])

    return (
        <div className={lightClassContact} id='contact'>
            <div className='top'>
                <div className='head'>
                <h1 className={pclassContact}>Contact Me</h1>
                <p className={cp}>Feel free to Contact me by sending me a message and I will get back to you as soon as possible
                </p>
                </div>
                
            </div>
            <div className='middle'>
                
                <div className='form'>
                    
                    <ContactForm />
                </div>
            </div>
            <div className='footer'>
                <div className='footer-middle'>
                    <h1 className='name-h'>Himanshu Sah</h1>
                    <p className='name-p'>Thanks for visiting my site. It was developed with the purpose of meeting people with similar interests.
                    Please Let me know if you have any suggestions regarding my personal website.
                    </p>    
                </div>
                <Social />
                <p className='copy'>Copyright @2024 | Himanshu Sah</p>
            </div>

        </div>
    );
}

export default Contact