import React from 'react';
import './Projects.css'; // Import the CSS file for this component

const Projects = () => {
  return (
    <section id="projects">
      <h1>Projects</h1>
      <div className="container"> {/* Use className instead of class */}
        <div>
          <a href="https://careerbenchservice.azurewebsites.net/" target="_blank" rel="noopener noreferrer"> {/* Add rel attribute for security */}
            <img src="./assets/careercopilot.png" alt="Figma Files for Career Copilot" />
          </a>
          <p>Career Copilot <br /> Redefining Work in the Age of Artificial Intelligence</p>
        </div>
      </div>
      <div style={{ height: '50px' }}></div> {/* Proper JSX style attribute */}
      <div className="container"> {/* Use className instead of class */}
        <div>
          <a href="./assets/3ds_business_report.pdf" target="_blank" rel="noopener noreferrer"> {/* Add rel attribute for security */}
            <img src="./assets/3ds.png" alt="Dassault Systemes Business Report Link" />
          </a>
          <p>Dassault Systemes <br /> Improving the RFP Process Business Report</p>
        </div>
        <div className="flex-margin"></div> {/* Use className instead of class */}
        <div>
          <a href="https://www.its-personal.co/" target="_blank" rel="noopener noreferrer"> {/* Add rel attribute for security */}
            <img src="./assets/itspersonal.png" alt="It's Personal Shopify Storefront" />
          </a>
          <p>It's Personal <br /> Building an Online Storefront</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
