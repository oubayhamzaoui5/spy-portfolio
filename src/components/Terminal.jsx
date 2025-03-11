import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Terminal.css";

const Terminal = () => {
  return (
    <div className="terminal">
      <div className="terminal-container">
        <div className="bio-images">
          <div className="terminal-image">
            <img src={import.meta.env.BASE_URL + "assets/portrait.jpg"} alt="Agent" />
          </div>
          <div className="terminal-image globephone">
            <img src={import.meta.env.BASE_URL + "assets/globe.gif"} alt="globe" />
          </div>
        </div>
        <div className="terminal-content">
          <div className="terminal-body">
            <span className="clasified">&gt;CLASIFIED FILES </span><br />
            <Typewriter
              words={[
                ">Agent Name: Oubay Hamzaoui \n>Mail: oubayhamzaoui5@mail.com \n>Code Name: 'The Coder' \n>Age: 20 \n>Mission: Develop and innovate. \n>Skills: React, Node.js, Python, SQL... \n>Profession: Computer Science Student \n>Nationality: Tunisian"
              ]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={20}
              deleteSpeed={0}
              delaySpeed={500}
            />
            <div className="buttons"> 
              <a href="https://github.com/oubayhamzaoui5" target="_BLANK">
                <button>MORE</button>
              </a>
              <a href="path/to/cv.pdf" download={import.meta.env.BASE_URL + "assets/Oubay_CV.pdf"}>
                  <button>DOWNLOAD CV</button>
              </a>
            </div>
          </div>
          <div className="globe-container">
            <img src={import.meta.env.BASE_URL + "assets/globe.gif"} alt="Globe" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
