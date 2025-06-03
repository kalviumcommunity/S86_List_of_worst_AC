// App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Routes'; // adjust the path if needed

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
