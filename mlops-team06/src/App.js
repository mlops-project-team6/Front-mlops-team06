// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import HistoryPage from './pages/HistoryPage';
import PredictPage from './pages/PredictPage';
import { useSelector } from 'react-redux';
import { selectUser } from './reducers/userSlice';
import Navbar from './componenets/Navbar';
import './App.css';

function App() {
  const user = useSelector(selectUser);

  const DecorateRoute = ({element, path}) => {
    console.log(user);
    if (!user && path === '/login') {
      return element;
    }
    else if (user && path === '/login') {
      return <Navigate to="/" />;
    } 
    else {
      return element;
    }
  }

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
