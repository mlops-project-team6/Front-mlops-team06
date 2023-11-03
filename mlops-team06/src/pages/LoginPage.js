import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [session, setSession] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const userEmail = sessionStorage.getItem('userEmail');
    if (userEmail) {
      navigate('/');
    }
  }, []);


  const handleLogin = async (e) => {
    e.preventDefault();
    const defaultUrl = process.env.REACT_APP_API_DEFAULT_URL;
    console.log(defaultUrl);
    const apiUrl = defaultUrl + "/auth/login";
    const json_data = {
      'email': email,
      'password': password,
    };
    console.log(apiUrl);
    const resp = await axios.post("/api/auth/login", json_data)
    console.log(resp.data)
    if (resp.data.success) {
      sessionStorage.setItem('userEmail', email)
      sessionStorage.setItem('sessionID', session)
      navigate('/');
    }
    else {
      return alert(resp.data.message)
    }
  };

  return (
    <div className="container mt-5">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title text-center mb-4">Login</h2>
            <form>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="text-center">
                <button
                  className="btn btn-primary"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  );
};

export default LoginPage;