import React from 'react'
import "../Sass/About.css"

export default function About() {
  return (

    <div className="About">
        
        <div className="Intro">
            <h1 className="text-light">I love to build things!</h1>
            <p className="text-light lead">I'm Brian, a self-taught <mark>developer</mark>. I'm committed to <mark>UX</mark>, <mark>Robotics</mark>,<mark> Web and Software Development</mark>.</p>
            <h3 className="text-light"> I believe in <mark>Entrepreneurship</mark>. I strive to make</h3>
            <h3 className="text-light">a difference in <mark>Software and Robotics</mark>.</h3>
        </div>

        <div className="aboutBtn"> 
            <a href="https://www.linkedin.com/in/brian-shisanya-7a5a6516a/"><button className="text-light more">More About me?</button></a>
            <div className="ConnectLines"></div>
        </div>
        
    </div>
  )
}
