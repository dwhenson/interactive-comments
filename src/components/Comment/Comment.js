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
  reply,
  setReply,
  showModal,
  setShowModal,
}) {
  const [editable, setEditable] = React.useState(false);
  const [itemId, setItemId] = React.useState();
  const [newContent, setNewContent] = React.useState(content);
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
            {editable && (
              <textarea
                className="content"
                ref={editableContent}
                value={newContent}
                onChange={(event) => setNewContent(event.target.value)}>
                {content}
              </textarea>
            )}
            {editable || (
              <p className="content" ref={editableContent}>
                {content}
              </p>
            )}
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
            itemId={itemId}
            setItemId={setItemId}
          />
        </div>

        {editable && (
          <ButtonMajor
            action={"update"}
            setEditable={setEditable}
            newContent={newContent}
            thread={thread}
            threads={threads}
            setThreads={setThreads}
            itemId={itemId}
            setItemId={setItemId}
          />
        )}
      </div>
    </>
  );
}

export default Comment;
