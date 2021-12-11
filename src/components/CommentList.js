
import Comment from "./Comment"

function CommentList( {video, displayComment} ){
    
    

    let data = video.comments
    console.log(data)

    
    const listComments = data.map((item) => { 
           return (
                <Comment 
                key={item.id}
                text={item.user}
                message={item.comment}
                />
           )
        })

        console.log(data)
        console.log(listComments)
    
    return(
        <div className="commentsection" >
            <h2>{video.comments.length} Comments</h2>
            <div className="details">{displayComment ? listComments : null}</div>
        </div>
    )

}

export default CommentList