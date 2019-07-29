import React from "react";
import "../css/About.css";
import myPic from "../IMG/myPic.jpeg";

function handleRelocate() {
  window.open(
    "https://www.linkedin.com/in/brian-shisanya-7a5a6516a/",
    "_blank"
  );
}

export default function About() {
  return (
    <div className="About">
      <div className="header">
        <img src={myPic} onClick={() => handleRelocate()} alt="MyPic" />
        <span>Brian Shisanya</span>
        <span>Self-taught Developer</span>
      </div>

      {/* About me */}
      <div>
        <span>About me</span>
        <section>
          <p>
            My name is Brian Shisanya; I am a self-taught developer based in
            Hobart. For a hobby, I have been developing for a little bit over 2
            years, and as a result I have experience in HTML5, CSS3, JavaScript,
            jQuery and about 1 year experience in React-Redux, Node.js,
            Bootstrap 4, Sass and Unit testing with Mocha, Chai, Enzyme and Jest
            for React and Nodejs.
            <br />
            <br />
            I like to describe myself as a developer who is addicted to coding,
            and as well as has a strong sense of aesthetics and user
            interaction. <br />
            <br />
            Currently, I’m looking for a position as a Front End Developer. In
            my spare time, I like to learn and improve my design skills by
            watching a Youtuber with a channel called{" "}
            <a
              href="https://www.youtube.com/user/DesignCourse"
              target="_blank"
              rel="noopener noreferrer"
            >
              DesignCourse
            </a>
            . Equally I love keeping up with the latest news about robotics and
            learning especially about tech businesses. I also like to
            participate in Onlin.
            <br />
            <a
              href="https://www.linkedin.com/in/brian-shisanya-7a5a6516a/"
              target="_blank"
              rel="noopener noreferrer"
              className="more"
            >
              More detail...
            </a>
          </p>
        </section>
      </div>

      {/* Education */}
      <div className="Education">
        <span className="Edheader">Education</span>

        <section>
          {/*  Name institution  */}
          <span className="institution">
            <span>Hobart College</span>
            <small>01/2017 – 12/2018</small>
          </span>
          {/*  Name of place  */}
          <span className="place">Hobart, TAS</span>
          {/*  courses that i took */}
          <ul className="courses">
            <li>Courses</li>
            <li>Computer Science </li>
            <li>Information technology</li>
          </ul>
        </section>

        <section>
          {/*  Name institution  */}
          <span className="institution">
            <span>W3school</span>
            <small>05/2017 – 04/2018</small>
          </span>
          {/*  Name of place  */}
          <span className="place">Online</span>
          {/*  courses that i took */}
          <ul className="courses">
            <li>Courses</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Node.js</li>
            <li>JavaScript ES6</li>
            <li>jQuery</li>
          </ul>
        </section>

        <section>
          {/*  Name institution  */}
          <span className="institution">
            <span>The Net Ninja</span>
            <small>11/2018 – 01/2019</small>
          </span>
          {/*  Name of place  */}
          <span className="place">Youtube</span>
          {/*  courses that i took */}
          <ul className="courses">
            <li>Courses</li>
            <li>{"React & Redux"}</li>
          </ul>
        </section>
      </div>

      {/* Skills*/}
      <div>
        <span>{"Tools & Skills"}</span>
        <section className="Tools">
          <span>JavaScript ES6+</span>
          <span>HTML5</span>
          <span>CSS3</span>
          <span>jQuery</span>
          <span>React-Redux</span>
          <span>Node.js</span>
          <span>VS-Code</span>
          <span>GitKraken</span>
          <span>BootStrap 4</span>
          <span>Sass</span>
          <span>Version control - Git/GitHub</span>
          <span>{"Unit-Testing { Mocha, Chai, Enzyme and Jest }"}</span>
          <span>Prettier</span>
          <span>ExpressJS</span>
          <span>MySQL</span>
        </section>
      </div>

      {/* Experience */}
      <div>
        <span>Work Experience</span>
        <section>
          {/*  Name institution  */}
          <span className="institution">
            <span>Bar Attendant</span>
            <small>09/2017 – 02/2019</small>
          </span>
          {/*  Name of place  */}
          <span className="place">Grape Food and Wine Bar</span>
          {/*  courses that i took */}
          <ul className="courses">
            <li>Achievements/Tasks</li>
            <li>Interacting with customers</li>
            <li>Cooperating with co-workers</li>
            <li>Working in an agile team environment</li>
          </ul>
        </section>
      </div>

      {/* Hobbies */}
      <div>
        <span>Hobbies</span>
        <section className="Hobbies">
          <span>Attend tech-meet-ups</span>
          <span>Making Dribbble mockups to actual websites / applications</span>
        </section>
      </div>

      {/* Contact info */}
      <div id="contact">
        <span>Contact</span>
        <section className="contact">
          <p>
            You want to collaborate or have questions? Great!! Please do get in
            touch with me. Use the links below or find other ways necessary; I
            won't miss it!
          </p>
          <a
            href="https://github.com/TheRigidNinja?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github" />
          </a>
          <a
            href="https://www.linkedin.com/in/brian-shisanya-7a5a6516a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin" />
          </a>
          <a
            href="https://codepen.io/minotauro49"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-codepen" />
          </a>
          <a
            href="http://bit.ly/2H1j3H1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="far fa-address-card" />
          </a>
          <a href="mailto:brian.shisanya2000@gmail.com">
            <i className="fas fa-envelope" />
          </a>
          <a href="tel:0416047871">
            <i className="fas fa-phone" />
          </a>
        </section>
      </div>
    </div>
  );
}
