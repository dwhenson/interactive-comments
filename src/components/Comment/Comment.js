import React from "react";
import User from "../User/User";
import Score from "../Score/Score";
import ButtonMinor from "../ButtonMinor/ButtonMinor";
import AddComment from "../AddComment/AddComment";
import ButtonMajor from "../ButtonMajor/ButtonMajor";
import Modal from "../Modal/Modal";

function Comment({
  content,
  createdAt,
  score,
  user,
  currentUser,
  thread,
  threads,
  setThreads,
  replyId,
  // replies,
  // setReplies,
  showModal,
  setShowModal,
}) {
  const [reply, setReply] = React.useState(false);
  const [editable, setEditable] = React.useState(false);
  const editableContent = React.useRef();

  return (
    <>
      <div className="card" id={replyId ?? thread.id}>
        <div className="card-wrapper">
          <div style={{ width: "100%" }}>
            <User
              user={user.username}
              image={user.image.webp}
              createdAt={createdAt}
            />
            <p
              className="content"
              contentEditable={editable}
              ref={editableContent}>
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
            threads={threads}
            setThreads={setThreads}
            editable={editable}
            setEditable={setEditable}
            editableContent={editableContent}
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
          threads={threads}
          setThreads={setThreads}
          // replies={replies}
          // setReplies={setReplies}
          setReply={setReply}
        />
      )}
    </>
  );
}

export default Comment;
