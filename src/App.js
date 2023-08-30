import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Experience from './components/Experience';
import './App.css';

function App() {
  // State for loading status
  const [isLoading, setIsLoading] = useState(true);

  // State for mouse position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Effect to update mouse position when mouse moves
  useEffect(() => {
    const handleMouseMove = ({ clientX, clientY }) => {
      setMousePosition({ x: clientX, y: clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Style for mouse element
  const mouseStyle = {
    top: mousePosition.y,
    left: mousePosition.x,
  };

  // Effect to set loading status to false after a delay
  useEffect(() => {
    const loadingDelay = 3000;

    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, loadingDelay);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="App overflow-x-hidden bg-gray-900">
      {isLoading ? (
        <div className="loading-container">
          <p className="loading-text">Programmer, Artist & Writer</p>
          <div className="typing-indicator"></div>
        </div>
      ) : (
        <>
          <NavBar />
          <Home />
          <About />
          <Portfolio />
          <Experience />
          <Contact />
          <SocialLinks />
        </>
      )}
      <div className="mouse" style={mouseStyle}></div>
    </div>
  );
}

export default App;
