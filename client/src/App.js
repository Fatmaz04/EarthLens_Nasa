import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import Chapter from './pages/Chapter/[id]';
import Leaderboard from './pages/Leaderboard';
import Challenge from './pages/Challenge';
import './index.css'; 
import Video from './pages/Video/[videoId]';
import Quiz from './pages/Quiz';
import Header from './components/Header';
import Dashboards from './pages/Dashboards';
import Analysis from './pages/Analysis';
import Chapters from './pages/Chapters';
import Game from './pages/Game';
import { AuthProvider } from './contexts/AuthProvider';
const App = () => {
  return (
    <Router>
      <AuthProvider>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/home" element={<><Header/><Home /></>} />
        <Route path="/chapters" element={<><Header/><Chapters /></>} />
        <Route path="/game" element={<><Header/><Game /></>} />
        <Route path="/dashboards" element={<><Header/><Dashboards/></>} />
        <Route path="/analysis" element={<><Header/><Analysis/></>} />
        <Route path="/leaderboard" element={<><Header/><Leaderboard/></>} />
        <Route path="/challenge" element={<><Header/><Challenge/></>} />
        <Route path="/chapter/:id" element={<><Header/><Chapter /></>} />
        <Route path="/chapter/:id/video/:videoId" element={<><Header/><Video /></>} />
        <Route path="/chapter/:id/quiz" element={<><Header/><Quiz/></>} />
      </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
