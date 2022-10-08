import React from 'react';
import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <CssBaseline />
      <main>
        <Routes>
          <Route path="/movie/:id" element={<h1>Movie Information</h1>} />
          <Route path="/actors/:id" element={<h1>Actors</h1>} />
          <Route path="/" element={<h1>Movies</h1>} />
          <Route path="/movies/:id" element={<h1>Profile</h1>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
