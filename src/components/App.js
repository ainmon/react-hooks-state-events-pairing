import video from "../data/video.js";
import Header from "./Header.js";
import CommentList from "./CommentList.js";
import { useState } from "react/cjs/react.development";

function App() {
  console.log("Here's your data:", video);
  
  const [comment, setComments] = useState(true)

  function hideComments(){
    console.log('something!')
    setComments((comment) => !comment)
      
 }

  return (
    <div className="App">
      <iframe
        width="925"
        height="525"
        src="https://www.youtube.com/embed/dpw9EHDh2bM"
      />
      <Header video={video} handleCommentDisplay={hideComments} comment={comment}/>
      <CommentList video={video} displayComment={comment} />
    </div>
    
  );
}

export default App;
