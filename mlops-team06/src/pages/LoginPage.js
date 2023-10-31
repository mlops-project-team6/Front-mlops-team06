// src/components/LoginPage.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../reducers/userSlice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [session, setSession] = useState('');
  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();
    const apiUrl = "http://127.0.0.1:8000/auth/login";
    const json_data = {
      'email':email,
      'password':password,
    };
    const resp = await axios.post(apiUrl, json_data)
    console.log(resp.data)
    if (resp.data.success) {
      dispatch(login({
        email:email,
        password:password,
        session:session,
        loggedIn:true,
      }));
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
