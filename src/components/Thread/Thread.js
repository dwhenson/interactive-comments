import React from "react";
import Comment from "../Comment/Comment";
import Replies from "../Replies/Replies";

function Thread({ thread, currentUser, showModal, setShowModal }) {
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
        showModal={showModal}
        setShowModal={setShowModal}
        thread={thread}
      />

      {replies.length > 0 && (
        <Replies
          currentUser={currentUser}
          thread={thread}
          replies={replies}
          setReplies={setReplies}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
    </li>
  );
}

export default Thread;
