// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Social from '../home/Social';

import { useEffect, useState } from 'react';
import { useTheme } from "../../contexts/ThemeContext";
import "../../assets/contact/contact.css";

function ContactForm() {
  const [state, handleSubmit] = useForm("mzbnkryv");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
      <form onSubmit={handleSubmit} className='form-light'>
        <input 
        id='name'
        type='text'
        name='name'
        placeholder='Your Name'
        className='name-l'
        />
      <input
        id="email"
        type="email" 
        name="email"
        placeholder='Your Email'
        className='email-l'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        className='text-l'
        placeholder='Your Message...'
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting} className='c-s-l'>
        Send
      </button>
    </form>
  );
}


function Contact () {
    const { currentTheme } = useTheme();

    const [lightClassContact, setLightClassContact] = useState("light-effect-contact");
    const [pclassContact, setPclassContact] = useState("p-light");

    useEffect(() => {
        if(currentTheme === "Dark"){
        setLightClassContact("dark-light-contact");
        setPclassContact("p-dark");
        } else {
        setLightClassContact("light-effect-contact");
        setPclassContact("p-light");
        }
    }, [currentTheme])

    return (
        <div className={lightClassContact} id='contact'>
            <div className='top'>
                <div className='head'>
                <h1 className={pclassContact}>Contact Me</h1>
                <p className='c-p-l'>Feel free to Contact me by sending me a message and I will get back to you as soon as possible
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
                    <p className='name-p'></p>
                </div>
                <p>Copyright @2024 | Himanshu Sah</p>
            </div>

        </div>
    );
}

export default Contact