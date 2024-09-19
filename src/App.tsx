import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CharactersList from './pages/CharactersList';
import CharacterInfo from './pages/CharacterInfo';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CharactersList />} />
        <Route path="/character/:name" element={<CharacterInfo />} />
      </Routes>
    </Router>
  );
};

export default App;
