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

  return (
    <li>
      <Comment
        content={content}
        createdAt={createdAt}
        score={score}
        user={user}
        currentUser={currentUser}
        // replies={thread.replies}
        // setReplies={setReplies}
        showModal={showModal}
        setShowModal={setShowModal}
        thread={thread}
        threads={threads}
        setThreads={setThreads}
      />

      {thread.replies.length > 0 && (
        <Replies
          currentUser={currentUser}
          thread={thread}
          threads={threads}
          setThreads={setThreads}
          // replies={thread.replies}
          // setReplies={setReplies}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
    </li>
  );
}

export default Thread;
