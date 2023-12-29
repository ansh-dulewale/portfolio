import React from 'react';
import './ProjectPage.css';
import {Link} from 'react-router-dom';
import Image1 from '../Images/Project/Quiz-game.png';
import Image2 from '../Images/Project/MatrixCalculator.png';
import Image3 from '../Images/Project/MovieBookingManagement.png';

const Project = () => {
    return (
        <>
        <div id="main-container">
            <h1>PROJECT THAT I COMPLETED...</h1>
        <div id="ProjectPage-container">
            <div className="ProjectPage-card">
                <img src={Image1} alt="Quiz Game"/>
                <p><b>Quiz Game</b></p>
                <p>This project is a simple web-based quiz game that challenges users with a set of questions. Whether you're a quiz enthusiast or a developer looking to implement a fun quiz application, this project can serve as a starting point.</p>
                <Link to="https://github.com/ansh67283/Quiz-game/blob/main/README.md" className='Project-links'>Github</Link>
            </div>
            <div className="ProjectPage-card"> 
            <img src={Image2} alt="Matrix Calculator"/>
            <p><b>Matrix Calculator</b></p>
                <p>This is a matrix calculator written in C that uses arrays and loops to perform operations such as addition (+), subtraction (-), multiplication (*), and division (/).</p>
                <Link to="https://github.com/ansh67283/MATRIX-CALCULATOR" className='Project-links'>Github</Link>
            </div>
            <div className="ProjectPage-card">
                <img src={Image3} alt="Movie"/>
                <p><b>Movie Ticket Booking Management System</b></p>
                <p>Movie Ticket Booking System! This simple C program allows users to browse available movies, view the seating chart, and book tickets for their favorite films. (/).</p>
                <Link to="https://github.com/ansh67283/Movie-Booking-Management-System" className='Project-links'>Github</Link>
            </div>
        </div>
        </div>
        </>
    )
}

export default Project;
