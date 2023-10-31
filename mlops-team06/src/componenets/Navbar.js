import React from 'react';
import { Link } from 'react-router-dom';
import { handleLogout } from '../pages/HomePage';

function Navbar() {
  const userEmail = sessionStorage.getItem('userEmail');

  return (
    <div className='container'>
      <div className='row'>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
              <Link to="/" className="navbar-brand">내일의 주식</Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link to="/predict" className="nav-link">Predict</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/history" className="nav-link">History</Link>
                  </li>
                  {userEmail ? (
                    <li className="nav-item">
                      <Link className="nav-link" onClick={handleLogout}>Logout</Link>
                    </li>
                  ) : (
                    <li className="nav-item">
                      <Link to="/login" className="nav-link">Login</Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>

  );
}

export default Navbar;
