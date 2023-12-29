import React from 'react';
import './ContactPage.css';
import ContactPageImage from '../Images/ContactPage/contactPageImage.webp'

const Contact = () => {
    return (
        <>
        <div id="ContactPage-container">
            <div id="ContactPage-form">
            <form action="contact">
                <label htmlFor="email">Enter email</label>
                <input type="email" name="email" placeholder='abc@gmail.com or abc@outlook.com'/>
                <label htmlFor="message">Enter Message</label>
                <textarea name="message" placeholder='Enter your message here' cols="30" rows="10"></textarea>
                <div id="button">
                <button id="submit">Submit</button>
                </div>
            </form>
            </div>
            <div id="ContactPage-image">
            <img src={ContactPageImage} alt="ContactPageImage"/>
            </div>
        </div>
        </>
    )
}

export default Contact;
