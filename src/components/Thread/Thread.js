import React from "react";
import Comment from "../Comment/Comment";
import Replies from "../Replies/Replies";

function Thread({
  thread,
  threads,
  setThreads,
  currentUser,
  showModal,
  setShowModal,
}) {
  const { content, createdAt, score, user } = thread;

  const [reply, setReply] = React.useState(false);
  return (
    <li>
      <Comment
        content={content}
        createdAt={createdAt}
        score={score}
        user={user}
        currentUser={currentUser}
        thread={thread}
        reply={reply}
        setReply={setReply}
        threads={threads}
        showModal={showModal}
        setThreads={setThreads}
        setShowModal={setShowModal}
      />

      {(thread.replies.length > 0 || reply) && (
        <Replies
          currentUser={currentUser}
          thread={thread}
          reply={reply}
          setReply={setReply}
          threads={threads}
          setThreads={setThreads}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
    </li>
  );
}

export default Thread;
