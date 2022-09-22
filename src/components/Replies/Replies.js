import React from "react";
import Comment from "../Comment/Comment";

function Replies({ replies, currentUser }) {
  console.log(currentUser);

  return (
    // eslint-disable-next-line
    <ul role="list" className="replies">
      {replies.map(({ content, createdAt, id, score, user }) => (
        <li key={id}>
          <Comment
            content={content}
            createdAt={createdAt}
            score={score}
            user={user}
            currentUser={currentUser}
          />
        </li>
      ))}
    </ul>
  );
}

export default Replies;
