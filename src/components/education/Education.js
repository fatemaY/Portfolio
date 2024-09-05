import React from 'react';
import './education.css';

function Education() {
  return (
    <section id="education">
      <h2>Education</h2>
      <div className="education-item">
        <h3>Full Stack Developer Bootcamp – Appleseed's</h3>
        <p className="education-date">Sep. 2023 – Apr. 2024 (Expected)</p>
        <p>Intensive 6-month, 720-hour training program.</p>
      </div>
      <div className="education-item">
        <h3>B.Sc. in Information Systems & Mathematics, University of Haifa</h3>
        <p className="education-date">2019 – 2023</p>
      </div>
    </section>
  );
}

export default Education;
