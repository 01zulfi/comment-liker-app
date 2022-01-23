const Counter = ({ likes, dislikes }) => {
  return (
    <div>
      <h2>Likes: {likes}</h2>
      <h2>Dislikes: {dislikes}</h2>
    </div>
  );
};

export default Counter;
