import React from "react";
import Comment from "../Comment/Comment";

function Comments() {
  const [comments, setComments] = React.useState([]);

  React.useEffect(() => {
    const data = require("../../data.json");
    setComments(data.comments);
  }, []);

  return (
    // eslint-disable-next-line
    <ul role="list">
      {comments.map((comment) => (
        <Comment data={comment} />
      ))}
    </ul>
  );
}

export default Comments;
