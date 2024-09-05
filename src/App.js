import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Experience from './components/experience/Experience';
import Education from './components/education/Education';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<About />} />
        {/* <Route path="about" element={<About />} /> */}
        <Route path="projects" element={<Projects />} />
        <Route path="experience" element={<Experience />} />
        <Route path="education" element={<Education />} />
        <Route path="skills" element={<Skills />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
    <Footer />

  </BrowserRouter>
    
  );
}

export default App;



