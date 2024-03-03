import React from 'react'
import { useState } from 'react'
import './css/register.css'
function RegisterP() {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
   async function register(e){
        e.preventDefault();
    const response = await fetch('http://localhost:9000/register',{
            method: 'POST',
            body: JSON.stringify({username,password}),
            headers: {'Content-Type':'application/json'},
        })
    if(response.status===200){
        alert("registration successful")

    }
    else{
        alert("register failed !")

    }
    }
    
    
    return (
    <div className='registerPage'>

    <form method="POST"  onSubmit={register} id='registerForm' > 
    <h1> Registration </h1>
    <input type='text' placeholder=' Username' value={username} onChange={e=>setUsername(e.target.value)}/>
    <input type='password' placeholder=' Password' value={password} onChange={e=>setPassword(e.target.value)}/>
    <button type='submit'   className='button-86'>Register</button>
    </form>
    </div>
    )}

export default RegisterP