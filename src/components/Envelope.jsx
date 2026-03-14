import React, { useState, useEffect, useRef } from 'react';
import './Envelope.css';

const Envelope = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const envelopeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (envelopeRef.current) {
      observer.observe(envelopeRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  return (
    <section className="envelope-section">
      <div
        ref={envelopeRef}
        className={`envelope-container ${isVisible ? 'visible' : ''} ${isOpen ? 'active' : ''}`}
        onClick={handleOpen}
      >
        {/* The Zarf itself which will disappear */}
        <div className="envelope-card">
          <div className="flap-outer"></div>
          <div className="envelope-body"></div>
          <div className="pearl-seal">
            <div className="seal-inner">❤</div>
          </div>
        </div>

        {/* The Letter which stays/appears */}
        <div className="letter-wrapper">
          <div className="parchment-scroll">
            <div className="scroll-content">
              <button className="close-btn" onClick={handleClose}>×</button>
              <div className="scroll-text">
                <h3>Canım Sevgilime,</h3>
                <p>💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗</p>
                <p> Benim canımmm balımmm birtanemmm aşkımmm hayatımmm hayatımınnn anlamıı herrr şeyimmm kurbann olduğummm biriciğimm enn değerlimm ömrüme ömür canıma can katanımm canımınnn canııı ömrümmmm yeni yaşın kutlu mutlu huzurlu ve mutluluk dolu olsun nice bizli beraber mutlu huzurlu sevgi saygı dolu senelere senii sonsuzaa kadarrr çooooooookkkk amaa çooooooookkkk amaa çooooookkk seviyorummm hayatımınnn anlamıı herrr şeyimmm biriciğimm enn değerlimmm birtanemmm karımmmm doğum günün kutlu olsunn nice birlikte beraber bizli doğum günlerimize senii çooooooookkkk seviyorummm iyi ki doğdun hayatımın anlamı biriciğimm canımmm karımmm benimmm </p>
                <p>💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗</p>
                <div className="signature">
                  <span>Sonsuza dek,seni çooooook seven</span>
                  <p>Sevgilin..</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {!isOpen && <p className="interaction-hint">Mektubu Açmak İçin Dokun</p>}
      </div>

      {isOpen && <div className="overlay" onClick={handleClose}></div>}
    </section>
  );
};

export default Envelope;
