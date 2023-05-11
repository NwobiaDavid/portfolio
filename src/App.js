import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Particles from 'react-particles-js';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const mouseStyle = {
    position: 'absolute',
    top: mousePosition.y,
    left: mousePosition.x,
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: '#fff',
    zIndex: 9999,
    pointerEvents: 'none',
    transform: 'translate(-50%, -50%)',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // simulate a 2-second loading delay
  }, []);

  return (
    <div className="App  bg-gray-900">
      <Particles
        params={{
          particles: {
            number: {
              value: 50,
            },
            size: {
              value: 3,
            },
            color: {
              value: '#ffffff',
            },
            line_linked: {
              color: {
                value: '#ffffff',
              },
            },
          },
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}
      />
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
      <div style={mouseStyle}></div>
    </div>
  );
}

export default App;
