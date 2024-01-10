import Typewriter from 'typewriter-effect';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import SecondBlock from './SecondBlock';
import ThirdBlock from './ThirdBlock';

function FirstBlock(){
    const [firstDisplay, setFirstDisplay] = useState('inhert');
    const [secondDisplay, setSecondDisplay] = useState('none');
    const [thirdDisplay, setThirdDisplay] = useState('none');
    const [knowMore, setKnowMore] = useState('block');
    const [backTop, setBackTop] = useState('none');
    return(
        <>
        <div className="first-block" style={{display:firstDisplay}}>
            <div className="progress-bar">
                <div className="first-page"></div>
                <div className="second-page"></div>
                <div className="third-page"></div>
            </div>
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
        
        <div className='second-block-f' style={{display:secondDisplay}}>
            <SecondBlock />
        </div>
        <div className='third-block-f' style={{display:thirdDisplay}}>
            <ThirdBlock />
        </div>
        <div className="know-more" style={{display: knowMore}}>
                <p>Know more</p>
                <button className="know-more-button" onClick={()=> {
                    if (secondDisplay ==='none' && thirdDisplay === 'none') {
                        setFirstDisplay('none');
                        setSecondDisplay('block');
                        setThirdDisplay('none');
                    } else if (firstDisplay === 'none' && secondDisplay === 'block') {
                        setSecondDisplay('none');
                        setThirdDisplay('block');
                        setKnowMore('none');
                        setBackTop('block');
                    }else{
                        console.log('done!');
                    }
                }}>
                <div class="arrow">
                    <div class="arrow-top"></div>
                    <div class="arrow-bottom"></div>
                </div>
                </button>
        </div>
        <div className='back-to-top' style={{display: backTop}}>
            <button onClick={()=>{
                setFirstDisplay('block');
                setThirdDisplay('none');
                setBackTop('none');
                setKnowMore('block');
            }
            }>
                Back to Top
            </button>
            <Link to={"/Software"}>
                <button>See my Works!</button>
            </Link>     
        </div>
        
        </>
    )
}

export default FirstBlock;



