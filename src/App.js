import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import './App.css'; // Import component-level CSS

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Projects />
      <About />
      <Resume />
    </div>
  );
}

export default App;