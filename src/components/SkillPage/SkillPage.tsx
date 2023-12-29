import React from 'react';
import './SkillPage.css';
import Image1 from '../Images/SkillsPage/C.png';
import Image2 from '../Images/SkillsPage/css.png';
import Image3 from '../Images/SkillsPage/html.png';
import Image4 from '../Images/SkillsPage/Java.png';
import Image5 from '../Images/SkillsPage/Js.png';
import Image6 from '../Images/SkillsPage/nodejs.png';
import Image7 from '../Images/SkillsPage/Reactjs.png';
import Image8 from '../Images/SkillsPage/Typescipt.png';
const SkillPage = () => {
    return (
        <>
        <div id="main-container">
            <h1>THINK I LEARNED....</h1>
            <div id="SkillsPage-container">
                <div className="SkillPage-card">
                    <img src={Image1} alt="Skills"/>
                    <p>C</p>
                </div>
                <div className="SkillPage-card">
                    <img src={Image2} alt="Skills"/>
                    <p>CSS</p>
                </div>
                <div className="SkillPage-card">
                    <img src={Image3} alt="Skills"/>
                    <p>HTML</p>
                </div>
                <div className="SkillPage-card">
                    <img src={Image4} alt="Skills"/>
                    <p>Java</p>
                </div>
                <div className="SkillPage-card">
                    <img src={Image5} alt="Skills"/>
                    <p>Javascript</p>
                </div>
                <div className="SkillPage-card">
                    <img src={Image6} alt="Skills"/>
                    <p>Node js</p>
                </div>
                <div className="SkillPage-card">
                    <img src={Image7} alt="Skills"/>
                    <p>React js</p>
                </div>
                <div className="SkillPage-card">
                    <img src={Image8} alt="Skills"/>
                    <p>TypeScript</p>
                </div>
            </div>
            </div>
        </>
    )
}
export default SkillPage;