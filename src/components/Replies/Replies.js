import React from "react";
import Comment from "../Comment/Comment";

function Replies({
  currentUser,
  thread,
  threads,
  setThreads,
  // replies,
  // setReplies,
  showModal,
  setShowModal,
}) {
  return (
    // eslint-disable-next-line
    <ul role="list" className="replies">
      {thread.replies.map(
        ({ content, createdAt, id, score, user, replyId }) => (
          <li key={id}>
            <Comment
              content={content}
              createdAt={createdAt}
              score={score}
              user={user}
              currentUser={currentUser}
              threads={threads}
              thread={thread}
              setThreads={setThreads}
              replyId={replyId}
              // replies={replies}
              // setReplies={setReplies}
              showModal={showModal}
              setShowModal={setShowModal}
            />
          </li>
        )
      )}
    </ul>
  );
}

export default Replies;
