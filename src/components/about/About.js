import React from 'react';
import './about.css'
import img from './fatema.jpeg'

function About() {
  return (
    <section id="about">
      <h2>Hi,</h2>
      <h2>I'm Fatema Yasen</h2>
      <p>Email: <a href="fatemayasen2@gmail.com">fatemayasen2@gmail.com</a> | Phone: 052-5384608</p>
      <img src={img} alt="Fatema Yasen" className="img" />
      <p>
        Holder of a bachelor's degree in Information Systems and Mathematics from the University of Haifa, 
        supplemented by comprehensive training in a Full-Stack Developer Bootcamp. Actively seeking a full-time 
        junior position in DevOps, automation, or software development to leverage and expand my technical expertise.
      </p>
    </section>
  );
}

export default About;
