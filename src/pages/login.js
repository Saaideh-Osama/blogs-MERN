import React from 'react'
import {useContext, useState} from "react";
import {Navigate} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './css/login.css';

function LoginP() {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [redirect,setRedirect] = useState(false);
  const navigate = useNavigate()
  async function login(e) {
    e.preventDefault();
    const response = await fetch('http://localhost:9000/login', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type':'application/json'},
      credentials: 'include',
    });
    if(response.ok) {
         setRedirect(true)}
     else {
      alert('wrong credentials');
    }
  }

  if (redirect) {
    
    navigate("/");
    window.location.reload(false);
    
  }
  
  return (
    <div className='loginPage'>
    <form className="login" onSubmit={login}>
    <h1>Login</h1>
    <input type="text"
           placeholder=" Username"
           value={username}
           onChange={e => setUsername(e.target.value)}/>
    <input type="password"
           placeholder=" Password"
           value={password}
           onChange={e => setPassword(e.target.value)}/>
    <button id="login" className='button-86'>Login</button>
  </form>
  </div>)
}

export default LoginP

