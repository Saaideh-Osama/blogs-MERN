import React from 'react'
import {useState,useEffect} from 'react';
import Post from '../post'
function Blogs() {
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
    <div>
<p>blogs</p>

{posts.length>0 && posts.filter(post=>post.author.username===username).map(post=><Post {...post} key={post._id}/>)}

    </div>
  )
}

export default Blogs