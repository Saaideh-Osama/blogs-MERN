import {useState} from "react";
import {Navigate} from "react-router-dom";
import ReactQuill from "react-quill";
import './css/createpost.css'
import 'react-quill/dist/quill.snow.css';

export default function CreatePost() {
  const [title,setTitle] = useState('');
  const [summary,setSummary] = useState('');
  const [content,setContent] = useState('');
  
  const [redirect, setRedirect] = useState(false);
  
 async  function createNewPost(e) {
  
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    e.preventDefault();
    const response = await fetch('http://localhost:9000/post', {
        method: 'POST',
        body:data, 
        credentials: 'include',
      }) ;
   
    if (response.ok) {
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />
  }
  return (<div id="formPage">
    <form onSubmit={createNewPost} id="form">
      <input type="title"
             placeholder={' Title ...'}
             value={title}
             onChange={e => setTitle(e.target.value)} />
      <input type="summary"
             placeholder={' Summary ...'}
             value={summary}
             onChange={e => setSummary(e.target.value)} />
<textarea value={content} onChange={e => setContent(e.target.value)} placeholder={' Blog Body ...'} rows={'10'}></textarea>
      <button  type="submit" id="publish">Create post</button>
    </form></div>
  )
}