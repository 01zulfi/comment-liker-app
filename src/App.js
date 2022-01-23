import { useState } from "react";
import Counter from "./components/Counter";
import CommentsContainer from "./components/CommentsContainer";

function App() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  return (
    <div>
      <Counter likes={likes} dislikes={dislikes} />
      <CommentsContainer setLikes={setLikes} setDislikes={setDislikes} />
    </div>
  );
}

export default App;
