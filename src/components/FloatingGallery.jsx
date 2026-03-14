import React, { useEffect, useState } from 'react';
import './FloatingGallery.css';

const mediaItems = [
  { type: 'image', src: '/assets/IMG-20251021-WA0037.jpg' },
  { type: 'image', src: '/assets/IMG-20251125-WA0011.jpg' },
  { type: 'video', src: '/assets/VID-20251108-WA0008.mp4' },
  { type: 'image', src: '/assets/IMG-20251210-WA0022.jpg' },
  { type: 'image', src: '/assets/IMG-20251213-WA0018.jpg' },
  { type: 'image', src: '/assets/IMG-20251227-WA0006.jpg' },
  { type: 'image', src: '/assets/IMG-20260101-WA0036.jpg' },
  { type: 'video', src: '/assets/VID_20251225_204309.mp4' },
  { type: 'image', src: '/assets/IMG-20260124-WA0007.jpg' },
  { type: 'image', src: '/assets/IMG-20260129-WA0005.jpg' },
  { type: 'image', src: '/assets/IMG-20260306-WA0000.jpg' },
  { type: 'image', src: '/assets/IMG-20260306-WA0001.jpg' },
  { type: 'image', src: '/assets/IMG-20260311-WA0001.jpg' },
  { type: 'image', src: '/assets/IMG_20251128_221048.jpg' },
];

const FloatingGallery = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero-section">
      <div className="blobs">
        <div className="blob"></div>
        <div className="blob"></div>
      </div>

      <div className="hero-content">
        <h1 className="hero-title">İyiki Doğdun Hayatımın Anlamı</h1>
        <p className="hero-subtitle">Birlikte Nice Mutlu Bir Ömüre...</p>

        <div className="scroll-indicator">
          <span>Aşağı Kaydır</span>
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="arrow">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <div className="media-gallery">
        {mediaItems.map((item, index) => (
          <div 
            key={index} 
            className={`floating-item item-${index}`}
            style={{ 
              transform: `translateY(${scrollY * (index % 2 === 0 ? 0.08 : 0.12)}px)` 
            }}
          >
            <div className={`media-frame ${item.type}`}>
              {item.type === 'image' ? (
                <img src={item.src} alt={`Moment ${index}`} loading="lazy" />
              ) : (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  defaultMuted
                  onCanPlay={(e) => e.target.mute = true}
                  preload="auto"
                >
                  <source src={item.src} type="video/mp4" />
                  Tarayıcınız video etiketini desteklemiyor.
                </video>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FloatingGallery;
