import React from "react";
import ButtonMajor from "../ButtonMajor/ButtonMajor";

function AddComment({
  currentUser,
  thread = null,
  threads,
  setThreads,
  action = "send",
  setReply = null,
}) {
  const [text, setText] = React.useState("");
  const textarea = React.useRef();

  React.useEffect(() => {
    textarea.current.scrollIntoView();
    textarea.current.focus();
  }, []);

  function handleAddComment(event) {
    event.preventDefault();
    if (!text) return;

    const newItem = {
      id: crypto.randomUUID().slice(0, 6),
      content: text,
      createdAt: "Just now",
      score: 0,
      user: {
        image: {
          // HACK need to add "?" here?
          png: `./images/avatars/image-${currentUser.username}.png`,
          webp: `./images/avatars/image-${currentUser.username}.webp`,
        },
        username: currentUser?.username,
      },
    };

    if (action === "send") {
      const nextThreads = [...threads, { ...newItem, replies: [] }];
      setThreads(nextThreads);
    }

    if (action === "reply") {
      const newReply = { ...newItem, replyId: crypto.randomUUID().slice(0, 6) };
      const addedReply = [...thread.replies, newReply];
      const updatedThread = { ...thread, replies: addedReply };
      const nextThreads = threads.map((thread) =>
        thread.id !== updatedThread.id ? thread : updatedThread
      );
      setThreads(nextThreads);
      setReply(false);
    }

    setText("");
  }

  return (
    <form className="add-comment" onSubmit={handleAddComment}>
      <div className="card">
        <div className="card-wrapper">
          <img
            src={`./images/avatars/image-${currentUser.username}.webp`}
            alt=""
          />
          <textarea
            ref={textarea}
            placeholder={"Add comment..."}
            value={text}
            id="addComment"
            onChange={(event) => setText(event.target.value)}
          />
          <label htmlFor="addComment" className="visually-hidden">
            Add comment
          </label>
          <ButtonMajor action={action} />
        </div>
      </div>
    </form>
  );
}

export default AddComment;
