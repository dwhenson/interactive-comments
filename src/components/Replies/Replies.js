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
                replyId={replyId}
                currentUser={currentUser}
                thread={thread}
                threads={threads}
                setThreads={setThreads}
                setReply={setReply}
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
            setReply={setReply}
          />
        )}
      </ul>
    </>
  );
}

export default Replies;
