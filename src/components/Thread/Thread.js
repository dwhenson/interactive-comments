import React from "react";
import Comment from "../Comment/Comment";
import Replies from "../Replies/Replies";

function Thread({ thread, currentUser }) {
  // FIXME Sort out whether to destructure or not
  const { content, createdAt, id, replies, score, user } = thread;

  return (
    <li key={id}>
      <Comment
        content={content}
        createdAt={createdAt}
        score={score}
        user={user}
        currentUser={currentUser}
      />
      {replies.length > 1 && (
        <Replies replies={replies} currentUser={currentUser} />
      )}
    </li>
  );
}

export default Thread;
