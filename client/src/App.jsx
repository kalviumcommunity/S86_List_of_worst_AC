// src/App.jsx
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes.jsx";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
