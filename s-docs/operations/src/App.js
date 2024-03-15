import React from 'react';
import { BrowserRouter as Router, Route,Routes, Navigate } from 'react-router-dom';
import { v4 as uuidV4 } from 'uuid';

import docwriter from './docwriter';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={`/documents/${uuidV4()}`} />} />
        <Route path="/documents/:id" element={<docwriter />} />
      </Routes>
    </Router>
  );
}

export default App;