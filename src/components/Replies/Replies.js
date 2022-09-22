import React from "react";
import Comment from "../Comment/Comment";

function Replies({ currentUser, thread, replies, setReplies }) {
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
            thread={thread}
            replies={replies}
            setReplies={setReplies}
          />
        </li>
      ))}
    </ul>
  );
}

export default Replies;
