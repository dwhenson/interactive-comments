import React from "react";
import Comment from "../Comment/Comment";
import Replies from "../Replies/Replies";

function Thread({ thread }) {
  const { content, createdAt, id, replies, score, user } = thread;

  return (
    <li key={id}>
      <Comment
        content={content}
        createdAt={createdAt}
        score={score}
        user={user}
      />
      {replies.length > 1 && <Replies replies={replies} />}
    </li>
  );
}

export default Thread;
