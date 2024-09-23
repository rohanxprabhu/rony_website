import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'; // Import component-level CSS
import Spotify from './components/Spotify/spotify';

function SpotifyApp() {
    return (
      <div>
        <Spotify />
      </div>
    );
  }

export default SpotifyApp;