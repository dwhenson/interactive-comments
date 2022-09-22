import React from "react";
import Comment from "../Comment/Comment";
import Replies from "../Replies/Replies";

function Thread({ thread, currentUser }) {
  const { content, createdAt, score, user } = thread;
  const [replies, setReplies] = React.useState(thread.replies);

  return (
    <li>
      <Comment
        content={content}
        createdAt={createdAt}
        score={score}
        user={user}
        currentUser={currentUser}
        replies={replies}
        setReplies={setReplies}
      />
      {replies.length > 0 && (
        <Replies
          currentUser={currentUser}
          thread={thread}
          replies={replies}
          setReplies={setReplies}
        />
      )}
    </li>
  );
}

export default Thread;
