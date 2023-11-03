// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import HistoryPage from './pages/HistoryPage';
import PredictPage from './pages/PredictPage';
import Navbar from './componenets/Navbar';
import './App.css';

function App() {

  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes> {/* Routes 컴포넌트로 라우트를 감싸줍니다. */}
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/predict" element={<PredictPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;