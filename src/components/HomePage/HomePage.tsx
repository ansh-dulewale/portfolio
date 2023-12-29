import React, { useEffect, useState } from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import Image1 from "../Images/HomePageImage/Developer.png";

function HomePage() {
    const [word, setWord] = useState("");
    const [index, setIndex] = useState(0);
    const [name, setName] = useState("");
    const [index2, setIndex2] = useState(0);
    const [index3, setIndex3] = useState(0);
    const FullWord = "WELCOME TO MY PORTFOLIO PAGE";
    const FullWord2 = "MY NAME IS ANSH DULEWALE";
    const pos = ["Backend Developer", "FrontEnd Developer", "Full Stack Developer"];
    const [currentPos, setCurrentPos] = useState("");

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (index < FullWord.length) {
                setWord((prev) => prev + FullWord[index]);
                setIndex(index + 1);
            }
        }, 100);

        return () => clearInterval(intervalId);
    }, [index]);

    useEffect(() => {
        if (word.length === FullWord.length) {
            const intervalId2 = setInterval(() => {
                if (index2 < FullWord2.length) {
                    setName((prev) => prev + FullWord2[index2]);
                    setIndex2(index2 + 1);
                }
            }, 100);

            return () => clearInterval(intervalId2);
        }
    }, [index2, word]);

    useEffect(() => {
        if (name.length === FullWord2.length) {
            const intervalId3 = setInterval(() => {
                if (index3 < pos.length) {
                    setCurrentPos(pos[index3]);
                    setIndex3(index3 + 1);
                } else {
                    setIndex3(0);
                }
            }, 1000);
            return () => clearInterval(intervalId3);
        }
    }, [index3, name, pos]);

    return (
        <>
            <div id="HomePage-container">
                <div id="HomePage">
                    <div id="HomePage-Greeting">
                        <span>{word}</span> <span id="name">{name}</span> <span id="name">I am a {currentPos}</span>
                    </div>
                    <div id="HomePage-links">
                        <div id="HomePage-link-1">
                            <Link to="/about">Know more</Link>
                        </div>
                        <div id="HomePage-link-2">
                            <Link to="/contact">Contact me</Link>
                        </div>
                    </div>
                </div>
                <div id="HomePage-Image">
                    <img src={Image1} alt="Developer"/>
                </div>
            </div>
        </>
    )
}

export default HomePage;
