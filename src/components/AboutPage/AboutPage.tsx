import React, { useEffect, useState } from 'react';
import './AboutPage.css';
import Timeline1 from './Timeline_education/Timeline.tsx';
import TimeLine2 from './Timeline_certificate/Timeline_certificate.tsx';
import Images1 from '../Images/AboutPageImage/Ansh_Dulewale.jpg';

const AboutPage = () => {
    const [activeTab, setActiveTab] = useState('education');
    const [word, setWord] = useState("");
    const [index, setIndex] = useState(0);
    const FullWord = "I am currently in my second year of study at the S.B. Jain Institute of Technology, Management & Research, where I am pursuing my academic interests and honing my skills.";

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (index < FullWord.length) {
                setWord((prev) => prev + FullWord[index]);
                setIndex(index + 1);
            }
        }, 100);

        // Clear the outer interval when the component unmounts
        return () => clearInterval(intervalId);
    }, [index]);

    return (
        <>
            <div id="AboutPage-container">
                <div id="AboutPage-Information">
                    <div id="AboutPage-myname">
                        <h2>Ansh <span>Dulewale</span></h2>
                    </div>
                    <div id="AboutPage-information-info">
                        <p> {word} </p>
                    </div>
                    <div id="AboutPage-information-tabs">
                        <div id="tab1" className="tab" onClick={() => setActiveTab('education')}><p>Education</p></div>
                        <div id="tab2" className="tab" onClick={() => setActiveTab('experience')}><p>Experience</p></div>
                        <div id="tab3" className="tab" onClick={() => setActiveTab('certificate')}><p>Certificates</p></div>
                    </div>
                    <div id="tab-info">
                        {activeTab === 'education' && (
                           <Timeline1 />
                        )}
                        {activeTab === 'experience' && (
                            <div id="experience">
                                <ul>
                                    <li>experience-1</li>
                                    <li>experience-2</li>
                                    <li>experience-3</li>
                                    <li>experience-4</li>
                                </ul>
                            </div>
                        )}
                        {activeTab === 'certificate' && (
                            <TimeLine2 />
                        )}
                    </div>
                </div>
                <div id="AboutPage-Image">
                    <img src={Images1} alt="Ansh Dulewale" />
                </div>
            </div>
        </>
    )
}

export default AboutPage;
