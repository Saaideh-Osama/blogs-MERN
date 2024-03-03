import React, { useEffect } from 'react'
import {useState} from 'react'
import Post from '../post'
import './css/index.css'
import coverPhoto from './images/pexels-ylanite-koppens-796602.jpg'
function Index() {
function hidebanner(){
  document.getElementById('banner').style.display='none';
 
 
  document.getElementById('frontPage').style.columnGap='5vh';
  
  document.getElementById('frontPage').style.backgroundColor='white';
}  
  const [posts,setPosts] = useState([]);
  const [username,setUsername] = useState(null);
  useEffect (() => {
     fetch('http://localhost:9000/post').then(response=>{
        response.json().then(posts=>{
          setPosts(posts);
        })
      
     });
     fetch('http://localhost:9000/profile',{credentials:'include'}).then(response => {
      response.json().then(userInfo=>{
  setUsername(userInfo.username);})
      })
     },[]);
  return (
    <div id='frontPage'>
      <img src={coverPhoto} id="coverPhoto" alt={"cover Photo"}/>
    <div id="banner">Create Your Personal Blogs </div>
    {posts.length>0 && posts.filter(post=>post.author.username===username).map(post=><Post {...post} key={post._id}/>) }
    {posts.length>0 && hidebanner()}
    </div>
    
  )
}

export default Index