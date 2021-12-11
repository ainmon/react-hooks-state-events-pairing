import { useState } from "react"


function Header({video, handleCommentDisplay, comment}){
    const [likes, setLikes] = useState(video.upvotes)
    const [dislikes, setDislikes] = useState(video.downvotes)
    // const [comment, setComments] = useState('false')

    function handleClickLike(){
        console.log('like!')
        console.log(likes)
        video.upvotes = setLikes(likes + 1)
        
    }

    function handleClickDislike(){
        console.log('dislike!')
        console.log(dislikes)
        video.downvotes = setDislikes(dislikes - 1)
    }

   // function hideComments(){
     //   console.log('something!')
      // setComments((comment) => !comment)
         
    // }
    
    
    return (
        <div className="header">
            <h1>React Today and Tomorrow and 90% Cleaner React With Hooks</h1>
            <p> {video.views} views | uploaded {video.createdAt}</p>
            <button className="like" onClick={handleClickLike}>{likes}👍</button>
            <button className="dislike" onClick={handleClickDislike}>{dislikes}👎</button>
            <button className="hide-comment" onClick={handleCommentDisplay}>{comment ? "Show Comments" : "Hide Comments"}</button>
        </div>
    )
}

export default Header