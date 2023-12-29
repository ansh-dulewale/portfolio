import React from 'react';
import "./TimeLine_certificate.css";

const Timeline2 = () => {
    return (
        <div className="timeline">
            <div className="timeline-empty"></div>

            <div className="timeline-middle">
                <div className="timeline-circle"></div>
            </div>
            <div className="timeline-component timeline-content container right">
                <div id="p"><p>NPTEL : Problem Solving Through Programming in C</p></div><div id="button"></div><button id="button">Certificate</button>
            </div>
            <div className="timeline-component timeline-content container left">
                <div id="p"><p>Hackerank : CSS</p></div> <div id="button"> <button>Certificate</button></div>
            </div>
            <div className="timeline-middle">
                <div className="timeline-circle"></div>
            </div>
            <div className="timeline-empty"></div>

            <div className="timeline-empty"></div>

            <div className="timeline-middle">
                <div className="timeline-circle"></div>
            </div>
        </div>
    );
};

export default Timeline2;
