import React from "react";

function Comment() {
  const [comments, setComments] = React.useState([]);

  React.useEffect(() => {
    const data = require("../../data.json");
    setComments(data.comments);
  }, []);

  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>{comment.content}</li>
      ))}
    </ul>
  );
}

export default Comment;
