import { useState, useEffect } from "react";
import Comment from "./Comment";
import Like from "./Like";
import Dislike from "./Dislike";

const CommentsContainer = ({ setLikes, setDislikes }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments",
        { mode: "cors" },
      );
      const fetchedComments = await response.json();
      const filtered = fetchedComments.slice(0, 25);
      setComments(filtered);
    })();
  }, []);

  const onLikeClick = () => setLikes((prevVal) => prevVal + 1);
  const onDislikeClick = () => setDislikes((prevVal) => prevVal + 1);

  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id}>
          <Comment data={comment.body} />
          <Like clickHandler={onLikeClick} />
          <Dislike clickHandler={onDislikeClick} />
        </div>
      ))}
    </div>
  );
};

export default CommentsContainer;
