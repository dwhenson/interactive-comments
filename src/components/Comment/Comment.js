import React from "react";
import User from "../User/User";
import Score from "../Score/Score";
import ButtonMinor from "../ButtonMinor/ButtonMinor";
import AddComment from "../AddComment/AddComment";
import ButtonMajor from "../ButtonMajor/ButtonMajor";

function Comment({
  content,
  createdAt,
  score,
  user,
  currentUser,
  thread,
  replies,
  setReplies,
  showModal,
  setShowModal,
}) {
  const [reply, setReply] = React.useState(false);
  const [editable, setEditable] = React.useState(false);

  return (
    <>
      <div className="card">
        <div className="card-wrapper">
          <div style={{ width: "100%" }}>
            <User
              user={user.username}
              image={user.image.webp}
              createdAt={createdAt}
            />
            <p className="content" contentEditable={editable}>
              {content}
            </p>
          </div>
          <Score score={score} />
          <ButtonMinor
            action={"Reply"}
            reply={reply}
            setReply={setReply}
            user={user}
            currentUser={currentUser}
            showModal={showModal}
            setShowModal={setShowModal}
            thread={thread}
            editable={editable}
            setEditable={setEditable}
          />
        </div>
        {editable && (
          <ButtonMajor action={"update"} setEditable={setEditable} />
        )}
      </div>
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
