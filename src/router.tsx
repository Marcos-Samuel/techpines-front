import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import MusicList from './pages/MusicList';

const RouterPage: React.FC = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/music-list" element={<MusicList />} />
      </Routes>
  );
}

export default RouterPage;
