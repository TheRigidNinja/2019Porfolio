import React from 'react'
import "../css/Contact.css"

export default function Contact() {
  return (
    <div className="Contact text-light">
        <i className="fas fa-envelope-open-text"></i>

        <h1>Get In Touch</h1>
        <p>
            You want to collaborate or have questions? Great!!
            <br/>
            Please do get in touch with me. <br/> Use the links below or find other ways necessary; 
            <br/>
            I won't miss it!
        </p>
        
        <div className="contactLinks">
            <a href="https://github.com/TheRigidNinja?tab=repositories" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/brian-shisanya-7a5a6516a/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            <a href="https://codepen.io/minotauro49" target="_blank" rel="noopener noreferrer"><i className="fab fa-codepen"></i></a>
            <a href="http://bit.ly/2H1j3H1" target="_blank"  rel="noopener noreferrer"><i className="far fa-address-card"></i></a>
            <a href="mailto:brian.shisanya2000@gmail.com"><i className="fas fa-envelope"></i></a>
            <a href="tel:0416047871"><i className="fas fa-phone"></i></a>
        </div>

    </div>
  )
}
