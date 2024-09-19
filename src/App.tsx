import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CharactersList from './pages/CharactersList';
import CharacterInfo from './pages/CharacterInfo';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CharactersList />} />
        <Route path="/character" element={<CharacterInfo character={{
          name: '',
          height: '',
          mass: '',
          hair_color: '',
          skin_color: '',
          eye_color: '',
          birth_year: '',
          gender: '',
          homeworld: '',
          films: [],
          species: [],
          vehicles: [],
          starships: []
        }} />} />
      </Routes>
    </Router>
  );
};

export default App;
