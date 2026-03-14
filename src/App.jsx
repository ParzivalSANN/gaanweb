import MusicPlayer from './components/MusicPlayer';
import SplashScreen from './components/SplashScreen';
import './App.css';

function App() {
  const [showSplash, setShowSplash] = React.useState(true);

  return (
    <div className="App">
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
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
