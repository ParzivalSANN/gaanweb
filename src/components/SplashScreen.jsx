import React, { useState, useEffect } from 'react';
import './SplashScreen.css';

const SplashScreen = ({ onFinish }) => {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFading(true);
      setTimeout(onFinish, 1000); // Wait for fade-out animation
    }, 3000); // Show for 3 seconds

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className={`splash-screen ${isFading ? 'fade-out' : ''}`}>
      <div className="splash-content">
        <div className="main-heart-wrapper">
          <div className="heart-3d">❤</div>
          <div className="particles">
            <span>✨</span>
            <span>💖</span>
            <span>✨</span>
            <span>💗</span>
          </div>
        </div>
        <h2 className="loading-text">Anılarımız Yükleniyor...</h2>
        <div className="loading-bar-container">
          <div className="loading-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
