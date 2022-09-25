import React from "react";
import Comment from "../Comment/Comment";
import AddComment from "../AddComment/AddComment";

function Replies({
  currentUser,
  thread,
  threads,
  setThreads,
  reply,
  setReply,
  showModal,
  setShowModal,
}) {
  return (
    <>
      {/* eslint-disable-next-line */}
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
        {reply && (
          <AddComment
            currentUser={currentUser}
            thread={thread}
            action={"reply"}
            threads={threads}
            setThreads={setThreads}
            // replies={replies}
            // setReplies={setReplies}
            setReply={setReply}
          />
        )}
      </ul>
    </>
  );
}

export default Replies;
