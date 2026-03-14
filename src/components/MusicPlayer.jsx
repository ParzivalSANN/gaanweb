import React, { useState, useRef, useEffect } from 'react';
import './MusicPlayer.css';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);

  // YouTube Video ID from the link: -oofWwcmNHk
  const videoId = "-oofWwcmNHk";

  useEffect(() => {
    // Load YouTube IFrame API
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player('youtube-player', {
        height: '0',
        width: '0',
        videoId: videoId,
        playerVars: {
          'autoplay': 0,
          'controls': 0,
          'loop': 1,
          'playlist': videoId
        },
        events: {
          'onReady': (event) => {
            console.log("YouTube Player Ready");
          }
        }
      });
    };
  }, []);

  const toggleMusic = () => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.pauseVideo();
      } else {
        playerRef.current.playVideo();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="music-player">
      <div id="youtube-player" style={{ display: 'none' }}></div>
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
