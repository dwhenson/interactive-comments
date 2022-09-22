import React from "react";
import User from "../User/User";
import Score from "../Score/Score";
import ButtonMinor from "../ButtonMinor/ButtonMinor";
import AddComment from "../AddComment/AddComment";

function Comment({ content, createdAt, score, user, currentUser }) {
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
        <ButtonMinor action={"reply"} reply={reply} setReply={setReply} />
      </div>
      {/* eslint-disable-next-line */}
      <ul role="list" className="replies">
        {reply && (
          <AddComment
            currentUser={currentUser}
            // threads={threads}
            // setThreads={setThreads}
            action={"reply"}
          />
        )}
      </ul>
    </>
  );
}

export default Comment;
