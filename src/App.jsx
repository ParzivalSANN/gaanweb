import React from 'react';
import FloatingGallery from './components/FloatingGallery';
import Envelope from './components/Envelope';
import MusicPlayer from './components/MusicPlayer';
import './App.css';

function App() {
  return (
    <div className="App">
      <MusicPlayer />
      <div className="background-decor">
        <div className="sparkle s1"></div>
        <div className="sparkle s2"></div>
        <div className="sparkle s3"></div>
      </div>
      
      <FloatingGallery />
      
      <div className="divider">
        <div className="heart-divider">❤</div>
      </div>

      <Envelope />
      
      <footer className="footer-v2">
        <p>Tüm anılarımız için teşekkür ederim...</p>
        <span>Sonsuza kadar seninle.</span>
      </footer>
    </div>
  );
}

export default App;
