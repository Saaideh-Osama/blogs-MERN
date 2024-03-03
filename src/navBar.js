import React, { useEffect, useState } from 'react'
import {Navigate} from 'react-router-dom'
import './pages/css/navBar.css'
import logo from './pages/images/download (1).png'
function NavBar() {
  const [username,setUsername] = useState(null)
 const  [passowrd,setPassowrd] = useState(null)

 function goToHome(){

    return <Navigate to={'/'} />
 
 }
  useEffect (() => {
    fetch('http://localhost:9000/profile',{credentials:'include'}).then(response => {
    response.json().then(userInfo=>{
setUsername(userInfo.username);})
    })
    },[])

    function logout(){
      fetch('http://localhost:9000/logout',{credentials:'include',
    method:'POST'})}
  return (
    <div className="navbar">
    <a  id="logo" href='/'> <img src={logo} alt="logo"/> </a>
    {username && <div className='navbar'><a href='/create' id="createblogbtn">Create Blog</a>

    <a onClick={logout} href=''>Log Out</a>  <p id='profile' >Welcome {username} ! </p>
     </div>} 
  {!username && <span className='navbar'><a href='/login'>Login</a> <a href='/register'>Register</a></span>}
    </div>
  )
}

export default NavBar