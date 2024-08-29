import React from 'react';
import './Resume.css'; // Import the CSS file for this component
//comment
const Resume = () => {
  return (
    <section id="resume">
        <div>
            <h1>Resume</h1>
            <a href="./assets/resume.pdf" target="_blank" rel="noopener noreferrer"> {/* Add rel attribute for security */}
                <img src="./assets/resume.png" alt="Resume"/>
            </a>
        </div>
    </section>
  );
};

export default Resume;
