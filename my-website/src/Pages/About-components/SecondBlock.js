import LaptopMacIcon from '@mui/icons-material/LaptopMac';

const CV = require('../../Images/himanshu-sah-resume.docx');

function SecondBlock(){
    return(
        <>
        <div className="second-block">
            <div className="progress-bar">
                <div className="first-page-second"></div>
                <div className="second-page-second"></div>
                <div className="third-page-second"></div>
            </div>
            <div className="skills-section">
                <a href={CV} download="himanshu-sah">
                    <button className="download-cv">
                        Download CV
                    </button>
                </a> 
            </div>
            <div className="skills-list">
                
                <h2>
                    <LaptopMacIcon />
                    My Tech-Stack -
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
        </>
    )
}

export default SecondBlock;