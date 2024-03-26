import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import History from './components/History';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import ParticlesComponent from './components/ParticlesOpts';


function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <ParticlesComponent id="tsparticles" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/history" element={<History />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
