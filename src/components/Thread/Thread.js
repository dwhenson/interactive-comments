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
  // const [replies, setReplies] = React.useState(thread.replies);
  const [reply, setReply] = React.useState(false);
  return (
    <li>
      <Comment
        content={content}
        createdAt={createdAt}
        score={score}
        user={user}
        currentUser={currentUser}
        reply={reply}
        setReply={setReply}
        showModal={showModal}
        setShowModal={setShowModal}
        thread={thread}
        threads={threads}
        setThreads={setThreads}
      />

      {(thread.replies.length > 0 || reply) && (
        <Replies
          currentUser={currentUser}
          thread={thread}
          threads={threads}
          setThreads={setThreads}
          reply={reply}
          setReply={setReply}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
    </li>
  );
}

export default Thread;
