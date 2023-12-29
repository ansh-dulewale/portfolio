import React from 'react';
import "./Timeline.css";

const Timeline1 = () => {
    return (
        <div className="timeline">
            <div className="timeline-empty"></div>

            <div className="timeline-middle">
                <div className="timeline-circle"></div>
            </div>
            <div className="timeline-component timeline-content container right">
                <b>St. Xavier's High School, Nagpur</b> <br />
                <span>Higher Secondary, Science(Physics, Chemistry, Mathematics)</span> <br />
                <span>Apr 2020 - Mar 2022</span>
            </div>
            <div className="timeline-component timeline-content container left">
                <b>S.B. Jain Institute of Technology, Management and Research, Nagpur</b> <br />
                            <span>Bachelor of Technology - BTech, Computer Science and Engineering</span><br />
                    <span>Nov 2022 - Nov 2026</span>
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

export default Timeline1;
