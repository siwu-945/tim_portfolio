import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About'
import Projects from './components/Projects';
import Photograph from './components/Photograph';
import InteractiveImage from './components/InteractiveImage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<InteractiveImage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/photograph" element={<Photograph />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};


export default App;
