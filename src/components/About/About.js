import React from 'react';
import './About.css'; // Import the CSS file for this component

const About = () => {
  return (
    <section id="about">
      <h1>About Me</h1>
      <p>
        Hi!<br /><br />
        My name is Rohan Prabhu, and I'm interested in helping create experiences that improve our interactions with technology.<br /><br />

        Right now, I'm pursuing that mission by working in two capacities. First, I operate as the CRO Coordinator at CXperts Inc, a marketing agency focused on
        creating optimized web experiences for the end user.<br /><br />

        Additionally, I manage a team of UX designers at SDSU's Digital Innovation Lab, designing products for startups in San Diego.<br /><br />

        Currently, I'm a Management Information Systems student at San Diego State University, with a minor in Statistics. After I graduate in the spring of 2024,
        I plan to continue to work full-time at CXperts while living in San Jose.<br /><br />

        Outside of work and school, I like to read and go hiking!<br /><br />
        
        You can contact me directly at <a href="mailto:ruprabhu2@gmail.com">ruprabhu2@gmail.com</a> or visit my <a href="https://www.linkedin.com/in/rohan--prabhu/" style={{ color: 'blue' }}>LinkedIn</a>.<br /><br />
      </p>
    </section>
  );
};

export default About;
