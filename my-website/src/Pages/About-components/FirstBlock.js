import React, { useState, useEffect } from "react";
import Typewriter from 'typewriter-effect';
function FirstBlock(){
    
    
    return(
        <div className="first-block">
            <div className="first-block-heading">
                <h1>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString('Hi everyone!')
                        .pauseFor(2500)
                        .deleteAll()
                        .typeString('Welcome to my Page')
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString('About Me')
                        .start();
                    }}
                />
                </h1>
            </div>
            <div className="first-block-text1">
                <p className="first-p">
                My name is Himanshu Sah, and I am a full-stack web 
                developer. I have been working on and learning MERN 
                for over two years.I am interested in software 
                development and web development. Besides web development,
                I am also interested in microprocesses, AI/ML, data
                structures and algorithms, and system programming.
                </p>
            </div>
            
        </div>
    )
}

export default FirstBlock;



