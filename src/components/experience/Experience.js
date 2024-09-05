import React from 'react';
import './experience.css';

function Experience() {
  return (
    <section id="experience">
      <h2>Work Experience</h2>
      <div className="experience-item">
        <h3>Fullstack / Frontend Internship</h3>
        <p className="experience-date">Feb. 2024 - Apr. 2024</p>
        <p>Contributed to multiple projects across diverse programming languages and technologies.</p>
      </div>
      <div className="experience-item">
        <h3>Mentor and Teacher</h3>
        <p className="experience-date">2018-2021</p>
        <p>Provided lessons in mathematics and programming to high school and college students.</p>
      </div>
    </section>
  );
}

export default Experience;

