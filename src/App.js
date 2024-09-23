import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import './App.css'; // Import component-level CSS
import Spotify from './components/Spotify/spotify';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
          <Routes>
            <Route path="/spotify" element={<Spotify />}/>
            <Route 
              path="/" 
              element={
                <div>
                  <Hero />
                  <Projects />
                  <About />
                </div>
              }
            />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
