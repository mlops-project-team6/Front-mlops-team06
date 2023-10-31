// src/components/SignupPage.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import axios from 'axios';

const SignupPage = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({ email: '', password: '' });

  const handleSignup = async () => {
    // 회원가입을 처리하는 로직을 추가
    const apiUrl = 'http://localhost:8000/auth/signup';
    try{
        console.log(userData)
        const resp = await axios.post(apiUrl, userData);
        if (resp.data.success){
            alert(resp.data.message);
        }
        else{
            alert(resp.data.message);
        }
    } catch (error){
        console.error(error);
        alert('회원가입 실패, 서버 또는 네트워크 오류');
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      
      <input
        type="email"
        placeholder="Email"
        value={userData.email}
        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={userData.password}
        onChange={(e) => setUserData({ ...userData, password: e.target.value })}
      />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
};

export default SignupPage;
