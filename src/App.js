import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About'
import Projects from './components/Projects';
import Photograph from './components/Photograph';
import InteractiveImage from './components/InteractiveImage';
import Overview from './components/Overview';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="pt-16">
        <Routes>
        <Route
          path="/"
          element={
            <>
              <InteractiveImage />
              <Overview/>
            </>
          }
        />          <Route path="/projects" element={<Projects />} />
          <Route path="/photograph" element={<Photograph />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
};


export default App;
