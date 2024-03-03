import React from 'react'
import TimeAgo from 'timeago-react'; 
import './pages/css/post.css'
function Post({title,summary,content,createdAt,author}) {
  return (
    
    <div className="entry">
      <p id="title"> {title} </p>
      <p id="summary"> {summary}</p>
      <p id="content"> {content}</p>
      <TimeAgo  datetime={createdAt}  locale='en' id="creationTime"/>
<p id="username">{author.username}</p>
    </div>
  )
}

export default Post