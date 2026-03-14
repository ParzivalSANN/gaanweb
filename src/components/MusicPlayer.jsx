import React, { useState, useRef, useEffect } from 'react';
import './MusicPlayer.css';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Using a soft romantic instrumental track (public domain/royalty free)
  const musicUrl = "https://www.chosic.com/wp-content/uploads/2021/04/And-So-It-Begins-Inspired-By-Crush-Music.mp3";

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => {
        console.error("Autoplay blocked or audio error:", err);
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="music-player">
      <audio ref={audioRef} src={musicUrl} loop />
      <button 
        className={`music-btn ${isPlaying ? 'playing' : ''}`} 
        onClick={toggleMusic}
        title={isPlaying ? "Müziği Durdur" : "Müziği Başlat"}
      >
        <div className="heart-icon">
          {isPlaying ? '🎵' : '❤'}
        </div>
        <span className="music-tooltip">
          {isPlaying ? 'Müzik Açık' : 'Müziği Başlat'}
        </span>
      </button>
    </div>
  );
};

export default MusicPlayer;
