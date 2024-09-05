import React from 'react';
import './project.css';

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-card">
        <h3>Standing Together Project</h3>
        <p>Developed a JavaScript-based client system to manage and model movement data.</p>
        <ul>
          <li>Utilized SQL Statements and JavaScript for data management.</li>
          <li>Managed data storage using SQL Server and MySQL.</li>
          <li>Developed and exposed RESTful APIs.</li>
          <li>Leveraged Google Cloud for application design, development, and deployment.</li>
        </ul>
      </div>
      <div className="project-card">
        <h3>Tutoring App</h3>
        <p>Developed a React-based application enabling users to schedule lessons with preferred tutors.</p>
        <ul>
          <li>Implemented the application using React and JavaScript.</li>
          <li>Designed the user interface with CSS and JavaScript.</li>
          <li>Managed routing and created distinct components for each route.</li>
        </ul>
        <p><a href="https://tutoring-centre.netlify.app/" target="_blank" rel="noopener noreferrer">View Demo</a></p>
      </div>
    </section>
  );
}

export default Projects;
