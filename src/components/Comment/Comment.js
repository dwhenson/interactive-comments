import React from "react";
import User from "../User/User";
import Score from "../Score/Score";
import ButtonMinor from "../ButtonMinor/ButtonMinor";
import AddComment from "../AddComment/AddComment";

function Comment({
  content,
  createdAt,
  score,
  user,
  currentUser,
  thread,
  replies,
  setReplies,
}) {
  const [reply, setReply] = React.useState(false);

  return (
    <>
      <div className="card">
        <div>
          <User
            user={user.username}
            image={user.image.webp}
            createdAt={createdAt}
          />
          <p className="content">{content}</p>
        </div>
        <Score score={score} />
        <ButtonMinor
          action={"Reply"}
          reply={reply}
          setReply={setReply}
          user={user}
          currentUser={currentUser}
        />
      </div>
      {/* eslint-disable-next-line */}

      {reply && (
        <AddComment
          currentUser={currentUser}
          thread={thread}
          action={"reply"}
          replies={replies}
          setReplies={setReplies}
          setReply={setReply}
        />
      )}
    </>
  );
}

export default Comment;
