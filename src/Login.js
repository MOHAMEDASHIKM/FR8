// src/components/Login.js
import React, { useState } from 'react';
// import Home from './home';
import './App.css';


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here (e.g., make an API call to verify credentials)
    console.log('Username:', username);
    console.log('Password:', password);

  };

  return (
    <div>
      <h2>Student Login</h2>
      <form>
        <label>
          Student Name:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='input'
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='input'
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin}  className='btn'>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
