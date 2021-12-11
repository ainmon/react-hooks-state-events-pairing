

function Comment({text, message, key}){

    return (
        <div className="comment">
            <h3 key={key}>{text}</h3>
            <p>{message}</p>
        </div>
    )
}

export default Comment