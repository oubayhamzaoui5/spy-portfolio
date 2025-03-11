import React from 'react';
import './Bio.css';
import DecryptedText from './DecryptedText';

const Bio = () => {
  return (
    <div className="bio">
      <div className="bio-container">
        
        <div className="bio-content">
          <div className="bio-header">
            <span className="bio-position">&gt;AGENT PROFILE</span>
          </div>
          <div className="bio-body">
   
            <DecryptedText
              text="&gt;Oubay Hamzaoui is a highly skilled operative in the world of coding and development. Specializing in Python, React, SQL, and a range of other technologies, he navigates the digital landscape with precision and efficiency. His mission? To build seamless, intelligent systems, optimize performance, and push the boundaries of innovation."
              animateOn="view"
              revealDirection="end"
            />
            <br /><br />
            
            <DecryptedText
              text="&gt;From developing dynamic web applications to designing efficient databases and crafting smooth user experiences, Oubay executes each task with the finesse of a seasoned agent. Whether writing clean, scalable code or troubleshooting complex issues, he approaches every challenge with strategic thinking and adaptability."
              animateOn="view"
              revealDirection="end"
            />
            <br /><br />
            <DecryptedText
              text="&gt;But in the ever-evolving world of technology, an agent must always stay ahead. Constantly upgrading his skills and embracing new methodologies, Oubay ensures that no mission is too complex, no system too intricate. Every project is an opportunity to refine his craft, and every challenge fuels his pursuit of mastery."
              animateOn="view"
              revealDirection="end"
            />
          </div>
     
        </div>
        <div className="bio-images">
          <div className="bio-image">
            <img src={import.meta.env.BASE_URL + "assets/fingerprint.jpg"} alt="fingerprint" />
          </div>
          <div className="bio-image">
            <img src={import.meta.env.BASE_URL + "assets/qr.png"} alt="qr" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
