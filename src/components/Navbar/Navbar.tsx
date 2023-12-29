import React from 'react';
import { NavLink} from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
            <div id="Navbar-container">
                <div id="Navbar-logo">
                    <h3>Portfolio</h3>
                </div>
                <div id="Navbar-links">
                    <NavLink to="/" activeClassName="active">Home</NavLink>
                    <NavLink to="/about" activeClassName="active">About</NavLink>
                    <NavLink to="/project" activeClassName="active">Project</NavLink>
                    <NavLink to="/skill" activeClassName="active">Skill</NavLink>
                    <NavLink to="/contact" activeClassName="active">Contact</NavLink>
                </div>
                <div id="Navbar-social-links">
                <a href="https://www.hackerrank.com/profile/anshdulewale68">HackerRank</a>
                    <a href="https://drive.google.com/file/d/14whHzu8URk8W8FW9CfLm0-00x434StZ1/view?usp=sharing">Resume</a>
                    <a href="https://github.com/ansh67283">Github</a>
                    <a href="https://www.linkedin.com/in/ansh-dulewale-0a100a254">LinkedIn</a>
                </div>
            </div>
    )
}

export default Navbar;
