import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Blog, WhoIam, Books, Arts, Games, Mineblog, NotFound } from './pages';
import FirtsPost from './posts/links-posts/Firtspost';
import PlayedMarcelo from './posts/links-posts/PlayedMarcelo';
import TheThing from './posts/links-posts/TheThing';
import { Background, Stickers, MusicBackground } from './components';
import './App.css';
import { rainbowCursor } from "cursor-effects";

function App() {
  const [message, setMessage] = useState('');


  useEffect(() => {
    if (!message) return;

    const timer = setTimeout(() => setMessage(''), 2500);
    return () => clearTimeout(timer);
  }, [message]);

  const handleRightClick = (e) => {
    e.preventDefault();
    setMessage('pls do not try to steal any part of the code! If you want to view the code, feel free to use F12!');
  };



  return (
    <div onContextMenu={handleRightClick}>
      <Router>
        <Background>
          <Stickers />
          <MusicBackground />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/FORBIDDEN" element={<WhoIam />} />
            <Route path="/books" element={<Books />} />
            <Route path="/arts" element={<Arts />} />
            <Route path="/games" element={<Games />} />
            <Route path="/mineblog" element={<Mineblog />} />
            <Route path="/firtspost" element={<FirtsPost />} />
            <Route path="/playmarcelo" element={<PlayedMarcelo />} />
            <Route path="/the-things" element={<TheThing />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Background>
      </Router>

      {message && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="rounded-2xl bg-linear-to-t to-green-800/80 from-blue-500/80 border-4 border-white/40 px-6 py-4 shadow-2xl shadow-blue-500/40 text-center text-white">
            {message}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;