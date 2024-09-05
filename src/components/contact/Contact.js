// import React from 'react';
// import './contact.css'


// function Contact() {
//   return (
//     <section id="contact">
//       <h2>Contact</h2>
//       <p>Email: <a href="mailto:fatemayasen2@gmail.com">fatemayasen2@gmail.com</a></p>
//       <p>Phone: 052-5384608</p>
//       <p>GitHub: <a href="https://github.com/fatemaY">https://github.com/fatemaY</a></p>
//       <p>LinkedIn: <a href="https://linkedin.com/in/fatema-yasen-460b96213">Fatema Yasen</a></p>
//     </section>
//   );
// }

// export default Contact;

import React from 'react';
import './contact.css';

function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <div className="contact-item">
        <i className="fas fa-envelope"></i>
        <p>Email: <a href="mailto:fatemayasen2@gmail.com">fatemayasen2@gmail.com</a></p>
      </div>
      <div className="contact-item">
        <i className="fas fa-phone-alt"></i>
        <p>Phone: 052-5384608</p>
      </div>
      <div className="contact-item">
        <i className="fab fa-github"></i>
        <p>GitHub: <a href="https://github.com/fatemaY">https://github.com/fatemaY</a></p>
      </div>
      <div className="contact-item">
        <i className="fab fa-linkedin"></i>
        <p>LinkedIn: <a href="https://linkedin.com/in/fatema-yasen-460b96213">Fatema Yasen</a></p>
      </div>
    </section>
  );
}

export default Contact;

