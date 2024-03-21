import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import History from './components/History';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <NavBar />
          <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/history" element={<History />} />
          <Route path="/contact" element={<Contact />} />
          </Switch>
        </Route>
      </ Routes>
    </BrowserRouter>
  );
}

export default App;
