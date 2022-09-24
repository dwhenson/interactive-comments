import React from "react";
import Comment from "../Comment/Comment";

function Replies({
  currentUser,
  thread,
  setThreads,
  // replies,
  // setReplies,
  showModal,
  setShowModal,
}) {
  return (
    // eslint-disable-next-line
    <ul role="list" className="replies">
      {thread.replies.map(({ content, createdAt, id, score, user }) => (
        <li key={id}>
          <Comment
            content={content}
            createdAt={createdAt}
            score={score}
            user={user}
            currentUser={currentUser}
            thread={thread}
            setThreads={setThreads}
            // replies={replies}
            // setReplies={setReplies}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        </li>
      ))}
    </ul>
  );
}

export default Replies;
